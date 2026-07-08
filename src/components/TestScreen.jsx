import { useState, useEffect, useCallback, useRef } from "react";
import { getRandomQuestions } from "../data/questions";

const TIMER_DURATION = 25; // seconds per question
const TOTAL_QUESTIONS = 20;
const BATCH_SIZE = 5;

export default function TestScreen({ difficulty, onFinish, onBack, useAI, apiKey }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isFinished, setIsFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  
  // AI Pagination states
  const [loadingAI, setLoadingAI] = useState(false);
  const [fetchingNextBatch, setFetchingNextBatch] = useState(false);
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

  // Load batch helper
  const fetchBatch = useCallback(async (batchNum, existingQuestions) => {
    if (batchNum === 1) {
      setLoadingAI(true);
    } else {
      setFetchingNextBatch(true);
    }
    setAiError(null);

    try {
      const existingSentences = existingQuestions.map((q) => q.sentence).join("\n");
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
                    text: `You are an expert TCS NQT Verbal Ability question setter.
Your task is to generate exactly ${BATCH_SIZE} unique sentence completion questions that closely resemble the latest TCS NQT (2025–2026) verbal section.
Difficulty: ${difficulty.toUpperCase()}
Batch number: ${batchNum} of 4

AVOID DUPLICATING or repeating any of these sentences that have already been generated in this session:
${existingSentences || "None"}

CRITICAL RULES:
- The questions should NOT resemble GRE, GMAT, CAT, IELTS, TOEFL or advanced English vocabulary.
- Instead, generate practical, functional English similar to TCS campus placement exams.
- Difficulty Level: CEFR A2 to B1 only.
- Vocabulary should consist of everyday English, workplace English, academic English, technology English and business English.
- Do NOT use obscure or literary vocabulary.
- Generate questions ONLY from these categories:
  1. Common Action Verbs (complete, finish, submit, provide, replace, develop, create, solve, follow, review, approve, achieve, remove, build, convert, expand, reduce, increase, avoid, maintain, improve)
  2. Workplace English (manager, employee, customer, department, project, meeting, report, documents, deadline, performance, promotion, services, software, policy, branch, target, contribution)
  3. Academic English (teacher, student, assignment, lesson, topic, paragraph, chapter, skills, exam, question, answer, study, review, practice, understand)
  4. Daily Life Vocabulary (drink, sleep, walk, travel, arrive, leave, close, open, carry, bring, wash, wear, cook, eat)
  5. Technology Vocabulary (install, update, replace, connect, download, upload, restart, configure, develop, software, application, database, server, system)
  6. Health Vocabulary (exercise, recover, heal, rest, drink, avoid, quit, consult, diagnose, healthy)
  7. Business Vocabulary (performance, contribution, manager, employee, meeting, deadline, customer, promotion, department, policy, proposal, target, strategy)
  8. Common Collocations (aim for 40% weightage): complete project, solve problem, provide services, submit assignment, review answers, approve report, receive award, achieve target, gain experience, keep promise, follow rules, pay attention, draw conclusion, conduct research, make decision, take responsibility, expand business, valuable contribution, excellent performance, technical issue, heavy rainfall, constructive criticism
  9. Fixed Expressions (take part, take initiative, bring to an end, switch off, break down, look forward to, as long as, with a start, on time, by mistake)
  10. Preposition-Based Questions (interested in, good at, married to, responsible for, depend on, capable of, senior to, afraid of, insist on, look forward to)
  11. Grammar-Based Questions (Subject Verb Agreement, Verb Tenses, Articles, Pronouns, Determiners, Passive Voice, Gerunds, Infinitives, Modal Verbs)
  12. Context-Based Vocabulary (Choose the most natural word according to context, e.g. "The road was ______ after heavy rainfall. Answer: flooded")
  13. Adjective Selection (essential, valuable, constructive, efficient, accurate, beautiful, happy, proud, amused, impressive, successful)
  14. Noun Selection (performance, initiative, replacement, discovery, award, solution, research, problem, contribution)

QUESTION STYLE:
- Questions should be natural and have exactly ONE blank (represented as '_____').
- Only ONE correct answer (the most natural English word. Avoid multiple acceptable answers where possible). List it as the first element in the 'answers' array. If synonyms exist, add them in the array.
- Use workplace, education, technology, health, banking, business, transportation, communication and daily-life contexts.
- Avoid poetry, literature and rare words.

Question Distribution to aim for:
- 40% Collocations
- 20% Vocabulary
- 15% Grammar
- 10% Workplace English
- 5% Technology
- 5% Health
- 5% Daily Life

Output MUST be a JSON object containing an array of exactly ${BATCH_SIZE} question objects.
Ensure every field in the response schema is filled out.

Format example:
{
  "questions": [
    {
      "id": "ai_${batchNum}_1",
      "sentence": "The manager asked the employees to _____ the report before submission.",
      "answers": ["review", "check", "read"],
      "hint": "Collocation: review report",
      "explanation": "The verb \\"review\\" naturally collocates with \\"report\\". It means to examine carefully before submission.",
      "category": "Collocation",
      "subcategory": "Verb + Noun",
      "difficultyLevel": "Easy"
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
                        explanation: { type: "STRING" },
                        category: { type: "STRING" },
                        subcategory: { type: "STRING" },
                        difficultyLevel: { type: "STRING" }
                      },
                      required: ["id", "sentence", "answers", "hint", "explanation", "category", "subcategory", "difficultyLevel"],
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
        // Assign clean temporary IDs to prevent duplicates
        const formattedQuestions = parsed.questions.map((q, idx) => ({
          ...q,
          id: `ai_${batchNum}_${idx}_${Date.now()}`
        }));

        setQuestions((prev) => [...prev, ...formattedQuestions]);
        setAiError(null);
      } else {
        throw new Error("No questions found in API response");
      }
    } catch (err) {
      console.error(`AI Batch ${batchNum} failed:`, err);
      setAiError(err.message || "Failed to generate AI questions");
      
      // Fallback: fill remaining questions with local questions
      const currentLength = existingQuestions.length;
      const neededCount = TOTAL_QUESTIONS - currentLength;
      const localPool = getRandomQuestions(difficulty, TOTAL_QUESTIONS);
      
      const fallbackQuestions = localPool
        .slice(0, neededCount)
        .map((q, idx) => ({
          ...q,
          id: `fallback_${idx}_${Date.now()}`,
          explanation: q.hint || "Explanatory review for the grammatical or vocabulary completion slot.",
          category: "General Grammar / Vocabulary",
          subcategory: difficulty === "hard" ? "Idioms & Phrases" : "Vocabulary",
          difficultyLevel: difficulty.toUpperCase()
        }));

      setQuestions((prev) => [...prev, ...fallbackQuestions]);
    } finally {
      setLoadingAI(false);
      setFetchingNextBatch(false);
    }
  }, [difficulty, apiKey]);

  // Reactive Effect to handle pagination / background prefetching
  useEffect(() => {
    // If not using AI, load all local questions instantly
    if (!useAI || !apiKey) {
      if (questions.length === 0) {
        const q = getRandomQuestions(difficulty, TOTAL_QUESTIONS).map((x) => ({
          ...x,
          explanation: x.hint || "Explanatory review for the grammatical or vocabulary completion slot.",
          category: "General Grammar / Vocabulary",
          subcategory: difficulty === "hard" ? "Idioms & Phrases" : "Vocabulary",
          difficultyLevel: difficulty.toUpperCase()
        }));
        setQuestions(q);
      }
      return;
    }

    // AI Mode:
    if (questions.length === 0 && !loadingAI && !fetchingNextBatch && !aiError) {
      // Fetch Batch 1 (Q1 - Q5)
      fetchBatch(1, []);
    } else if (
      questions.length > 0 && 
      questions.length < TOTAL_QUESTIONS && 
      !fetchingNextBatch && 
      !loadingAI &&
      !aiError
    ) {
      // Fetch next batch in background
      const nextBatchNum = Math.floor(questions.length / BATCH_SIZE) + 1;
      fetchBatch(nextBatchNum, questions);
    }
  }, [questions.length, useAI, apiKey, difficulty, fetchingNextBatch, loadingAI, aiError, fetchBatch]);

  const moveToNext = useCallback(() => {
    clearInterval(timerRef.current);
    
    // Check if we are waiting for a background batch to load
    if (currentIndexRef.current >= questionsRef.current.length - 1) {
      if (questionsRef.current.length < TOTAL_QUESTIONS) {
        // Still loading more questions in background, block navigation
        return;
      }
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
      // Only proceed if we aren't waiting for the next batch
      const isWaitingForBatch = currentIndex === questions.length - 1 && questions.length < TOTAL_QUESTIONS;
      if (!isWaitingForBatch) {
        handleNext();
      }
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
        <p>🤖 AI is preparing the first set of questions...</p>
        <span className="loading-subtext">Powered by Gemini 2.5 Flash · Should take ~1 second</span>
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
          setQuestions([]); // Clear to trigger initial fetch
          setAiError(null);
        }}
        onBack={onBack}
        onFinish={onFinish}
      />
    );
  }

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + 1) / TOTAL_QUESTIONS) * 100;
  const timerPercent = (timeLeft / TIMER_DURATION) * 100;
  const timerColor =
    timeLeft <= 5 ? "var(--danger)" : timeLeft <= 10 ? "var(--warning)" : "var(--accent)";
  const isWaitingForBatch = currentIndex === questions.length - 1 && questions.length < TOTAL_QUESTIONS;

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
          {useAI && (
            <span className="ai-badge">
              🤖 AI {fetchingNextBatch ? "PREFETCHING..." : "READY"}
            </span>
          )}
          <span className="question-counter">
            Question {currentIndex + 1} of {TOTAL_QUESTIONS}
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
            placeholder={isWaitingForBatch ? "Loading next questions..." : "Type your answer here..."}
            value={answers[currentQ.id] || ""}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={isWaitingForBatch}
            autoComplete="off"
            spellCheck="false"
          />
          <p className="input-hint-text">
            {isWaitingForBatch ? "Waiting for the AI to prefetch next set..." : "Press Enter or click Next to continue"}
          </p>
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
          disabled={showHint || isWaitingForBatch}
        >
          💡 Hint
        </button>
        <button
          className="btn-next"
          onClick={() => handleNext()}
          disabled={isWaitingForBatch}
        >
          {isWaitingForBatch
            ? "🤖 Generating..."
            : currentIndex === TOTAL_QUESTIONS - 1
            ? "Finish"
            : "Next →"}
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
                  
                  {/* Category, Subcategory, & Explanation metadata */}
                  {(d.category || d.explanation) && (
                    <div className="detail-metadata-box">
                      {d.category && (
                        <div className="metadata-row">
                          <span className="metadata-tag">Category:</span>
                          <span className="metadata-value">
                            {d.category} {d.subcategory ? `· ${d.subcategory}` : ""} {d.difficultyLevel ? `· [${d.difficultyLevel}]` : ""}
                          </span>
                        </div>
                      )}
                      {d.explanation && (
                        <div className="metadata-row explanation">
                          <span className="metadata-tag">Explanation:</span>
                          <p className="metadata-text">{d.explanation}</p>
                        </div>
                      )}
                    </div>
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
