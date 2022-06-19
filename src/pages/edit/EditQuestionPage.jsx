import { useParams } from "react-router-dom";

import EditForm from "../../forms/EditForm";

export default function EditQuestionPage() {
  let { id } = useParams();

  return <EditForm id={id} />;
}
