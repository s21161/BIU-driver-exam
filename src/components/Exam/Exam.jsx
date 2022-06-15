import React from "react";

import "./Exam.css";

import { ExamContext } from "../../contexts/ExamContext/ExamContext";

import useExamQuestions from "../../hooks/useExamQuestions";

import StartExamView from "../../views/StartExamView/StartExamView";
import QuestionView from "../../views/QuestionView/QuestionView";
import EndExamView from "../../views/EndExamView/EndExamView";

export default function Exam() {
  const examQuestions = useExamQuestions();

  const { examState, examDispatch } = React.useContext(ExamContext);

  return (
    <article className="exam">
      {!examState.startExam && !examState.endExam && (
        <StartExamView examDispatch={examDispatch} />
      )}

      {examState.startExam && (
        <QuestionView
          examQuestions={examQuestions}
          questionNr={examState.questionNr}
          input={examState.input}
          examDispatch={examDispatch}
        />
      )}

      {examState.endExam && (
        <EndExamView
          correctAnswers={examState.correctAnswers}
          incorrectAnswers={examState.incorrectAnswers}
          examDispatch={examDispatch}
        />
      )}
    </article>
  );
}
