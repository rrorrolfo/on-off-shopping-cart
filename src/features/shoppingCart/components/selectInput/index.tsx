import { ShopType } from "./types"
import "./selectInput.scss"

interface ISelecInputProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: ShopType[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectInput = ({ options, value, onChange }: ISelecInputProps) => {
  return (
    <select
      name="shops-select"
      id="shops-select"
      value={value}
      onChange={onChange}
      role="select"
      aria-label="shops-select"
      className="shops-select"
    >
      <option value="">Select Shop</option>
      {options.map(({ id, name }) => (
        <option value={id} key={id} role="option">
          {name}
        </option>
      ))}
    </select>
  )
}

export default SelectInput
