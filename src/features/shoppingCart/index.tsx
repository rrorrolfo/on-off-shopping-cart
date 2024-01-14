import { useState, useEffect } from "react"

import Input from "./components/Input"
import SelectInput from "./components/selectInput"
import Button from "./components/button"
import "./shoppingCart.sass"

import { selectShopsList } from "../../store/reducers/shops"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchShops } from "../../store/actions/shops"

const ShoppingCart = () => {
  const dispatch = useAppDispatch()

  const [searchValue, setSearchValue] = useState("")
  const [selectedShop, setShop] = useState("")
  const shopsList = useAppSelector(selectShopsList)

  useEffect(() => {
    dispatch(fetchShops())
  }, [])
  return (
    <div className="shopping-cart">
      <span className="shopping-cart__title">Add to cart:</span>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SelectInput
        options={shopsList}
        value={selectedShop}
        onChange={(e) => setShop(e.target.value)}
      />
      <Button>Add</Button>
    </div>
  )
}

export default ShoppingCart
