import { render, screen } from "@testing-library/react"
import SelectInput from "."
import { ShopType } from "../../../../common/types/shops"

const options: ShopType[] = [
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

test("Select element should NOT show error message and error styling when it does not have an error", () => {
  render(<SelectInput options={options} value="Maxima" onChange={() => {}} />)
  const selectElement = screen.getByDisplayValue("Maxima")
  const messageElement = screen.queryByText(/error message/i)

  expect(selectElement).toBeInTheDocument()
  expect(messageElement).not.toBeInTheDocument()
  expect(selectElement.getAttribute("class")).not.toMatch(/invalid/gi)
})

test("Select element should show correct style and message when it has an error", () => {
  render(
    <SelectInput
      options={options}
      value=""
      onChange={() => {}}
      invalid
      showError
      errorMessage="Error message"
    />,
  )
  const selectElement = screen.getByDisplayValue("Select Shop")
  const messageElement = screen.getByText(/error message/i)

  expect(selectElement).toBeInTheDocument()
  expect(messageElement).toBeInTheDocument()
  expect(selectElement.getAttribute("class")).toMatch(/invalid/gi)
})
