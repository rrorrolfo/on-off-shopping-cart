import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import ShoppingCart from "."
import { store } from "../../app/store"

test("Happy path for adding and removing a product", async () => {
  const user = userEvent.setup()

  render(
    <Provider store={store}>
      <ShoppingCart />
    </Provider>,
  )

  const inputElement = screen.getByPlaceholderText(/Name/i)
  const selectElement = screen.getByRole("select", { name: "shops-select" })
  const addButtonElement = screen.getByRole("button", { name: "add-button" })
  const tableElement = screen.getByRole("table", { name: /products-table/i })
  const rowElements = screen.queryAllByTestId("products-table-row")

  expect(inputElement).toBeInTheDocument()
  expect(selectElement).toBeInTheDocument()
  expect(addButtonElement).toBeInTheDocument()
  expect(tableElement).toBeInTheDocument()
  expect(rowElements).toHaveLength(0)

  // Should not be able to add a product without name and shop selected
  await user.click(addButtonElement)
  expect(screen.queryAllByTestId("products-table-row")).toHaveLength(0)

  await user.type(inputElement, "Milk")
  expect(inputElement).toHaveValue("Milk")

  const optionElements = await screen.findAllByRole("option")
  await expect(optionElements).toHaveLength(4)
  await fireEvent.change(selectElement, { target: { value: "maxima" } })
  expect(selectElement).toHaveValue("maxima")

  // Adding product to cart
  await user.click(addButtonElement)
  expect(screen.queryAllByTestId("products-table-row")).toHaveLength(1)

  // Deleting product from cart
  const deleteElement = screen.getByText(/delete/i)
  await user.click(deleteElement)
  expect(screen.queryAllByTestId("products-table-row")).toHaveLength(0)
})

test("Should not be able to add a product without shop selected", async () => {
  const user = userEvent.setup()

  render(
    <Provider store={store}>
      <ShoppingCart />
    </Provider>,
  )

  const inputElement = screen.getByPlaceholderText(/Name/i)
  const selectElement = screen.getByRole("select", { name: "shops-select" })
  const addButtonElement = screen.getByRole("button", { name: "add-button" })
  const tableElement = screen.getByRole("table", { name: /products-table/i })
  const rowElements = screen.queryAllByTestId("products-table-row")

  expect(inputElement).toBeInTheDocument()
  expect(selectElement).toBeInTheDocument()
  expect(addButtonElement).toBeInTheDocument()
  expect(tableElement).toBeInTheDocument()
  expect(rowElements).toHaveLength(0)

  await user.type(inputElement, "Milk")
  expect(inputElement).toHaveValue("Milk")

  await user.click(addButtonElement)
  expect(screen.queryAllByTestId("products-table-row")).toHaveLength(0)
})

test("Should not be able to add a product without product name", async () => {
  const user = userEvent.setup()

  render(
    <Provider store={store}>
      <ShoppingCart />
    </Provider>,
  )

  const inputElement = screen.getByPlaceholderText(/Name/i)
  const selectElement = screen.getByRole("select", { name: "shops-select" })
  const addButtonElement = screen.getByRole("button", { name: "add-button" })
  const tableElement = screen.getByRole("table", { name: /products-table/i })
  const rowElements = screen.queryAllByTestId("products-table-row")

  expect(inputElement).toBeInTheDocument()
  expect(selectElement).toBeInTheDocument()
  expect(addButtonElement).toBeInTheDocument()
  expect(tableElement).toBeInTheDocument()
  expect(rowElements).toHaveLength(0)

  const optionElements = await screen.findAllByRole("option")
  await expect(optionElements).toHaveLength(4)
  await fireEvent.change(selectElement, { target: { value: "maxima" } })
  expect(selectElement).toHaveValue("maxima")

  await user.click(addButtonElement)
  expect(screen.queryAllByTestId("products-table-row")).toHaveLength(0)
})
