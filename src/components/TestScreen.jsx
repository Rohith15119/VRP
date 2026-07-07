import { useState, useEffect, useCallback, useRef } from "react";
import { getRandomQuestions } from "../data/questions";

const TIMER_DURATION = 25; // seconds per question
const TOTAL_QUESTIONS = 20;

export default function TestScreen({ difficulty, onFinish, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isFinished, setIsFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
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

  // Load random questions on mount
  useEffect(() => {
    const q = getRandomQuestions(difficulty, TOTAL_QUESTIONS);
    setQuestions(q);
  }, [difficulty]);

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

  // Reset hint state on question change
  useEffect(() => {
    setShowHint(false);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    moveToNext();
  }, [moveToNext]);

  const handleSelectOption = (option) => {
    if (isFinished) return;
    setAnswers((prev) => ({
      ...prev,
      [questions[currentIndex].id]: option,
    }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isFinished || questions.length === 0) return;
      const key = e.key.toLowerCase();
      const currentQ = questions[currentIndexRef.current];
      if (!currentQ) return;

      if (key === "1" || key === "a") {
        handleSelectOption(currentQ.options[0]);
      } else if (key === "2" || key === "b") {
        handleSelectOption(currentQ.options[1]);
      } else if (key === "3" || key === "c") {
        handleSelectOption(currentQ.options[2]);
      } else if (key === "4" || key === "d") {
        handleSelectOption(currentQ.options[3]);
      } else if (key === "enter") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [questions, isFinished, handleNext]);

  const handleHint = () => {
    setShowHint(true);
    setHintsUsed((prev) => prev + 1);
  };

  const handleFinishTest = () => {
    clearInterval(timerRef.current);
    setIsFinished(true);
  };

  // Calculate results
  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    const details = questions.map((q) => {
      const rawUserAns = answers[q.id] || "";
      const isCorrect = rawUserAns === q.answer;

      if (!rawUserAns) {
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
        isUnanswered: !rawUserAns,
      };
    });

    return { correct, wrong, unanswered, details, total: questions.length };
  };

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
          setQuestions(getRandomQuestions(difficulty, TOTAL_QUESTIONS));
          setCurrentIndex(0);
          setAnswers({});
          setTimeLeft(TIMER_DURATION);
          setIsFinished(false);
          setHintsUsed(0);
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
          <span className="question-counter">
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>
        <div className="test-header-right">
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

        {/* MCQ Option Grid */}
        <div className="options-grid">
          {currentQ.options.map((opt, idx) => {
            const isSelected = answers[currentQ.id] === opt;
            const letters = ["A", "B", "C", "D"];
            return (
              <button
                key={opt}
                className={`option-btn ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelectOption(opt)}
              >
                <span className="option-letter">{letters[idx]}</span>
                <span className="option-text">{opt}</span>
              </button>
            );
          })}
        </div>
        <p className="input-hint-text">
          Press <kbd>A</kbd>, <kbd>B</kbd>, <kbd>C</kbd>, <kbd>D</kbd> or <kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, <kbd>4</kbd> to select. Press <kbd>Enter</kbd> to continue.
        </p>

        {/* Hint */}
        {showHint && (
          <div className="hint-box">
            <span className="hint-icon">💡</span>
            <span>{currentQ.hint}</span>
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
                    ✓ Correct answer: <strong>{d.answer}</strong>
                  </span>
                  {!d.isUnanswered && !d.isCorrect && (
                    <span className="detail-user-answer">
                      ✗ Your selection: <strong>{d.userAnswer}</strong>
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
            🔄 Retry Same Level
          </button>
          <button className="btn-secondary" onClick={onBack}>
            🏠 Change Difficulty
          </button>
        </div>
      </div>
    </div>
  );
}
