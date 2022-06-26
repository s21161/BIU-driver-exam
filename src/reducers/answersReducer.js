export default function answersReducer(state, action) {
  switch (action.type) {
    case "UPDATE_ANSWER":
      const objIndex = state.findIndex((obj) => obj.option === action.option);
      
      state[objIndex].value = action.value;

      return [...state];
    default:
      throw new Error("Invalid aswers reducer action");
  }
}
