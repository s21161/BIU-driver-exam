import useSuffledQuestionsArray from "./useSuffledQuestionsArray";

export default function useExamQuestions() {
  const numOfQuestions = 15;

  const suffledQuestions = useSuffledQuestionsArray(numOfQuestions);

  return suffledQuestions;
}
