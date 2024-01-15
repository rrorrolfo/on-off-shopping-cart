import { render, screen } from "@testing-library/react"
import ProductsTable from "."
import { ProductType } from "../../../../common/types/shoppingCart"

const testProducts: ProductType[] = [
  {
    name: "Milk",
    shop: "Maxima",
    id: "milk-maxima-433",
    sortOrder: 3,
  },
  {
    name: "Bread",
    shop: "Rimi",
    id: "bread-maxima-433",
    sortOrder: 2,
  },
]

test("Products table is rendered", () => {
  render(<ProductsTable products={[]} onDeleteClick={() => {}} />)
  const tableElement = screen.getByRole("table", { name: /products-table/i })
  expect(tableElement).toBeInTheDocument()
})

test("Product table displays correctly the amount of rows depending on the number of products", () => {
  const { rerender } = render(
    <ProductsTable products={testProducts} onDeleteClick={() => {}} />,
  )

  const tableElement = screen.getByRole("table", { name: /products-table/i })
  const rowElements = screen.getAllByTestId("products-table-row")

  expect(tableElement).toBeInTheDocument()
  expect(rowElements.length).toEqual(2)

  rerender(
    <ProductsTable
      products={[
        {
          name: "Milk",
          shop: "Maxima",
          id: "milk-maxima-433",
          sortOrder: 3,
        },
      ]}
      onDeleteClick={() => {}}
    />,
  )

  const rowElementsUpdated = screen.getAllByTestId("products-table-row")
  expect(rowElementsUpdated.length).toEqual(1)
})
