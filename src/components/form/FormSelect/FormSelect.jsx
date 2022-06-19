import "./FormSelect.css";

export default function FormSelect({
  label,
  register,
  placeholder,
  options,
  answer,
  errors,
}) {
  const isOptionDiferentThanYesNo = (option) =>
    option !== "Tak" && option !== "Nie";

  return (
    <label className="form-select">
      <span>{label}</span>
      <select className="form-select__field" defaultValue={""} {...register}>
        <option className="form-select__field--option" value={""} disabled>
          {placeholder}
        </option>
        {options.map(({ option, value }) => (
          <option
            key={option}
            className="form-select__field--option"
            value={option}
          >
            {isOptionDiferentThanYesNo(option) && <>{option}:&nbsp;</>}
            <>{value}</>
          </option>
        ))}
      </select>
      <p>Correct Answer: {answer}</p>
      {errors && <p>Pole Wymagane!</p>}
    </label>
  );
}
