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

export default function AddABCForm() {
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
    answersInitState.abc,
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
        {Array.from({ length: 3 }, (_, i) => ({
          option: String.fromCharCode(65 + i),
          value: "",
        })).map(({ option }) => (
          <li key={option}>
            <FormTextfield
              label={option}
              register={register(`${option}`, { required: true })}
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
          onChange: (event) => setCorrectAnswer(event.target.value),
        })}
        options={answersState}
        answer={correctAnswer}
        errors={errors.answer}
      />
    </FormLayout>
  );
}
