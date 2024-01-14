import { render, screen } from "@testing-library/react"
import Input from "."

test("Input is rendered", () => {
  render(<Input value="" onChange={() => {}} />)
  const inputElement = screen.getByPlaceholderText(/Name/i)
  expect(inputElement).toBeInTheDocument()
})

test("Input should display the new value", () => {
  const { rerender } = render(<Input value="" onChange={() => {}} />)
  const inputElement = screen.getByPlaceholderText(/Name/i)
  expect(inputElement).toHaveValue("")

  rerender(<Input value="Milk" onChange={() => {}} />)
  expect(inputElement).toHaveValue("Milk")
})

test("Input should NOT show error message and error styling when it does not have an error", () => {
  render(<Input value="" onChange={() => {}} />)
  const inputElement = screen.getByPlaceholderText(/Name/i)
  const messageElement = screen.queryByText(/error message/i)

  expect(inputElement).toBeInTheDocument()
  expect(messageElement).not.toBeInTheDocument()
  expect(inputElement.getAttribute("class")).not.toMatch(/invalid/gi)
})

test("Input should show correct style and message when it has an error", () => {
  render(
    <Input
      value=""
      onChange={() => {}}
      invalid
      showError
      errorMessage="Error message"
    />,
  )
  const inputElement = screen.getByPlaceholderText(/Name/i)
  const messageElement = screen.getByText(/error message/i)

  expect(inputElement).toBeInTheDocument()
  expect(messageElement).toBeInTheDocument()
  expect(inputElement.getAttribute("class")).toMatch(/invalid/gi)
})
