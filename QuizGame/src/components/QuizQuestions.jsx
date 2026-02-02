import { QUIZ_DATA } from "../quiz-questions.js";
export default function QuizQuestions() {
  const CurrentQuestion = QUIZ_DATA[0];
  return (
    <>
      <h1>{CurrentQuestion.question}</h1>
      {
        (CurrentQuestion.answers.map = (item) => {
          return <p>{item}</p>;
        })
      }
    </>
  );
}
