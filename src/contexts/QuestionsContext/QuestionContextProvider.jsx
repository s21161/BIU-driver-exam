import { QuestionContext } from "./QuestionContext";

import questions_db from "../../db/questions_db.json";

export default function QuestionContextProvider({ children }) {
  return (
    <QuestionContext.Provider value={questions_db.questions}>
      {children}
    </QuestionContext.Provider>
  );
}
