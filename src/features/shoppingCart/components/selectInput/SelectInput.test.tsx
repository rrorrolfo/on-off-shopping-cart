import { render, screen } from "@testing-library/react"
import SelectInput from "."

const options = [
  {
    name: "Rimi",
    id: "Rimi",
    sortOrder: 2,
  },
  {
    name: "Maxima",
    id: "Maxima",
    sortOrder: 3,
  },
]

test("Select component is rendered", () => {
  render(<SelectInput options={[]} value="" onChange={() => {}} />)
  const selectElement = screen.getByRole("select", { name: "shops-select" })
  expect(selectElement).toBeInTheDocument()
})

test("Select options are rendered", () => {
  render(<SelectInput options={options} value="" onChange={() => {}} />)
  const selectElement = screen.getByRole("select", { name: "shops-select" })
  const optionElements = screen.getAllByRole("option")
  expect(selectElement).toBeInTheDocument()
  expect(optionElements.length).toEqual(3)
})

test("Select element displays the correct value", () => {
  const { rerender } = render(
    <SelectInput options={options} value="" onChange={() => {}} />,
  )

  const selectElement = screen.getByDisplayValue("Select Shop")
  expect(selectElement).toBeInTheDocument()

  rerender(<SelectInput options={options} value="Maxima" onChange={() => {}} />)
  const updatedSelectElement = screen.getByDisplayValue("Maxima")
  expect(updatedSelectElement).toBeInTheDocument()

  const incorrectSelectElemet = screen.queryByDisplayValue("Rimi")
  expect(incorrectSelectElemet).not.toBeInTheDocument()
})
