import React from "react";

import { QuestionContext } from "../contexts/QuestionsContext/QuestionContext";

export default function useSuffledQuestionsArray(numOfItems) {
  const questions = React.useContext(QuestionContext);

  const [suffledQuestions, setSuffledQuestions] = React.useState([]);

  const suffle = React.useCallback(() => {
    if (questions !== undefined) {
      setSuffledQuestions([...questions].sort(() => 0.5 - Math.random()));
    }
  }, [questions]);

  React.useEffect(() => {
    suffle();
  }, [suffle]);

  return numOfItems
    ? suffledQuestions.slice(0, numOfItems)
    : suffledQuestions;
}

