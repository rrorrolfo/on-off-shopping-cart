import "./Input.sass"

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  invalid?: boolean
  showError?: boolean
  errorMessage?: string
  id: string
  name?: string
  placeholder?: string
}

const Input = ({
  value,
  onChange,
  invalid = false,
  showError = false,
  errorMessage = "",
  id,
  name = "",
  placeholder = "",
  ...props
}: IInputProps) => {
  return (
    <div className="input--container">
      <input
        type="text"
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`input ${invalid ? "invalid" : ""}`}
        {...props}
      />
      {showError && <span className="error-message">{errorMessage}</span>}
    </div>
  )
}

export default Input
