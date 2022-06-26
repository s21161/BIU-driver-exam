import "./FormTextfield.css";

import FormValidationMessage from "../FormValidationMessage/FormValidationMessage";

export default function FormTextfield({
  label,
  register,
  defaultValue,
  onChange,
  style,
  errors,
}) {
  return (
    <label className="form-textfield">
      <span className="form-textfield__label">{label}</span>
      <input
        style={style}
        className="form-textfield__input"
        {...register}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      {errors && <FormValidationMessage />}
    </label>
  );
}
