import { useState } from "react"

import Input from "./components/Input"
import SelectInput from "./components/selectInput"
import Button from "./components/button"
import "./shoppingCart.sass"

const ShoppingCart = () => {
  const [searchValue, setSearchValue] = useState("")
  const [selectedShop, setShop] = useState("")
  return (
    <div className="shopping-cart">
      <span className="shopping-cart__title">Add to cart:</span>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SelectInput
        options={[]}
        value={selectedShop}
        onChange={(e) => setShop(e.target.value)}
      />
      <Button>Add</Button>
    </div>
  )
}

export default ShoppingCart
