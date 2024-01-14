import "./productsTable.sass"

import { ProductType } from "../../../../common/types/shoppingCart"

type ProductsTableProps = {
  products: ProductType[]
}

const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <table className="products-table" role="table" aria-label="products-table">
      <tbody>
        {products.map(({ name, id, shop }) => (
          <tr
            key={id}
            className="products-table__row"
            data-testid="products-table-row"
          >
            <td className="products-table__table-cell">{name}</td>
            <td className="products-table__table-cell">{shop}</td>
            <td
              className="products-table__table-cell products-table__table-cell--red-text"
              onClick={() => {}}
            >
              Delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductsTable
