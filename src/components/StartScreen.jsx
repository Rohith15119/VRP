import { useState } from "react";

export default function StartScreen({
  onStart,
  onStartEmail,
  onStartPassage,
  useAI,
  setUseAI,
  apiKey,
  setApiKey,
}) {
  const [selectedSection, setSelectedSection] = useState(null); // "sentence", "email", or "passage"
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [hoveredDifficulty, setHoveredDifficulty] = useState(null);
  const [tempKey, setTempKey] = useState(apiKey);
  const [showKeyInput, setShowKeyInput] = useState(false);

  const sections = [
    {
      id: "sentence",
      title: "Sentence Completion",
      icon: "📝",
      subtitle: "Fill in the Blanks",
      description: "20 questions · 25 sec each · Type one word",
      color: "#6c5ce7",
      gradient: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
    },
    {
      id: "email",
      title: "Email Writing",
      icon: "✉️",
      subtitle: "Compose a Professional Email",
      description: "1 prompt · 9 minutes · Min 100 words",
      color: "#00b894",
      gradient: "linear-gradient(135deg, #00b894, #55efc4)",
    },
    {
      id: "passage",
      title: "Passage Recall",
      icon: "📖",
      subtitle: "Read & Reconstruct",
      description: "1 passage · 30s read, 90s write · Recount key ideas",
      color: "#ff7675",
      gradient: "linear-gradient(135deg, #ff7675, #fab1a0)",
    },
  ];

  const difficulties = [
    {
      level: "easy",
      title: "Easy",
      icon: "🌱",
      description: "Common vocabulary and simple sentence structures. Great for warming up.",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #34d399)",
      features: ["Simple vocabulary", "Straightforward context", "Clear hints"],
    },
    {
      level: "medium",
      title: "Medium",
      icon: "⚡",
      description: "Intermediate vocabulary requiring contextual understanding and inference.",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
      features: ["Advanced vocabulary", "Complex sentences", "Contextual clues"],
    },
    {
      level: "hard",
      title: "Hard",
      icon: "🔥",
      description: "Advanced vocabulary with nuanced context. For seasoned verbal enthusiasts.",
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #ef4444, #f87171)",
      features: ["Expert vocabulary", "Nuanced meaning", "Minimal context"],
    },
  ];

  const handleStart = () => {
    if (selectedSection === "sentence" && selectedDifficulty) {
      // If using AI, verify key is set
      if (useAI && !apiKey) {
        setShowKeyInput(true);
        alert("Please enter and save your Gemini API Key first to generate AI questions!");
        return;
      }
      onStart(selectedDifficulty);
    } else if (selectedSection === "email") {
      onStartEmail();
    } else if (selectedSection === "passage") {
      onStartPassage();
    }
  };

  const canStart =
    (selectedSection === "sentence" && selectedDifficulty) ||
    selectedSection === "email" ||
    selectedSection === "passage";

  const getButtonText = () => {
    if (selectedSection === "email") return "Start Email Writing Challenge →";
    if (selectedSection === "passage") return "Start Passage Recall Challenge →";
    if (selectedSection === "sentence" && selectedDifficulty) {
      return `Start ${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} Challenge ${useAI ? "(AI)" : ""} →`;
    }
    if (selectedSection === "sentence") return "Select a difficulty to begin";
    return "Select a section to begin";
  };

  const handleSaveKey = () => {
    setApiKey(tempKey);
    alert("Gemini API Key saved successfully! Ready to generate random questions.");
    setShowKeyInput(false);
  };

  return (
    <div className="start-screen">
      {/* Animated Background Particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="logo-container">
          <div className="logo-icon">📝</div>
          <h1 className="app-title">
            <span className="title-gradient">Verbal</span> Ability
          </h1>
          <p className="app-subtitle">TCS NQT Practice Platform</p>
        </div>
      </div>

      {/* Section Selection */}
      <div className="section-selection">
        <h2 className="section-title">Choose Your Section</h2>
        <div className="section-cards">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className={`section-card ${selectedSection === sec.id ? "selected" : ""}`}
              onClick={() => {
                setSelectedSection(sec.id);
                if (sec.id !== "sentence") setSelectedDifficulty(null);
              }}
              style={{ "--card-color": sec.color, "--card-gradient": sec.gradient }}
            >
              <div className="card-glow"></div>
              <span className="card-icon">{sec.icon}</span>
              <h3 className="card-title">{sec.title}</h3>
              <p className="card-subtitle-text">{sec.subtitle}</p>
              <p className="card-description">{sec.description}</p>
              {selectedSection === sec.id && (
                <div className="selected-check">✓</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Instructions - conditional based on section */}
      {selectedSection === "sentence" && (
        <div className="hero-section" style={{ marginTop: "0.5rem" }}>
          <div className="info-cards">
            <div className="info-card">
              <span className="info-icon">📊</span>
              <span className="info-text">20 Questions</span>
            </div>
            <div className="info-card">
              <span className="info-icon">⏱️</span>
              <span className="info-text">25 sec / question</span>
            </div>
            <div className="info-card">
              <span className="info-icon">🤖</span>
              <span className="info-text">{useAI ? "AI Generated" : "Static Pool"}</span>
            </div>
          </div>
          <div className="instructions-box">
            <h3>📋 Instructions</h3>
            <ul>
              <li>Type <strong>one word</strong> that best fits the meaning of the sentence</li>
              <li>You have <strong>25 seconds</strong> for each sentence</li>
              <li>Click <strong>"Next"</strong> or press <strong>Enter</strong> when you are finished</li>
              <li>Questions are <strong>randomized</strong> every attempt</li>
              {useAI && <li><strong>AI Mode active</strong>: Questions will be generated dynamically on-the-fly</li>}
            </ul>
          </div>
        </div>
      )}

      {selectedSection === "email" && (
        <div className="hero-section" style={{ marginTop: "0.5rem" }}>
          <div className="info-cards">
            <div className="info-card">
              <span className="info-icon">⏱️</span>
              <span className="info-text">9 Minutes</span>
            </div>
            <div className="info-card">
              <span className="info-icon">📝</span>
              <span className="info-text">Min 100 Words</span>
            </div>
            <div className="info-card">
              <span className="info-icon">📊</span>
              <span className="info-text">5 Scoring Criteria</span>
            </div>
          </div>
          <div className="instructions-box">
            <h3>📋 Email Writing Instructions</h3>
            <ul>
              <li>Read the <strong>situation</strong> carefully and write an email addressing the issues described</li>
              <li>You will have <strong>9 minutes</strong> to compose your email</li>
              <li>You must write at least <strong>100 words</strong> in complete sentences</li>
              <li>Include a proper <strong>greeting, body,</strong> and <strong>closing</strong></li>
              <li>Your email will be scored on <strong>Structure, Relevance, Word Count, Formatting,</strong> and <strong>Tone</strong></li>
              <li>After 9 minutes, your work will be <strong>auto-submitted</strong></li>
            </ul>
          </div>
        </div>
      )}

      {selectedSection === "passage" && (
        <div className="hero-section" style={{ marginTop: "0.5rem" }}>
          <div className="info-cards">
            <div className="info-card">
              <span className="info-icon">⏱️</span>
              <span className="info-text">30s Read, 90s Write</span>
            </div>
            <div className="info-card">
              <span className="info-icon">📝</span>
              <span className="info-text">Aim: 30-75 Words</span>
            </div>
            <div className="info-card">
              <span className="info-icon">🧠</span>
              <span className="info-text">Semantic Scoring</span>
            </div>
          </div>
          <div className="instructions-box">
            <h3>📋 Passage Recall Instructions</h3>
            <ul>
              <li>Read the displayed <strong>passage</strong> carefully within <strong>30 seconds</strong></li>
              <li>After 30 seconds, the passage will <strong>disappear</strong> from the screen</li>
              <li>You will have <strong>90 seconds</strong> to rewrite the passage from memory in your own words</li>
              <li>Your summary is graded on <strong>concept retention</strong> and writing quality (not word-for-word recall)</li>
              <li>When the 90 seconds are up, your work is <strong>automatically submitted</strong></li>
            </ul>
          </div>
        </div>
      )}

      {/* Difficulty Selection - only for Sentence Completion */}
      {selectedSection === "sentence" && (
        <div className="difficulty-section">
          <h2 className="section-title">Choose Your Difficulty</h2>
          <div className="difficulty-cards">
            {difficulties.map((d) => (
              <div
                key={d.level}
                className={`difficulty-card ${selectedDifficulty === d.level ? "selected" : ""} ${
                  hoveredDifficulty === d.level ? "hovered" : ""
                }`}
                onClick={() => setSelectedDifficulty(d.level)}
                onMouseEnter={() => setHoveredDifficulty(d.level)}
                onMouseLeave={() => setHoveredDifficulty(null)}
                style={{ "--card-color": d.color, "--card-gradient": d.gradient }}
              >
                <div className="card-glow"></div>
                <span className="card-icon">{d.icon}</span>
                <h3 className="card-title">{d.title}</h3>
                <p className="card-description">{d.description}</p>
                <div className="card-features">
                  {d.features.map((f, i) => (
                    <span key={i} className="card-feature">
                      ✦ {f}
                    </span>
                  ))}
                </div>
                {selectedDifficulty === d.level && (
                  <div className="selected-check">✓</div>
                )}
              </div>
            ))}
          </div>

          {/* AI Generator Settings */}
          <div className="ai-settings-card">
            <label className="ai-toggle-label">
              <input
                type="checkbox"
                checked={useAI}
                onChange={(e) => setUseAI(e.target.checked)}
              />
              <span className="toggle-custom"></span>
              <span className="toggle-text">🤖 Enable AI Question Generator (Powered by Gemini)</span>
            </label>

            {useAI && (
              <div className="ai-key-section">
                <div className="key-header">
                  <span className="key-title">Gemini API Key:</span>
                  <button className="btn-toggle-input" onClick={() => setShowKeyInput(!showKeyInput)}>
                    {showKeyInput ? "Hide Key ▲" : apiKey ? "Change Key ⚙️" : "Enter Key 🔑"}
                  </button>
                </div>
                
                {apiKey && !showKeyInput && (
                  <div className="key-saved-indicator">
                    <span>API Key saved locally ✓</span>
                  </div>
                )}

                {(showKeyInput || !apiKey) && (
                  <div className="key-input-group">
                    <input
                      type="password"
                      className="key-input"
                      placeholder="AIzaSy..."
                      value={tempKey}
                      onChange={(e) => setTempKey(e.target.value)}
                    />
                    <button className="btn-save-key" onClick={handleSaveKey}>
                      Save Key
                    </button>
                  </div>
                )}
                
                <p className="key-tip">
                  Get a free Gemini API key from <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer">Google AI Studio</a>. Keys are stored locally in your browser.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Start Button */}
      <button
        className={`btn-start ${canStart ? "active" : "disabled"}`}
        onClick={handleStart}
        disabled={!canStart}
      >
        {getButtonText()}
      </button>
    </div>
  );
}
