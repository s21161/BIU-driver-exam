import React from "react";

import { useForm } from "react-hook-form";

import { QuestionContext } from "../contexts/QuestionsContext/QuestionContext";

import FormLayout from "../layouts/FormLayout/FormLayout";

import FormTextfield from "../components/form/FormTextfield/FormTextfield";
import FormTextarea from "../components/form/FormTextarea/FormTextarea";
import FormSelect from "../components/form/FormSelect/FormSelect";

export default function EditForm({ id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { questionState, questionDispath } = React.useContext(QuestionContext);

  const findQuestionById = questionState.find(
    (question) => question.id === Number(id)
  );

  const handleOptions = (data) => {
    return data.A && data.B && data.C
      ? [
          { option: "A", value: data.A },
          { option: "B", value: data.B },
          { option: "C", value: data.C },
        ]
      : [
          { option: "Tak", value: data.Tak },
          { option: "Nie", value: data.Nie },
        ];
  };

  const onSubmit = (data) => {
    const updatedQuestion = {
      id: Number(id),
      content: data.content,
      options: handleOptions(data),
      answer: data.answer,
    };

    questionDispath({
      type: "EDIT_QUESTION",
      id: Number(id),
      question: updatedQuestion,
    });
  };

  return (
    <FormLayout
      handleSubmit={handleSubmit(onSubmit)}
      formTitle={`Edytuj Pytanie nr. ${id}`}
      submitLabel="Edytuj"
    >
      <FormTextarea
        label="Treść Pytania"
        register={register("content", { required: true })}
        defaultValue={findQuestionById.content}
      />
      {findQuestionById.options.map(({ option, value }) => (
        <FormTextfield
          label={`${option}: `}
          register={register(`${option}`, { required: true })}
          defaultValue={value}
          errors={errors[option]}
          style={{
            border: `1px solid ${
              option === findQuestionById.answer ? "var(--green)" : "var(--red)"
            }`,
          }}
        />
      ))}
      <FormSelect
        label="Poprawna Odpowiedź"
        placeholder="Wybierz Poprawną Odpowiedź"
        register={register("answer", { required: true })}
        options={findQuestionById.options}
        answer={findQuestionById.answer}
        errors={errors.answer}
      />
    </FormLayout>
  );
}
