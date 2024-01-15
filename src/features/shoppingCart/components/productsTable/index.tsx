import "./productsTable.sass"

import { ProductType } from "../../../../common/types/shoppingCart"

type ProductsTableProps = {
  products: ProductType[]
  onDeleteClick: (product: ProductType) => void
}

const ProductsTable = ({ products, onDeleteClick }: ProductsTableProps) => {
  return (
    <table className="products-table" role="table" aria-label="products-table">
      <tbody>
        {products.map(({ name, id, shop, sortOrder }) => (
          <tr
            key={id}
            className="products-table__row"
            data-testid="products-table-row"
          >
            <td className="products-table__table-cell">{name}</td>
            <td className="products-table__table-cell">{shop}</td>
            <td
              className="products-table__table-cell products-table__table-cell--red-text"
              onClick={() => onDeleteClick({ name, id, shop, sortOrder })}
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
