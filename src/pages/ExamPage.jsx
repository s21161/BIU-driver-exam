import ExamContextProvider from "../contexts/ExamContext/ExamContextProvider";

import Exam from "../components/Exam/Exam";

export default function ExamPage() {
  return (
    <ExamContextProvider>
      <Exam />
    </ExamContextProvider>
  );
}
