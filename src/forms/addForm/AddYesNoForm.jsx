import React from "react";

import { useForm } from "react-hook-form";

import { QuestionContext } from "../../contexts/QuestionsContext/QuestionContext";

import useHandleOptions from "../../hooks/useHandleOptions";
import useNewId from "../../hooks/useNewId";

import FormLayout from "../../layouts/FormLayout/FormLayout";

import FormTextarea from "../../components/form/FormTextarea/FormTextarea";
import FormTextfield from "../../components/form/FormTextfield/FormTextfield";
import FormSelect from "../../components/form/FormSelect/FormSelect";

import answersReducer from "../../reducers/answersReducer";
import { answersInitState } from "../../states/answersInitState";

export default function AddYesNoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { questionState, questionDispath } = React.useContext(QuestionContext);

  const { handleOptions } = useHandleOptions();
  const newId = useNewId(questionState);

  const [answersState, andwersDispatch] = React.useReducer(
    answersReducer,
    answersInitState.yesNo,
    (init) => init
  );

  const [correctAnswer, setCorrectAnswer] = React.useState("");

  const onSubmit = (data) => {
    questionDispath({
      type: "ADD_QUESTION",
      question: {
        id: newId,
        content: data.content,
        options: handleOptions(data),
        answer: data.answer,
      },
    });
  };

  return (
    <FormLayout
      handleSubmit={handleSubmit(onSubmit)}
      formTitle="Dodaj Pytanie"
      submitLabel="Dodaj"
    >
      <FormTextarea
        label="Treść Pytania"
        register={register("content", { required: true })}
        errors={errors.content}
      />
      <ul>
        {Array.from({ length: 2 }, (_, i) => ({
          option: i === 0 ? "Yes" : "No",
          value: i === 0 ? "Tak" : "Nie",
        })).map(({ option, value }, index) => (
          <li key={`${option}-${index}`}>
            <FormTextfield
              label={value}
              register={register(`${option}`, { required: true })}
              defaultValue={value}
              errors={errors[option]}
              onChange={(event) =>
                andwersDispatch({
                  type: "UPDATE_ANSWER",
                  option: option,
                  value: event.target.value,
                })
              }
            />
          </li>
        ))}
      </ul>
      <FormSelect
        label="Poprawna Odpowiedź"
        placeholder="Wybierz Poprawną Odpowiedź"
        register={register("answer", {
          required: true,
          onChange: (event) =>
            setCorrectAnswer(event.target.value === "Yes" ? "Tak" : "Nie"),
        })}
        options={answersState}
        answer={correctAnswer}
        errors={errors.answer}
      />
    </FormLayout>
  );
}
