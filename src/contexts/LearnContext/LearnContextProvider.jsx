import React from "react";

import { LearnContext } from "./LearnContext";

import learnReducer from "../../reducers/learnReducer";
import { learnInitState } from "../../states/learnInitState";

import useLearnQuestions from "../../hooks/useLearnQuestions";

export default function LearnContextProvider({ children }) {
  const [learnState, learnDispatch] = React.useReducer(
    learnReducer,
    learnInitState,
    (init) => init
  );

  const learnQuestions = useLearnQuestions();

  const handleLearnQuestionsArray = React.useCallback(() => {
    if (learnQuestions.length > 0) {
      learnDispatch({
        type: "ADD_SUFFLED_QUESTIONS",
        questions: learnQuestions,
      });
    }
  }, [learnDispatch, learnQuestions]);

  React.useEffect(() => {
    if (learnQuestions.length > 0) {
      handleLearnQuestionsArray();
    }
  }, [handleLearnQuestionsArray, learnQuestions]);

  const learnContextValue = React.useMemo(
    () => ({ learnState, learnDispatch }),
    [learnState]
  );

  return (
    <LearnContext.Provider value={learnContextValue}>
      {children}
    </LearnContext.Provider>
  );
}
