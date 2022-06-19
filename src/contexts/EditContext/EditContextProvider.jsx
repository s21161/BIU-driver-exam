import React from "react";

import { EditContext } from "./EditContext";

import editReducer from "../../reducers/editReducer";
import { editInitState } from "../../states/editInitState";

export default function EditContextProvider({ children }) {
  const [editState, editDispatch] = React.useReducer(
    editReducer,
    editInitState,
    (init) => init
  );

  const editContextValue = React.useMemo(
    () => ({ editState, editDispatch }),
    [editState]
  );

  return (
    <EditContext.Provider value={editContextValue}>
      {children}
    </EditContext.Provider>
  );
}
