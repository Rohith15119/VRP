import { useState, useEffect, useRef, useCallback } from "react";
import { getRandomEmailPrompt, scoreEmail } from "../data/emailPrompts";

const TOTAL_TIME = 540; // 9 minutes in seconds

export default function EmailWritingScreen({ onBack }) {
  const [prompt, setPrompt] = useState(null);
  const [emailText, setEmailText] = useState("");
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState(null);
  const [autoSaveMsg, setAutoSaveMsg] = useState("");
  const textareaRef = useRef(null);
  const timerRef = useRef(null);

  // Load a random prompt on mount
  useEffect(() => {
    setPrompt(getRandomEmailPrompt());
  }, []);

  // Timer
  useEffect(() => {
    if (isFinished || !prompt) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isFinished, prompt]);

  // Auto-save indicator
  useEffect(() => {
    if (emailText.length > 0 && !isFinished) {
      const timeout = setTimeout(() => {
        setAutoSaveMsg("Auto-saved ✓");
        setTimeout(() => setAutoSaveMsg(""), 2000);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [emailText, isFinished]);

  // Focus textarea on load
  useEffect(() => {
    if (textareaRef.current && prompt) {
      textareaRef.current.focus();
    }
  }, [prompt]);

  const handleSubmit = useCallback(() => {
    clearInterval(timerRef.current);
    if (prompt) {
      const scored = scoreEmail(emailText, prompt);
      setResults(scored);
    }
    setIsFinished(true);
  }, [emailText, prompt]);

  const handleRetry = () => {
    setPrompt(getRandomEmailPrompt());
    setEmailText("");
    setTimeLeft(TOTAL_TIME);
    setIsFinished(false);
    setResults(null);
  };

  const wordCount = emailText.trim().split(/\s+/).filter((w) => w.length > 0).length;
  const charCount = emailText.length;

  // Format time
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  if (!prompt) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading email prompt...</p>
      </div>
    );
  }

  if (isFinished && results) {
    return (
      <EmailResultsScreen
        results={results}
        emailText={emailText}
        prompt={prompt}
        onRetry={handleRetry}
        onBack={onBack}
      />
    );
  }

  const timePercent = (timeLeft / TOTAL_TIME) * 100;
  const timerColor =
    timeLeft <= 60 ? "var(--danger)" : timeLeft <= 180 ? "var(--warning)" : "var(--accent)";
  const wordCountColor =
    wordCount >= 100 ? "var(--success)" : wordCount >= 70 ? "var(--warning)" : "var(--text-muted)";

  return (
    <div className="email-screen">
      {/* Header */}
      <div className="email-header">
        <div className="email-header-left">
          <span className="section-badge email">✉️ EMAIL WRITING</span>
          <span className="email-timer-text" style={{ color: timeLeft <= 60 ? "var(--danger)" : "var(--text-secondary)" }}>
            {formatTime(timeLeft)}
          </span>
        </div>
        <div className="email-header-right">
          {autoSaveMsg && <span className="autosave-msg">{autoSaveMsg}</span>}
          <button className="btn-outline" onClick={handleSubmit}>
            Submit Email
          </button>
        </div>
      </div>

      {/* Timer Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${timePercent}%`,
            background: timeLeft <= 60
              ? "linear-gradient(90deg, var(--danger), #f87171)"
              : timeLeft <= 180
              ? "linear-gradient(90deg, var(--warning), #fbbf24)"
              : "linear-gradient(90deg, var(--accent), var(--accent-light))",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="email-content">
        {/* Situation Panel */}
        <div className="situation-panel">
          <div className="situation-header">
            <span className="situation-label">📄 Situation</span>
            <span className="situation-role">
              From: <strong>{prompt.senderRole}</strong> → To: <strong>{prompt.recipientRole}</strong>
            </span>
          </div>
          <p className="situation-text">{prompt.situation}</p>
          <div className="situation-hint">
            <span>💡 Suggested Subject: </span>
            <em>{prompt.suggestedSubject}</em>
          </div>
        </div>

        {/* Writing Area */}
        <div className="writing-area">
          <div className="writing-toolbar">
            <span className="toolbar-label">✍️ Write your email below</span>
            <div className="writing-stats">
              <span className="word-count-badge" style={{ color: wordCountColor }}>
                {wordCount} / 100 words {wordCount >= 100 ? "✓" : ""}
              </span>
              <span className="char-count-badge">{charCount} chars</span>
            </div>
          </div>

          <textarea
            ref={textareaRef}
            className="email-textarea"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            placeholder={`Subject: [Your subject line here]\n\nDear [Recipient Name],\n\nI am writing to...\n\n[Body of your email - explain the situation, make your request, provide details]\n\n[Closing paragraph - thank them, mention next steps]\n\nRegards,\n[Your Name]`}
            spellCheck="true"
            disabled={isFinished}
          />

          {/* Word count progress bar */}
          <div className="word-progress-container">
            <div
              className="word-progress-bar"
              style={{
                width: `${Math.min(100, (wordCount / 100) * 100)}%`,
                background: wordCount >= 100
                  ? "linear-gradient(90deg, var(--success), #34d399)"
                  : "linear-gradient(90deg, var(--warning), #fbbf24)",
              }}
            ></div>
          </div>
          <div className="word-progress-labels">
            <span>{wordCount < 100 ? `${100 - wordCount} more words needed` : "Minimum word count reached ✓"}</span>
            <span className="word-ideal">Ideal: 150+ words</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// EMAIL RESULTS SCREEN
// ============================================
function EmailResultsScreen({ results, emailText, prompt, onRetry, onBack }) {
  const [showEmail, setShowEmail] = useState(false);
  const { structure, wordCount, relevance, formatting, tone, total } = results;

  const getGrade = () => {
    if (total >= 85) return { grade: "A+", message: "Outstanding Email! 🏆", color: "#10b981" };
    if (total >= 75) return { grade: "A", message: "Excellent Writing! 🌟", color: "#22c55e" };
    if (total >= 65) return { grade: "B", message: "Great Effort! 👏", color: "#84cc16" };
    if (total >= 50) return { grade: "C", message: "Good Start! 👍", color: "#eab308" };
    if (total >= 35) return { grade: "D", message: "Needs Work 💪", color: "#f97316" };
    return { grade: "F", message: "Keep Practicing 📚", color: "#ef4444" };
  };

  const gradeInfo = getGrade();
  const categories = [structure, wordCount, relevance, formatting, tone];

  const getScoreBarColor = (score) => {
    if (score >= 75) return "var(--success)";
    if (score >= 50) return "var(--warning)";
    return "var(--danger)";
  };

  return (
    <div className="results-screen">
      <div className="results-card email-results">
        <h2 className="results-title">Email Evaluation</h2>

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

        {/* Category Breakdown */}
        <div className="category-breakdown">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-item">
              <div className="category-header">
                <span className="category-label">{cat.label}</span>
                <span className="category-score" style={{ color: getScoreBarColor(cat.score) }}>
                  {cat.score}/100
                </span>
              </div>
              <div className="category-bar-bg">
                <div
                  className="category-bar-fill"
                  style={{
                    width: `${cat.score}%`,
                    background: getScoreBarColor(cat.score),
                  }}
                ></div>
              </div>
              <div className="category-feedback">
                {cat.feedback.map((fb, i) => (
                  <span key={i} className={`feedback-line ${fb.type}`}>
                    {fb.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Prompt recap */}
        <div className="email-prompt-recap">
          <h4>📄 Prompt Given</h4>
          <p>{prompt.situation}</p>
        </div>

        {/* Toggle Your Email */}
        <button
          className="btn-toggle-details"
          onClick={() => setShowEmail(!showEmail)}
        >
          {showEmail ? "Hide Your Email ▲" : "Review Your Email ▼"}
        </button>

        {showEmail && (
          <div className="email-review-box">
            <pre className="email-review-text">{emailText || "(No email written)"}</pre>
          </div>
        )}

        {/* Actions */}
        <div className="results-actions">
          <button className="btn-primary" onClick={onRetry}>
            🔄 Try Another Prompt
          </button>
          <button className="btn-secondary" onClick={onBack}>
            🏠 Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
