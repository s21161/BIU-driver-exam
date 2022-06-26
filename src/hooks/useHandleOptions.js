import {
  abcTypeQuestionModel,
  yesOrNoTypeQuestionModel,
} from "../models/QuestionModels";

export default function useHandleOptions() {
  const handleOptions = (data) =>
    data.A && data.B && data.C
      ? abcTypeQuestionModel(data)
      : yesOrNoTypeQuestionModel(data);

  return { handleOptions };
}
