import { useState } from "react"

import SearchInput from "./components/searchInput"
import "./shoppingCart.scss"

const ShoppingCart = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className="shopping-cart">
      <span className="shopping-cart__title">Add to cart:</span>
      <SearchInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}

export default ShoppingCart
