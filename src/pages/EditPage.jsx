import EditContextProvider from "../contexts/EditContext/EditContextProvider";

import Edit from "../components/Edit/Edit";

export default function EditPage() {
  return (
    <EditContextProvider>
      <Edit />
    </EditContextProvider>
  );
}
