import { useState, useEffect } from "react"

import Input from "./components/Input"
import SelectInput from "./components/selectInput"
import Button from "./components/button"
import ProductsTable from "./components/productsTable"
import "./shoppingCart.sass"

import { selectShopsList } from "../../store/reducers/shops"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchShops } from "../../store/actions/shops"
import { generateIDAndAddProductToCart } from "../../store/actions/shoppingCart"
import { selectProductsInCart } from "../../store/reducers/shoppingCart"

const ShoppingCart = () => {
  const dispatch = useAppDispatch()

  const [productName, setProductName] = useState("")
  const [selectedShop, setShop] = useState("")
  const shopsList = useAppSelector(selectShopsList)
  const productsInCart = useAppSelector(selectProductsInCart)

  useEffect(() => {
    dispatch(fetchShops())
  }, [])
  return (
    <div className="shopping-cart">
      <div className="shopping-cart__inputs-container">
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
      <ProductsTable products={productsInCart} />
    </div>
  )
}

export default ShoppingCart
