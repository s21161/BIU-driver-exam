import "./QuestionView.css";

import Button from "../../components/Button/Button";

export default function QuestionView({
  examQuestions,
  questionNr,
  input,
  examDispatch,
}) {
  const isOptionDiferentThanYesNo = (option) =>
    option !== "Tak" && option !== "Nie";

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
          <li key={`${option}-${value}`}>
            <label>
              <input
                name={`question-nr-${questionNr + 1}`}
                type="radio"
                value={value}
                onChange={() =>
                  examDispatch({
                    type: "HANDLE_ANSWER_INPUT",
                    input: option,
                  })
                }
              />
              {isOptionDiferentThanYesNo(option) && (
                <span>{option}:&nbsp;</span>
              )}
              <span>{value}</span>
            </label>
          </li>
        ))}
      </ul>
      <Button label="Następne Pytanie" onClick={handleNextQuestion} />
    </>
  );
}
