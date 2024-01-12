import { useState } from "react"

import SearchInput from "./components/searchInput"
import SelectInput from "./components/selectInput"
import "./shoppingCart.scss"

const ShoppingCart = () => {
  const [searchValue, setSearchValue] = useState("")
  const [selectedShop, setShop] = useState("")
  return (
    <div className="shopping-cart">
      <span className="shopping-cart__title">Add to cart:</span>
      <SearchInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SelectInput
        options={[]}
        value={selectedShop}
        onChange={(e) => setShop(e.target.value)}
      />
    </div>
  )
}

export default ShoppingCart
