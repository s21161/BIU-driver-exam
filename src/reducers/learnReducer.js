export default function learnReducer(state, action) {
  switch (action.type) {
    case "ADD_SUFFLED_QUESTIONS":
      return {
        ...state,
        questions: action.questions,
      };
    case "RESET_QUESTIONS":
      return {
        questions: [],
        questionCounter: 0,
        input: "",
      };
    case "NEXT_QUESTION":
      const isEndOfArray =
        state.questionCounter + 1 === state.questions.length
          ? 0
          : state.questionCounter + 1;

      const isNewQuestionArray =
        state.questionCounter + 1 === state.questions.length
          ? action.questions
          : state.questions;

      return {
        questions: isNewQuestionArray,
        questionCounter: isEndOfArray,
        input: "",
      };
    case "HANDLE_INPUT":
      return {
        ...state,
        input: action.input,
      };
    case "HANDLE_IS_CORRECT":
      const isCorrect =
        state.questions[state.questionCounter].answer === state.input;

      return {
        ...state,
        isCorrect: isCorrect,
      };
    default:
      throw new Error("Invalid learn reducer action");
  }
}
