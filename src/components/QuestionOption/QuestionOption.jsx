export default function QuestionOption({ name, option, value, dispatch }) {
  const isOptionDiferentThanYesNo = (option) =>
    option !== "Tak" && option !== "Nie";

  return (
    <li>
      <label>
        <input name={name} type="radio" value={value} onChange={dispatch} />
        {isOptionDiferentThanYesNo(option) && <span>{option}:&nbsp;</span>}
        <span>{value}</span>
      </label>
    </li>
  );
}
