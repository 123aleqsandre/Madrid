import { useState } from "react";
import QuizQuestions from "./components/QuizQuestions";
import "./App.css";

function App() {
  const [difficulty, setDifficulty] = useState(null);

  if (difficulty !== null) {
    return <QuizQuestions />;
  }

  return (
    <>
      <h1>Welcome to our game</h1>
      <h2>choose the difficulty</h2>
      <button
        onClick={() => {
          setDifficulty("easy");
          console.log(difficulty);
        }}
      >
        easy
      </button>

      <button
        onClick={() => {
          setDifficulty("medium");
          console.log(difficulty);
        }}
      >
        medium
      </button>

      <button
        onClick={() => {
          setDifficulty("hard");
          console.log(difficulty);
        }}
      >
        hard
      </button>
    </>
  );
}

export default App;
