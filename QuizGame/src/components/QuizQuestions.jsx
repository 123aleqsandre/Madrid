import { useState } from "react";
import { QUIZ_DATA } from "../quiz-questions.js";

export default function QuizQuestions() {
  const [index, setIndex] = useState(0);
  const CurrentQuestionData = QUIZ_DATA[index];

  if (QUIZ_DATA.length === index) {
    return <h1>game over</h1>;
  }

  return (
    <>
      <h1>{CurrentQuestionData.question}</h1>
      {CurrentQuestionData.answers.map((item, index) => {
        return (
          <button
            className="correct"
            key={index}
            onClick={() => {
              if (CurrentQuestionData.correct === index) {
                console.log(CurrentQuestionData.correct);
              } else {
                console.log("bro kill yourself");
              }
              setIndex((prev) => ++prev);
            }}
          >
            {item}
          </button>
        );
      })}
    </>
  );
}
