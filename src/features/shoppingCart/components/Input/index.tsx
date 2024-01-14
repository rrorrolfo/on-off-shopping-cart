import "./Input.sass"

interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  invalid?: boolean
  showError?: boolean
  errorMessage?: string
}

const Input = ({
  value,
  onChange,
  invalid = false,
  showError = false,
  errorMessage = "",
  ...props
}: IInputProps) => {
  return (
    <div className="input--container">
      <input
        type="text"
        id="product-search-input"
        data-testid="product-search-input"
        name="product-search-input"
        onChange={onChange}
        value={value}
        placeholder="Name"
        className={`input ${invalid ? "invalid" : ""}`}
        {...props}
      />
      {showError && <span className="error-message">{errorMessage}</span>}
    </div>
  )
}

export default Input
