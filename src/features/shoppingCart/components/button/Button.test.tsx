import { screen, render } from "@testing-library/react"
import Button from "."

test("Button is rendered", () => {
  render(<Button />)
  const buttonElement = screen.getByRole("button", { name: "add-button" })
  expect(buttonElement).toBeInTheDocument()
})
