import React from "react";

import AddFormButtonsWrapper from "../layouts/AddFormButtonsWrapper/AddFormButtonsWrapper";

import AddABCForm from "./addForm/AddABCForm";
import AddYesNoForm from "./addForm/AddYesNoForm";

import Button from "../components/Button/Button";

export default function AddForm() {
  const [answersType, setAnswersType] = React.useState(true);

  return (
    <>
      <AddFormButtonsWrapper>
        <Button label="Pytanie typu ABC" onClick={() => setAnswersType(true)} />
        <Button
          label="Pytanie typu Tak/Nie"
          onClick={() => setAnswersType(false)}
        />
      </AddFormButtonsWrapper>
      {answersType ? <AddABCForm /> : <AddYesNoForm />}
    </>
  );
}
