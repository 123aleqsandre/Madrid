import { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState(null);

  const question = {
    text: `This is a ${difficulty} question`,
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
  };
  return (
    <div className="quiz-page">
      <div className="home-card">
        <h1 className="home-title">Welcome to Quiz Game</h1>
        <h3 className="home-subtitle">Time to test your knowledge</h3>
        <h2 className="home-prompt">Pick the difficulty</h2>
        <div className="home-options">
          <button
            className="home-option easy"
            onClick={() => setDifficulty("easy")}
          >
            Easy
          </button>
          <button
            className="home-option medium"
            onClick={() => setDifficulty("medium")}
          >
            Medium
          </button>
          <button
            className="home-option hard"
            onClick={() => setDifficulty("hard")}
          >
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
