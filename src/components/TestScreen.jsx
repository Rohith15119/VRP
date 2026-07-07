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

You must strictly adhere to the following category criteria for difficulty:

${
  difficulty === "easy"
    ? `EASY Difficulty Criteria (Focus on basic grammar, tenses, articles, pronouns, and daily life verbs/collocations):
- D1. Subject-Verb Agreement: is, are, was, were, has, have, does, do.
- D2. Verb Tenses: go/went/gone, eat/ate/eaten, sleep/slept, study/studied.
- D3. Passive Voice: built, completed, enjoyed, approved, selected.
- D4. Articles: a, an, the.
- D5. Pronouns: who, whom, whose, which, that.
- D6. Determiners: few, fewer, little, less, many, much, some, any, every, each.
- A4. Daily Life Verbs: eat, drink, sleep, walk, arrive, leave, close, open, carry, bring, keep, wear, cook, wash, travel.
- M. Daily Conversation Collocations: keep promises, drink water, sleep early, open door, close window, switch off light, answer phone, catch bus.
- Simple Contexts: e.g. "The weather was very cold in winter" or "The flowers in the garden looked beautiful."`
    : difficulty === "medium"
    ? `MEDIUM Difficulty Criteria (Focus on high-frequency placement verbs, adjectives, functional English, and collocations):
- B1. Verb + Noun Collocations: make decision, take responsibility, pay attention, draw conclusion, solve problem, conduct research, submit assignment, receive award, achieve target, gain experience, keep promise, follow rules, provide services.
- B2. Adjective + Noun Collocations: heavy rainfall, strong coffee, valuable contribution, excellent performance, important discovery, technical issue, constructive criticism, serious problem, high quality, good opportunity.
- B3. Noun + Preposition Collocations: interest in, reason for, solution to, effect on, access to, need for, knowledge of, responsibility for.
- B4. Verb + Preposition Collocations: depend on, insist on, agree with, believe in, apologize for, suffer from, look after, look for.
- A1. Common Action Verbs: complete, finish, submit, provide, replace, develop, create, solve, follow, review, approve, achieve, remove, build, convert, expand, reduce, increase, avoid, maintain, improve.
- A2. Workplace Verbs: recruit, appoint, promote, approve, assign, conduct, manage, organize, schedule, cancel, postpone, delegate, recommend, evaluate.
- A3. Academic Verbs: study, learn, read, write, answer, explain, understand, memorize, revise, practice, note, submit, review.
- A5. Technology Verbs: install, update, replace, download, upload, connect, restart, configure, develop, debug, compile.
- A6. Health Verbs: exercise, recover, quit, avoid, treat, heal, rest, drink, consult, diagnose.
- Q. Functional English: provide services, submit application, complete work, solve issue, make payment, receive award, develop skills, gain knowledge.`
    : `HARD Difficulty Criteria (Focus on advanced syntax, prepositions, phrasal verbs, idioms, synonyms/antonyms, and business contexts):
- E. Preposition-Based Adjectives: good at, afraid of, interested in, capable of, married to, senior to, look forward to, depend on, responsible for.
- F. Phrasal Verbs: break down, put off, put out, switch off, carry on, give up, look after, look for, turn on, turn off, bring up, take off, take part, break up, come across.
- G. Fixed Expressions: take initiative, bring to an end, take part, as long as, with a start, at least, in fact, on time, by mistake, in advance.
- H. Idiomatic Usage: piece of cake, under the weather, once in a blue moon, spill the beans, break the ice, cost an arm and a leg.
- I. Synonym Selection: essential, important, necessary, vital.
- J. Antonym Selection: clarify, confuse.
- K. Business English: performance, department, employee, manager, meeting, deadline, project, promotion, salary, customer, branch, policy, report, documents, services, proposal.
- L. Academic English: teacher, student, lesson, assignment, paragraph, chapter, topic, exam, answer, question, skills.`
}

Output MUST be a JSON object containing an array of 20 question objects.
Ensure the sentence has a single '_____' blank. Provide a list of 3-5 correct answers (synonyms or accepted forms) in the 'answers' array. Provide a brief explanatory 'hint' detailing the collocation, idiom, or grammar rule.

Format:
{
  "questions": [
    {
      "id": "ai_1",
      "sentence": "The engineer managed to _____ the issue quickly.",
      "answers": ["solve", "resolve", "fix", "tackle"],
      "hint": "Collocation: solve problem / solve issue"
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
