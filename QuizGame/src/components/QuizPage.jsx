import { useState, useEffect} from "react";
import classes from "./QuizPage.module.css";

export default function QuizPage({ questions }) {
  const [index, setIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    
  })

  const currentQuestionData = questions[index];

  const handleAnswerClick = (answerIndex) => {
    if (isLocked) return;

    setSelectedAnswerIndex(answerIndex);
    setIsLocked(true);

    setTimeout(() => {
      setIndex((prev) => prev + 1);
      setSelectedAnswerIndex(null);
      setIsLocked(false);
    }, 2000);
  };

  if (index === questions.length) {
    return <div className={classes.finished}>You finished the quiz 🎉</div>;
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.question}>
        {currentQuestionData.question}
      </h1>

      <div className={classes.answersContainer}>
        {currentQuestionData.answers.map((answer, answerIndex) => {
          let buttonClass = classes.answerButton;

          if (answerIndex === selectedAnswerIndex) {
            if (answerIndex === currentQuestionData.correct) {
              buttonClass += ` ${classes.correct}`;
            } else {
              buttonClass += ` ${classes.wrong}`;
            }
          }

          return (
            <button
              key={answerIndex}
              onClick={() => handleAnswerClick(answerIndex)}
              className={buttonClass}
              disabled={isLocked}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}
