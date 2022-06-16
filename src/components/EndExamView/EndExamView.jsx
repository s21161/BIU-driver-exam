import "./EndExamView.css";

import Button from "../../components/Button/Button";

function ExamResult({ incorrectAnswers }) {
  const incorrectToFailAnswers = 3;

  return (
    <>
      {incorrectAnswers >= incorrectToFailAnswers ? (
        <strong className="exam-result exam-failed">Egzamin Niezdany</strong>
      ) : (
        <strong className="exam-result exam-passed">Egzamin Zdany</strong>
      )}
    </>
  );
}

export default function EndExamView({
  correctAnswers,
  incorrectAnswers,
  examDispatch,
}) {
  return (
    <>
      <h2 className="end-exam-view__header">Koniec Egzaminu</h2>
      <ExamResult incorrectAnswers={incorrectAnswers} />
      <ul className="end-exam-view__answers">
        <li>Poprawne Odpowiedzi: {correctAnswers}</li>
        <li>Niepoprawne Odpowiedzi: {incorrectAnswers}</li>
      </ul>
      <Button
        label="Rozpocznij nowy egzamin!"
        className="end-exam-view__button"
        onClick={() => examDispatch({ type: "NEW_EXAM" })}
      />
    </>
  );
}
