import "./FormLayout.css";

export default function FormLayout({
  handleSubmit,
  formTitle,
  submitLabel,
  children,
}) {
  return (
    <form className="form-layout" onSubmit={handleSubmit}>
      <h2 className="form-layout__header">{formTitle}</h2>
      {children}
      <input type="submit" value={submitLabel} className="form-layout-submit" />
    </form>
  );
}
