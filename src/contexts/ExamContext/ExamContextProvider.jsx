import React from "react";

import { ExamContext } from "./ExamContext";

import examReducer from "../../reducers/examReducer";
import { examInitState } from "../../states/examInitState";

export default function ExamContextProvider({ children }) {
  const [examState, examDispatch] = React.useReducer(
    examReducer,
    examInitState
  );

  const examContextValue = React.useMemo(
    () => ({ examState, examDispatch }),
    [examState]
  );

  return (
    <ExamContext.Provider value={examContextValue}>
      {children}
    </ExamContext.Provider>
  );
}
