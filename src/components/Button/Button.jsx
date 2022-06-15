import "./Button.css";

export default function Button({ label, className, onClick }) {
  const isClassName =
    className !== undefined ? `button ${className}` : "button";

  return (
    <button className={`${isClassName}`} onClick={onClick}>
      {label}
    </button>
  );
}
