import { ShopType } from "../../../../common/types/shops"
import "./selectInput.sass"

interface ISelecInputProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: ShopType[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  invalid?: boolean
  showError?: boolean
  errorMessage?: string
}

const SelectInput = ({
  options,
  value,
  onChange,
  invalid = false,
  showError = false,
  errorMessage = "",
  ...props
}: ISelecInputProps) => {
  return (
    <div className="select--container">
      <select
        name="shops-select"
        id="shops-select"
        value={value}
        onChange={onChange}
        role="select"
        aria-label="shops-select"
        className={`shops-select ${invalid ? "invalid" : ""}`}
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
