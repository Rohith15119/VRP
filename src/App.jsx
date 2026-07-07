import { useState } from "react";
import StartScreen from "./components/StartScreen";
import TestScreen from "./components/TestScreen";
import EmailWritingScreen from "./components/EmailWritingScreen";
import PassageRecallScreen from "./components/PassageRecallScreen";
import "./index.css";

function App() {
  const [screen, setScreen] = useState("start"); // "start", "test", "email", "passage"
  const [difficulty, setDifficulty] = useState(null);

  const handleStart = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setScreen("test");
  };

  const handleStartEmail = () => {
    setScreen("email");
  };

  const handleStartPassage = () => {
    setScreen("passage");
  };

  const handleBack = () => {
    setScreen("start");
    setDifficulty(null);
  };

  const handleFinish = () => {
    setScreen("start");
    setDifficulty(null);
  };

  return (
    <div className="app-container">
      {screen === "start" && (
        <StartScreen
          onStart={handleStart}
          onStartEmail={handleStartEmail}
          onStartPassage={handleStartPassage}
        />
      )}
      {screen === "test" && (
        <TestScreen
          difficulty={difficulty}
          onFinish={handleFinish}
          onBack={handleBack}
        />
      )}
      {screen === "email" && (
        <EmailWritingScreen onBack={handleBack} />
      )}
      {screen === "passage" && (
        <PassageRecallScreen onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
