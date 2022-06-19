import React from "react";

import { QuestionContext } from "./QuestionContext";

import questions_db from "../../db/questions_db.json";
import questionReducer from "../../reducers/questionReducer";

export default function QuestionContextProvider({ children }) {
  const [questionState, questionDispath] = React.useReducer(
    questionReducer,
    questions_db.questions,
    (init) => init
  );

  const questionContextValue = React.useMemo(
    () => ({
      questionState,
      questionDispath,
    }),
    [questionState]
  );

  return (
    <QuestionContext.Provider value={questionContextValue}>
      {children}
    </QuestionContext.Provider>
  );
}
