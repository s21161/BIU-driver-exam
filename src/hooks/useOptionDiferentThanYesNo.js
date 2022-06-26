export default function useOptionDiferentThanYesNo() {
  const isOptionDiferentThanYesNo = (option) =>
    option !== "Yes" && option !== "No";

  return { isOptionDiferentThanYesNo };
}
