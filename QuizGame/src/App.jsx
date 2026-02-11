import { useState } from "react";
import QuizPage from "./components/QuizPage";
import { QUIZ_DATA } from "./quiz-questions";
import "./App.css";

export default function App() {
  const [questions, setQuestions] = useState(null);

  if (questions !== null) {
    return <QuizPage questions={questions} />;
  }

  function getQuestions(difficulty) {
    setQuestions(QUIZ_DATA.filter((q) => q.difficulty === difficulty));
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Welcome to the Game</h1>

      <div className="button-container">
        <button
          className="btn easy-btn"
          onClick={() => getQuestions("Easy")}
        >
          Easy
        </button>

        <button
          className="btn medium-btn"
          onClick={() => getQuestions("Medium")}
        >
          Medium
        </button>

        <button
          className="btn hard-btn"
          onClick={() => getQuestions("Hard")}
        >
          Hard
        </button>
      </div>
    </div>
  );
}
