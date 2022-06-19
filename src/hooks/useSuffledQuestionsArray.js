import React from "react";

import { QuestionContext } from "../contexts/QuestionsContext/QuestionContext";

export default function useSuffledQuestionsArray(numOfItems) {
  const { questionState } = React.useContext(QuestionContext);

  const [suffledQuestions, setSuffledQuestions] = React.useState([]);

  const suffle = React.useCallback(() => {
    if (questionState !== undefined) {
      setSuffledQuestions([...questionState].sort(() => 0.5 - Math.random()));
    }
  }, [questionState]);

  React.useEffect(() => {
    suffle();
  }, [suffle]);

  return numOfItems
    ? suffledQuestions.slice(0, numOfItems)
    : suffledQuestions;
}

