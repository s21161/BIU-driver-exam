import "./FormTextfield.css";

export default function FormTextfield({
  label,
  register,
  defaultValue,
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
      />
      {errors && <p>Pole Wymagane!</p>}
    </label>
  );
}
