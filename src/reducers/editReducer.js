export default function editReducer(state, action) {
  switch (action.type) {
    case "HANDLE_NUM_OF_PAGES":
      if (state.currentPage > Math.ceil(action.items / state.itemsPerPage)) {
        return {
          ...state,
          currentPage: Math.ceil(action.items / state.itemsPerPage),
          numOfPages: Math.ceil(action.items / state.itemsPerPage),
        };
      }

      return {
        ...state,
        numOfPages: Math.ceil(action.items / state.itemsPerPage),
      };
    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case "PREV_PAGE":
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
      throw new Error("Invalid edit reducer action");
  }
}
