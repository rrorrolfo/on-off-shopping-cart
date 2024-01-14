import { useState, useEffect } from "react"

import Input from "./components/Input"
import SelectInput from "./components/selectInput"
import Button from "./components/button"
import "./shoppingCart.sass"

import { selectShopsList } from "../../store/reducers/shops"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchShops } from "../../store/actions/shops"
import { generateIDAndAddProductToCart } from "../../store/actions/shoppingCart"

const ShoppingCart = () => {
  const dispatch = useAppDispatch()

  const [productName, setProductName] = useState("")
  const [selectedShop, setShop] = useState("")
  const shopsList = useAppSelector(selectShopsList)

  useEffect(() => {
    dispatch(fetchShops())
  }, [])
  return (
    <div className="shopping-cart">
      <span className="shopping-cart__title">Add to cart:</span>
      <Input
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <SelectInput
        options={shopsList}
        value={selectedShop}
        onChange={(e) => setShop(e.target.value)}
      />
      <Button
        onClick={() => {
          dispatch(
            generateIDAndAddProductToCart({
              name: productName,
              shop: selectedShop,
            }),
          )
        }}
      >
        Add
      </Button>
    </div>
  )
}

export default ShoppingCart
