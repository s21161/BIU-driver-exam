import "./FormTextarea.css";

export default function FormTextarea({ label, register, defaultValue }) {
  return (
    <label className="form-textarea">
      <span>{label}</span>
      <textarea
        className="form-textarea__field"
        {...register}
        defaultValue={defaultValue}
        rows="10" cols="60"
      />
    </label>
  );
}
