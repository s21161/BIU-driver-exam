export default function questionReducer(state, action) {
  switch (action.type) {
    case "EDIT_QUESTION":
      const updatedArray = state.filter(({ id }) => id !== action.id);

      updatedArray.push(action.question);

      return updatedArray.sort((a, b) => a.id - b.id);
    case "DELETE_QUESTION":
      return state.filter(({ id }) => id !== action.id);
    default:
      throw new Error("Invalid question reducer action");
  }
}
