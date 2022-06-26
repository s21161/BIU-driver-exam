import "./FormTextarea.css";

import FormValidationMessage from "../FormValidationMessage/FormValidationMessage";

export default function FormTextarea({
  label,
  register,
  defaultValue,
  errors,
}) {
  return (
    <label className="form-textarea">
      <span>{label}</span>
      <textarea
        className="form-textarea__field"
        {...register}
        defaultValue={defaultValue}
        rows="10"
        cols="60"
      />
      {errors && <FormValidationMessage />}
    </label>
  );
}
