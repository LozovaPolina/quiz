import './Input.css'

export default function Input({ label, id, error = false, ...props }) {
  return (
    <div className={`control no-margin ${error !== false && 'control-input-error' }`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} />
      <div className="control-error">{error && error}</div>
    </div>
  );
}
