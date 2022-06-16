import "./QuestionView.css";

import Button from "../../components/Button/Button";
import QuestionOption from "../QuestionOption/QuestionOption";

export default function QuestionView({
  examQuestions,
  questionNr,
  input,
  examDispatch,
}) {
  const handleNextQuestion = () => {
    const lastQuestionIndex = 14;

    input === examQuestions[questionNr].answer
      ? examDispatch({ type: "HANDLE_CORRECT_ANSWER" })
      : examDispatch({ type: "HANDLE_INCORRECT_ANSWER" });

    examDispatch({ type: "HANDLE_ANSWER_INPUT", input: "" });

    if (questionNr >= lastQuestionIndex) {
      examDispatch({ type: "END_EXAM" });
    }
  };

  return (
    <>
      <h2 className="question-view__header">Pytanie Nr: {questionNr + 1}</h2>
      <p className="question-view__content">
        {examQuestions[questionNr].content}
      </p>
      <ul className="question-view__answers">
        {examQuestions[questionNr].options.map(({ option, value }) => (
          <QuestionOption
            key={`${option}-${value}`}
            name={`question-nr-${questionNr + 1}`}
            option={option}
            value={value}
            dispatch={() =>
              examDispatch({
                type: "HANDLE_ANSWER_INPUT",
                input: option,
              })
            }
          />
        ))}
      </ul>
      <Button label="Następne Pytanie" onClick={handleNextQuestion} />
    </>
  );
}
