import { useState, useEffect, useRef, useCallback } from "react";
import { getRandomPassage, scoreRecall } from "../data/passageRecall";

const READ_TIME = 30; // 30 seconds
const WRITE_TIME = 90; // 90 seconds

export default function PassageRecallScreen({ onBack }) {
  const [passage, setPassage] = useState(null);
  const [phase, setPhase] = useState("read"); // "read", "write", "results"
  const [emailText, setEmailText] = useState(""); // User input text
  const [timeLeft, setTimeLeft] = useState(READ_TIME);
  const [results, setResults] = useState(null);
  const textareaRef = useRef(null);
  const timerRef = useRef(null);

  // Load random passage
  useEffect(() => {
    setPassage(getRandomPassage());
  }, []);

  // Timer logic
  useEffect(() => {
    if (phase === "results" || !passage) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          if (phase === "read") {
            // Move to write phase
            setPhase("write");
            setTimeLeft(WRITE_TIME);
          } else {
            // Auto submit in write phase
            handleCalculate();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [phase, passage]);

  // Focus textarea when entering write phase
  useEffect(() => {
    if (phase === "write" && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [phase]);

  const handleStartWriting = () => {
    clearInterval(timerRef.current);
    setPhase("write");
    setTimeLeft(WRITE_TIME);
  };

  const handleCalculate = useCallback(() => {
    clearInterval(timerRef.current);
    if (passage) {
      const scored = scoreRecall(emailText, passage);
      setResults(scored);
    }
    setPhase("results");
  }, [emailText, passage]);

  const handleRetry = () => {
    setPassage(getRandomPassage());
    setEmailText("");
    setPhase("read");
    setTimeLeft(READ_TIME);
    setResults(null);
  };

  const wordCount = emailText.trim().split(/\s+/).filter((w) => w.length > 0).length;

  if (!passage) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading passage...</p>
      </div>
    );
  }

  if (phase === "results" && results) {
    return (
      <PassageResultsScreen
        results={results}
        userText={emailText}
        passage={passage}
        onRetry={handleRetry}
        onBack={onBack}
      />
    );
  }

  const progressPercent = phase === "read"
    ? (timeLeft / READ_TIME) * 100
    : (timeLeft / WRITE_TIME) * 100;

  const timerColor = phase === "read" ? "var(--success)" : "var(--accent)";

  return (
    <div className="recall-screen">
      {/* Header */}
      <div className="recall-header">
        <div className="recall-header-left">
          <span className={`section-badge ${phase}`}>
            {phase === "read" ? "📖 READING PHASE" : "✍️ WRITING PHASE"}
          </span>
          <span className="recall-timer-text" style={{ color: timeLeft <= 10 ? "var(--danger)" : "var(--text-secondary)" }}>
            {timeLeft}s left
          </span>
        </div>
        <div className="recall-header-right">
          {phase === "read" ? (
            <button className="btn-next" onClick={handleStartWriting}>
              Start Writing Now ✍️
            </button>
          ) : (
            <button className="btn-outline" onClick={handleCalculate}>
              Submit Response
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${progressPercent}%`,
            background: timerColor,
          }}
        ></div>
      </div>

      <div className="recall-content">
        {phase === "read" ? (
          <div className="read-panel">
            <h2 className="passage-title">{passage.title}</h2>
            <div className="passage-card">
              <p className="passage-text">{passage.text}</p>
            </div>
            <div className="instructions-box info-box">
              <span className="info-icon">💡</span>
              <p className="info-text">
                Read the paragraph carefully. In <strong>30 seconds</strong>, it will disappear, and you will have <strong>90 seconds</strong> to rewrite it in your own words.
              </p>
            </div>
          </div>
        ) : (
          <div className="write-panel">
            <div className="writing-toolbar">
              <span className="toolbar-label">Reconstruct the passage in your own words:</span>
              <span className="word-count-badge">
                Words: <strong>{wordCount}</strong> (Aim: 30-75)
              </span>
            </div>
            <textarea
              ref={textareaRef}
              className="recall-textarea"
              value={emailText}
              onChange={(e) => setEmailText(e.target.value)}
              placeholder="Start writing the passage from memory... Explain the core ideas in your own words."
            />
            <p className="input-hint-text">
              Tip: Focus on getting the key facts and meaning right, rather than memorizing word-for-word.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// PASSAGE RESULTS SCREEN
// ============================================
function PassageResultsScreen({ results, userText, passage, onRetry, onBack }) {
  const { recallScore, qualityScore, total, matchedConcepts, missedConcepts, wordCount, qualityFeedback } = results;

  const getGrade = () => {
    if (total >= 85) return { grade: "A+", message: "Excellent Recall & Writing! 🏆", color: "#10b981" };
    if (total >= 70) return { grade: "A", message: "Great Recall! 🌟", color: "#22c55e" };
    if (total >= 55) return { grade: "B", message: "Good Attempt! 👍", color: "#84cc16" };
    if (total >= 40) return { grade: "C", message: "Needs More Detail 📚", color: "#eab308" };
    return { grade: "F", message: "Try Again! 💪", color: "#ef4444" };
  };

  const gradeInfo = getGrade();

  return (
    <div className="results-screen">
      <div className="results-card recall-results">
        <h2 className="results-title">Passage Recall Score</h2>

        {/* Score Circle */}
        <div className="score-circle" style={{ "--score-color": gradeInfo.color }}>
          <div className="score-inner">
            <span className="score-grade">{gradeInfo.grade}</span>
            <span className="score-percent">{total}%</span>
          </div>
        </div>
        <p className="score-message" style={{ color: gradeInfo.color }}>
          {gradeInfo.message}
        </p>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card correct">
            <span className="stat-number">{recallScore}%</span>
            <span className="stat-label">Concept Recall</span>
          </div>
          <div className="stat-card hints">
            <span className="stat-number">{qualityScore}%</span>
            <span className="stat-label">Writing Quality</span>
          </div>
          <div className="stat-card skipped">
            <span className="stat-number">{wordCount}</span>
            <span className="stat-label">Word Count</span>
          </div>
          <div className="stat-card wrong">
            <span className="stat-number">
              {matchedConcepts.length}/{passage.keyConcepts.length}
            </span>
            <span className="stat-label">Concepts Found</span>
          </div>
        </div>

        {/* Concepts List */}
        <div className="concepts-section">
          <h3>🧠 Key Concepts Recalled</h3>
          <div className="concepts-container">
            {matchedConcepts.map((concept, index) => (
              <span key={index} className="concept-badge matched">
                ✓ {concept}
              </span>
            ))}
            {missedConcepts.map((concept, index) => (
              <span key={index} className="concept-badge missed">
                ✗ {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Quality feedback */}
        <div className="quality-feedback-section">
          <h3>✍️ Formatting & Style Feedback</h3>
          <div className="category-feedback">
            {qualityFeedback.map((fb, i) => (
              <span key={i} className={`feedback-line ${fb.type}`}>
                {fb.text}
              </span>
            ))}
          </div>
        </div>

        {/* Side by side comparison */}
        <div className="comparison-section">
          <div className="comparison-box">
            <h4>📖 Original Passage</h4>
            <p className="comparison-text original">{passage.text}</p>
          </div>
          <div className="comparison-box">
            <h4>✍️ Your Reconstruction</h4>
            <p className="comparison-text user">{userText || "(No text entered)"}</p>
          </div>
        </div>

        {/* Core explanation */}
        <div className="recommendation-box explanation-box">
          <p>
            <strong>Core Meaning:</strong> {passage.explanation}
          </p>
        </div>

        {/* Actions */}
        <div className="results-actions">
          <button className="btn-primary" onClick={onRetry}>
            🔄 Try Another Passage
          </button>
          <button className="btn-secondary" onClick={onBack}>
            🏠 Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
