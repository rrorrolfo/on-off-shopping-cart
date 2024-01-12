import { render, screen } from "@testing-library/react"
import SearchInput from "."

test("Search Input is rendered", () => {
  render(<SearchInput value="" onChange={() => {}} />)
  const inputElement = screen.getByPlaceholderText(/Name/i)
  expect(inputElement).toBeInTheDocument()
})

test("Search Input should display the new value", () => {
  const { rerender } = render(<SearchInput value="" onChange={() => {}} />)
  const inputElement = screen.getByPlaceholderText(/Name/i)
  expect(inputElement).toHaveValue("")

  rerender(<SearchInput value="Milk" onChange={() => {}} />)
  expect(inputElement).toHaveValue("Milk")
})
