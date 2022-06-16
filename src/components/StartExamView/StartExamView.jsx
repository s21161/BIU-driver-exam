import "./StartExamView.css";

import Button from "../../components/Button/Button";

export default function StartExamView({ examDispatch }) {
  return (
    <>
      <h2 className="start-exam-view__header">Rozpocznij Egzamin!</h2>
      <p className="start-exam-view__description">
        Czeka Cię 15 pytań losowanych z bazy pytań. Po skończonym egzaminie
        dowiesz się, czy jesteś gotowy na prawdziwy Egzamin!
      </p>
      <Button
        label="Rozpocznij!"
        className={"start-exam-view__start-button"}
        onClick={() => examDispatch({ type: "START_EXAM" })}
      />
    </>
  );
}
