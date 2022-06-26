import React from "react";

import "./FormSelect.css";

import useOptionDiferentThanYesNo from "../../../hooks/useOptionDiferentThanYesNo";

import FormValidationMessage from "../FormValidationMessage/FormValidationMessage";

export default function FormSelect({
  label,
  register,
  placeholder,
  options,
  answer,
  errors,
  defaultValue,
}) {
  const { isOptionDiferentThanYesNo } = useOptionDiferentThanYesNo();

  return (
    <label className="form-select">
      <span>{label}</span>
      <select
        className="form-select__field"
        defaultValue={defaultValue ? defaultValue : ""}
        {...register}
      >
        <option className="form-select__field--option" value={""} disabled>
          {placeholder}
        </option>
        {options.map(({ option, value }, index) => (
          <option
            key={`${option}-${index}`}
            className="form-select__field--option"
            value={option}
          >
            {isOptionDiferentThanYesNo(option) && <>{option}:&nbsp;</>}
            <>{value}</>
          </option>
        ))}
      </select>
      <p>Poprawna Odpowiedź: {answer}</p>
      {errors && <FormValidationMessage />}
    </label>
  );
}
