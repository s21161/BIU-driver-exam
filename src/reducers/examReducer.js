export default function examReducer(state, action) {
  switch (action.type) {
    case "START_EXAM":
      return {
        ...state,
        startExam: true,
        endExam: false,
      };
    case "END_EXAM":
      return {
        ...state,
        startExam: false,
        endExam: true,
      };
    case "HANDLE_ANSWER_INPUT":
      return {
        ...state,
        input: action.input,
      };
    case "HANDLE_CORRECT_ANSWER":
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1,
        questionNr: state.questionNr + 1,
      };
    case "HANDLE_INCORRECT_ANSWER":
      return {
        ...state,
        incorrectAnswers: state.incorrectAnswers + 1,
        questionNr: state.questionNr + 1,
      };
    case "NEW_EXAM":
      return {
        startExam: true,
        endExam: false,
        questionNr: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
      };
    default:
      throw new Error("Invalid exam reducer action");
  }
}
