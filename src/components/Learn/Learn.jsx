import React from "react";

import { useNavigate } from "react-router-dom";

import "./Learn.css";

import { routes } from "../../routes";

import { LearnContext } from "../../contexts/LearnContext/LearnContext";

import useLearnQuestions from "../../hooks/useLearnQuestions";

import LearnButtonsWrapper from "../../layouts/LearnButtonsWrapper/LearnButtonsWrapper";

import Button from "../Button/Button";
import QuestionOption from "../QuestionOption/QuestionOption";

function IsCorrectAnswer({ isCorrect }) {
  return (
    <>
      {isCorrect ? (
        <strong className="is-correct-answer correct">Dobrze!</strong>
      ) : (
        <strong className="is-correct-answer incorrect">Źle!</strong>
      )}
    </>
  );
}

export default function Learn() {
  let navigate = useNavigate();

  const { learnState, learnDispatch } = React.useContext(LearnContext);

  const learnQuestions = useLearnQuestions();

  return (
    <article className="learn">
      {learnState.questions.length > 0 && (
        <>
          <h2 className="learn__header">
            Pytanie {learnState.questions[learnState.questionCounter].id}
          </h2>
          {learnState.isCorrect !== undefined && (
            <IsCorrectAnswer isCorrect={learnState.isCorrect} />
          )}
          <p className="learn__content">
            {learnState.questions[learnState.questionCounter].content}
          </p>
          <ul className="learn__answers">
            {learnState.questions[learnState.questionCounter].options.map(
              ({ option, value }) => (
                <QuestionOption
                  key={`${option}-${value}`}
                  name={`question-nr-${
                    learnState.questions[learnState.questionCounter].id
                  }`}
                  option={option}
                  value={value}
                  dispatch={() => {
                    learnDispatch({ type: "HANDLE_INPUT", input: option });
                    learnDispatch({ type: "HANDLE_IS_CORRECT" });
                  }}
                />
              )
            )}
          </ul>
        </>
      )}
      <LearnButtonsWrapper>
        <Button
          label="Następne Pytanie"
          onClick={() =>
            learnDispatch({ type: "NEXT_QUESTION", questions: learnQuestions })
          }
        />
        <Button
          label="Zakończ"
          onClick={() => {
            learnDispatch({ type: "RESET_QUESTIONS" });
            navigate(routes.HOME);
          }}
        />
      </LearnButtonsWrapper>
    </article>
  );
}
