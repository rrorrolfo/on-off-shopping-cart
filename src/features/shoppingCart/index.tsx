import { useState, useEffect } from "react"

import Input from "./components/Input"
import SelectInput from "./components/selectInput"
import Button from "./components/button"
import ProductsTable from "./components/productsTable"
import "./shoppingCart.sass"

import { selectShopsList } from "../../store/reducers/shops"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchShops } from "../../store/actions/shops"
import {
  addProductWithoutIDToCart,
  removeProductFromCart,
} from "../../store/actions/shoppingCart"
import { selectProductsInCart } from "../../store/reducers/shoppingCart"
import { ProductType } from "../../common/types/shoppingCart"

const ShoppingCart = () => {
  const [productName, setProductName] = useState("")
  const [selectedShop, setShop] = useState("")

  const dispatch = useAppDispatch()
  const shopsList = useAppSelector(selectShopsList)
  const productsInCart = useAppSelector(selectProductsInCart)
  const validProductName = productName.length > 0
  const hasShopSelected = selectedShop.length > 0

  const handleAddClick = () => {
    if (validProductName && hasShopSelected) {
      dispatch(
        addProductWithoutIDToCart({
          name: productName,
          shop: selectedShop,
        }),
      )
    }
  }

  const handleDeleteClick = (product: ProductType) =>
    dispatch(removeProductFromCart(product))

  useEffect(() => {
    dispatch(fetchShops())
  }, [])

  return (
    <div className="shopping-cart">
      <span className="shopping-cart__title">Add to cart:</span>
      <div className="shopping-cart__inputs-container">
        <Input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          invalid={!validProductName}
          showError={!validProductName}
          errorMessage="Product name cannot be empty"
        />
        <SelectInput
          options={shopsList}
          value={selectedShop}
          onChange={(e) => setShop(e.target.value)}
        />
        <Button onClick={handleAddClick}>Add</Button>
      </div>
      <ProductsTable
        products={productsInCart}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  )
}

export default ShoppingCart
