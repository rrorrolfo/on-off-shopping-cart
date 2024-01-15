import "./selectInput.sass"

type OptionType = {
  id: string
  name: string
}

interface ISelecInputProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: OptionType[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  invalid?: boolean
  showError?: boolean
  errorMessage?: string
  className?: string
  id: string
  name?: string
}

const SelectInput = ({
  options,
  value,
  onChange,
  invalid = false,
  showError = false,
  errorMessage = "",
  className = "",
  id,
  name = "",
  ...props
}: ISelecInputProps) => {
  return (
    <div className="select--container">
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        role="select"
        aria-label={name}
        className={`${className} ${invalid ? "invalid" : ""}`}
        {...props}
      >
        <option value="">Select Shop</option>
        {options.map(({ id, name }) => (
          <option value={id} key={id} role="option">
            {name}
          </option>
        ))}
      </select>
      {showError && <span className="error-message">{errorMessage}</span>}
    </div>
  )
}

export default SelectInput
