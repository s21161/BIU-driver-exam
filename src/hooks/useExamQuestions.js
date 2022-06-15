import React from "react";

import { QuestionContext } from "../contexts/QuestionsContext/QuestionContext";

export default function useExamQuestions() {
  const questions = React.useContext(QuestionContext);

  const [examQuestions, setExamQuestions] = React.useState([]);

  const numOfQuestions = 15;

  React.useEffect(() => {
    if (questions !== undefined) {
      setExamQuestions([...questions].sort(() => 0.5 - Math.random()));
    }
  }, [questions]);

  return examQuestions.slice(0, numOfQuestions);
}
