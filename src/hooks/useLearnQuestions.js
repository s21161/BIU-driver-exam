import useSuffledQuestionsArray from "./useSuffledQuestionsArray";

export default function useLearnQuestions() {
  const suffledQuestions = useSuffledQuestionsArray();

  return suffledQuestions;
}
