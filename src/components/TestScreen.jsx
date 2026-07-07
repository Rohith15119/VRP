import { useState, useEffect, useCallback, useRef } from "react";
import { getRandomQuestions } from "../data/questions";

const TIMER_DURATION = 25; // seconds per question
const TOTAL_QUESTIONS = 20;

export default function TestScreen({ difficulty, onFinish, onBack, useAI, apiKey }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isFinished, setIsFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  
  // AI states
  const [loadingAI, setLoadingAI] = useState(false);
  const [aiError, setAiError] = useState(null);

  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const currentIndexRef = useRef(0);
  const questionsRef = useRef([]);

  // Keep refs in sync
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    questionsRef.current = questions;
  }, [questions]);

  // Load questions (AI or Local)
  const loadQuestions = useCallback(async () => {
    if (useAI && apiKey) {
      setLoadingAI(true);
      setAiError(null);
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `Generate 20 unique sentence completion questions for TCS NQT Verbal Ability practice.
Difficulty: ${difficulty.toUpperCase()}

Guidelines based on difficulty level:
${
  difficulty === "easy"
    ? `Easy level: Focus on simple sentences testing basic grammar/vocabulary confusions. Frame questions testing these exact concepts:
1. send vs give/gift (e.g. She _____ her friend a birthday card. Answer: sent)
2. submit vs complete (e.g. The teacher asked the students to _____ their homework by Friday. Answer: submit)
3. exercise vs diet (e.g. It is important to _____ regularly to stay healthy. Answer: exercise)
4. happy vs proud (e.g. He was very _____ to receive the award. Answer: happy)
5. filled with (e.g. The night sky was _____ with thousands of stars. Answer: filled)
6. enjoyed vs eaten (e.g. The cake was _____ by everyone at the party. Answer: enjoyed)
7. exhausted vs tired (e.g. He felt _____ after running the marathon. Answer: exhausted)
8. closed vs shut (e.g. He _____ the door quietly so as not to wake the baby. Answer: closed)
9. convert into vs move (e.g. They decided to _____ the old building into a museum. Answer: convert)
10. impressive vs outstanding (e.g. The movie was so _____ that the audience gave a standing ovation. Answer: impressive)
11. flooded (e.g. The road was _____ due to heavy rainfall. Answer: flooded)
12. built vs constructed (e.g. The bridge was _____ over a wide river. Answer: built)
13. cold vs freezing (e.g. The weather was very _____ during the winter season. Answer: cold)
14. beautiful (e.g. The flowers in the garden looked very _____. Answer: beautiful)
15. amused vs funny (e.g. She was so _____ that she could not stop laughing. Answer: amused)
16. studied vs practiced (e.g. The student _____ hard for the final examination. Answer: studied)
17. essential vs source (e.g. Water is _____ for the survival of all living beings. Answer: essential)
18. created vs has (e.g. She _____ a beautiful painting for the art competition. Answer: created)
19. arrives vs goes (e.g. He always _____ to school on time. Answer: arrives)
20. slept vs sleep (e.g. The baby _____ peacefully in the cradle. Answer: slept)

Generate new sentences testing these exact 20 patterns and concepts, but do not copy the exact sentences word for word.`
    : difficulty === "medium"
    ? `Medium level: Focus on high-frequency placement verbs/adjectives and collocations. Frame questions testing these:
Verbs: arrive, achieve, obtain, acquire, create, convert, submit, receive, accept, reject, improve, reduce, increase, maintain, prevent, avoid, provide, develop, establish, perform.
Adjectives: essential, impressive, efficient, effective, significant, remarkable, successful, exhausted, delighted, amused, accurate, reliable, beautiful, dangerous, difficult, simple, powerful, useful, modern, traditional.
Collocations to test:
- submit assignment
- make decision
- send email
- receive award
- heavy rain
- strong coffee
- fast learner
- highly qualified
- deeply concerned
- closely related
- pay attention
- draw conclusion
- solve problem
- gain experience
- conduct research
- reach destination
- arrive on time
- build bridge
- create software`
    : `Hard level: Focus on standard English idioms commonly found in TCS NQT exams. Frame questions testing these idioms (the blank should represent the key word in the idiom):
- burn the midnight oil (blank: midnight)
- once in a blue moon (blank: blue)
- break the ice (blank: ice)
- spill the beans (blank: beans)
- miss the boat (blank: boat)
- hit the nail on the head (blank: head)
- under the weather (blank: weather)
- bite the bullet (blank: bullet)
- cost an arm and a leg (blank: leg)
- blessing in disguise (blank: disguise)
- keep your chin up (blank: up)
- on cloud nine (blank: nine)
- call it a day (blank: day)
- face the music (blank: music)
- butterflies in stomach (blank: stomach)
- get act together (blank: together)
- add fuel to fire (blank: fire)
- eleventh hour (blank: hour)
- cry over spilled milk (blank: milk)
- in the dark (blank: dark)`
}

Output MUST be a JSON object containing an array of 20 question objects.
Format:
{
  "questions": [
    {
      "id": "ai_1",
      "sentence": "The candidate had to _____ a decision quickly.",
      "answers": ["make", "take", "reach"],
      "hint": "Collocation: make a decision"
    }
  ]
}`,
                    },
                  ],
                },
              ],
              generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                  type: "OBJECT",
                  properties: {
                    questions: {
                      type: "ARRAY",
                      items: {
                        type: "OBJECT",
                        properties: {
                          id: { type: "STRING" },
                          sentence: { type: "STRING" },
                          answers: {
                            type: "ARRAY",
                            items: { type: "STRING" },
                          },
                          hint: { type: "STRING" },
                        },
                        required: ["id", "sentence", "answers", "hint"],
                      },
                    },
                  },
                  required: ["questions"],
                },
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`API returned status ${response.status}`);
        }

        const data = await response.json();
        const jsonText = data.candidates[0].content.parts[0].text;
        const parsed = JSON.parse(jsonText);
        
        if (parsed && parsed.questions && parsed.questions.length > 0) {
          setQuestions(parsed.questions);
          setLoadingAI(false);
          return;
        }
        throw new Error("No questions found in API response");
      } catch (err) {
        console.error("AI question generation failed:", err);
        setAiError(err.message || "Failed to generate AI questions");
        setLoadingAI(false);
        // Fallback to local
        const q = getRandomQuestions(difficulty, TOTAL_QUESTIONS);
        setQuestions(q);
      }
    } else {
      const q = getRandomQuestions(difficulty, TOTAL_QUESTIONS);
      setQuestions(q);
    }
  }, [difficulty, useAI, apiKey]);

  // Load random questions on mount
  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const moveToNext = useCallback(() => {
    clearInterval(timerRef.current);
    if (currentIndexRef.current >= questionsRef.current.length - 1) {
      setIsFinished(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setTimeLeft(TIMER_DURATION);
  }, []);

  // Timer logic
  useEffect(() => {
    if (isFinished || questions.length === 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up — schedule the move outside setState
          setTimeout(() => moveToNext(), 0);
          return TIMER_DURATION;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentIndex, isFinished, questions.length, moveToNext]);

  // Focus input on question change
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setShowHint(false);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    moveToNext();
  }, [moveToNext]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setAnswers((prev) => ({
      ...prev,
      [questions[currentIndex].id]: value,
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  const handleHint = () => {
    setShowHint(true);
    setHintsUsed((prev) => prev + 1);
  };

  const handleFinishTest = () => {
    clearInterval(timerRef.current);
    setIsFinished(true);
  };

  const sanitizeWord = (word) => {
    if (!word) return "";
    return word
      .trim()
      .toLowerCase()
      .replace(/^[.,\/#!$%\^&\*;:{}=\-_`~()'"\s\\]+|[.,\/#!$%\^&\*;:{}=\-_`~()'"\s\\]+$/g, "");
  };

  // Calculate results
  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    const details = questions.map((q) => {
      const rawUserAns = answers[q.id] || "";
      const cleanUserAns = sanitizeWord(rawUserAns);
      const acceptedAnswers = q.answers.map((a) => sanitizeWord(a));
      
      const isCorrect = cleanUserAns !== "" && acceptedAnswers.includes(cleanUserAns);

      if (!rawUserAns.trim()) {
        unanswered++;
      } else if (isCorrect) {
        correct++;
      } else {
        wrong++;
      }

      return {
        ...q,
        userAnswer: rawUserAns,
        isCorrect,
        isUnanswered: !rawUserAns.trim(),
      };
    });

    return { correct, wrong, unanswered, details, total: questions.length };
  };

  if (loadingAI) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>🤖 AI is generating 20 custom questions for you...</p>
        <span className="loading-subtext">Powered by Gemini 2.5 Flash</span>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Preparing your questions...</p>
      </div>
    );
  }

  if (isFinished) {
    const results = calculateResults();
    return (
      <ResultsScreen
        results={results}
        difficulty={difficulty}
        hintsUsed={hintsUsed}
        onRetry={() => {
          setAnswers({});
          setCurrentIndex(0);
          setTimeLeft(TIMER_DURATION);
          setIsFinished(false);
          setHintsUsed(0);
          loadQuestions();
        }}
        onBack={onBack}
        onFinish={onFinish}
      />
    );
  }

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const timerPercent = (timeLeft / TIMER_DURATION) * 100;
  const timerColor =
    timeLeft <= 5 ? "var(--danger)" : timeLeft <= 10 ? "var(--warning)" : "var(--accent)";

  // Render the sentence with blank highlighted
  const renderSentence = (sentence) => {
    const parts = sentence.split("_____");
    const userAnswer = answers[currentQ.id] || "";
    return (
      <span>
        {parts[0]}
        <span className="blank-slot">
          {userAnswer || "_____"}
        </span>
        {parts[1]}
      </span>
    );
  };

  return (
    <div className="test-screen">
      {/* Header */}
      <div className="test-header">
        <div className="test-header-left">
          <span className={`difficulty-badge ${difficulty}`}>{difficulty.toUpperCase()}</span>
          {useAI && <span className="ai-badge">🤖 AI MODE</span>}
          <span className="question-counter">
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>
        <div className="test-header-right">
          {aiError && <span className="ai-error-tag" title={aiError}>Fallback Active ⚠️</span>}
          <button className="btn-outline btn-sm" onClick={handleFinishTest}>
            End Test
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Timer */}
      <div className="timer-section">
        <div className="timer-ring" style={{ "--timer-percent": timerPercent, "--timer-color": timerColor }}>
          <div className="timer-inner">
            <span className={`timer-value ${timeLeft <= 5 ? "pulse" : ""}`}>{timeLeft}</span>
            <span className="timer-label">sec</span>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="question-card">
        <div className="question-number">Q{currentIndex + 1}</div>
        <p className="question-sentence">{renderSentence(currentQ.sentence)}</p>

        <div className="answer-section">
          <input
            ref={inputRef}
            type="text"
            className="answer-input"
            placeholder="Type your answer here..."
            value={answers[currentQ.id] || ""}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
          />
          <p className="input-hint-text">Press <kbd>Enter</kbd> or click Next to continue</p>
        </div>

        {/* Hint */}
        {showHint && (
          <div className="hint-box">
            <span className="hint-box-title">💡 Hint</span>
            <p className="hint-box-text">{currentQ.hint}</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          className="btn-hint"
          onClick={handleHint}
          disabled={showHint}
        >
          💡 Hint
        </button>
        <button className="btn-next" onClick={() => handleNext()}>
          {currentIndex === questions.length - 1 ? "Finish" : "Next →"}
        </button>
      </div>
    </div>
  );
}

// Results Screen Component
function ResultsScreen({ results, difficulty, hintsUsed, onRetry, onBack, onFinish }) {
  const { correct, wrong, unanswered, details, total } = results;
  const percentage = Math.round((correct / total) * 100);
  const [showDetails, setShowDetails] = useState(false);

  const getGrade = () => {
    if (percentage >= 90) return { grade: "A+", message: "Outstanding! 🏆", color: "#10b981" };
    if (percentage >= 80) return { grade: "A", message: "Excellent! 🌟", color: "#22c55e" };
    if (percentage >= 70) return { grade: "B", message: "Great Job! 👏", color: "#84cc16" };
    if (percentage >= 60) return { grade: "C", message: "Good Effort! 👍", color: "#eab308" };
    if (percentage >= 50) return { grade: "D", message: "Keep Practicing! 💪", color: "#f97316" };
    return { grade: "F", message: "Need Improvement 📚", color: "#ef4444" };
  };

  const gradeInfo = getGrade();

  const getRecommendation = () => {
    if (difficulty === "easy" && percentage >= 70) {
      return "You're ready to try Medium difficulty! 🚀";
    }
    if (difficulty === "medium" && percentage >= 70) {
      return "You're ready to try Hard difficulty! 🔥";
    }
    if (difficulty === "hard" && percentage >= 70) {
      return "You've mastered this level! Incredible! 🎯";
    }
    return `Keep practicing at ${difficulty} level to improve your score.`;
  };

  return (
    <div className="results-screen">
      <div className="results-card">
        <h2 className="results-title">Test Complete!</h2>

        {/* Score Circle */}
        <div className="score-circle" style={{ "--score-color": gradeInfo.color }}>
          <div className="score-inner">
            <span className="score-grade">{gradeInfo.grade}</span>
            <span className="score-percent">{percentage}%</span>
          </div>
        </div>
        <p className="score-message" style={{ color: gradeInfo.color }}>
          {gradeInfo.message}
        </p>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card correct">
            <span className="stat-number">{correct}</span>
            <span className="stat-label">Correct</span>
          </div>
          <div className="stat-card wrong">
            <span className="stat-number">{wrong}</span>
            <span className="stat-label">Wrong</span>
          </div>
          <div className="stat-card skipped">
            <span className="stat-number">{unanswered}</span>
            <span className="stat-label">Skipped</span>
          </div>
          <div className="stat-card hints">
            <span className="stat-number">{hintsUsed}</span>
            <span className="stat-label">Hints Used</span>
          </div>
        </div>

        {/* Recommendation */}
        <div className="recommendation-box">
          <p>{getRecommendation()}</p>
        </div>

        {/* Toggle Details */}
        <button
          className="btn-toggle-details"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Detailed Review ▲" : "Show Detailed Review ▼"}
        </button>

        {showDetails && (
          <div className="details-list">
            {details.map((d, idx) => (
              <div
                key={d.id}
                className={`detail-item ${
                  d.isUnanswered ? "skipped" : d.isCorrect ? "correct" : "wrong"
                }`}
              >
                <div className="detail-header">
                  <span className="detail-number">Q{idx + 1}</span>
                  <span
                    className={`detail-badge ${
                      d.isUnanswered ? "skipped" : d.isCorrect ? "correct" : "wrong"
                    }`}
                  >
                    {d.isUnanswered ? "SKIPPED" : d.isCorrect ? "CORRECT" : "WRONG"}
                  </span>
                </div>
                <p className="detail-sentence">{d.sentence}</p>
                <div className="detail-answers">
                  <span className="detail-correct-answer">
                    ✓ Best answer: <strong>{d.answers[0]}</strong>
                  </span>
                  {d.answers.length > 1 && (
                    <span className="detail-also-accepted">
                      Also accepted: {d.answers.slice(1).join(", ")}
                    </span>
                  )}
                  {!d.isUnanswered && !d.isCorrect && (
                    <span className="detail-user-answer">
                      ✗ Your answer: <strong>{d.userAnswer}</strong>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="results-actions">
          <button className="btn-primary" onClick={onRetry}>
            🔄 Try Another Test
          </button>
          <button className="btn-secondary" onClick={onBack}>
            🏠 Change Difficulty
          </button>
        </div>
      </div>
    </div>
  );
}
