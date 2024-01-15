import { useState, useEffect } from "react"

import Input from "../../common/components/Input"
import SelectInput from "../../common/components/selectInput"
import Button from "../../common/components/button"
import ProductsTable from "./components/productsTable"
import "./shoppingCart.sass"

import {
  selectShopsState,
  selectShopsList,
  selectShopByID,
} from "../../store/reducers/shops"
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
  const selectedShopData = useAppSelector((state) =>
    selectShopByID(state, selectedShop),
  )
  const shopsState = useAppSelector(selectShopsState)
  const validProductName = productName.length > 0
  const hasShopSelected = selectedShop.length > 0

  const handleAddClick = () => {
    if (validProductName && hasShopSelected) {
      dispatch(
        addProductWithoutIDToCart({
          name: productName,
          shop: selectedShop,
          sortOrder: selectedShopData ? selectedShopData.sortOrder : 0,
        }),
      )
    }
  }

  const handleDeleteClick = (product: ProductType) =>
    dispatch(removeProductFromCart(product))

  const defineSelectErrorMessage = () => {
    const { loading, error } = shopsState
    if (loading) {
      return "Loading Shops"
    }

    if (error) {
      return "There was an error, please refresh the page"
    }

    return "You must select a shop"
  }

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
          id="product-search-input"
          name="product-search-input"
          placeholder="Name"
        />
        <SelectInput
          options={shopsList}
          value={selectedShop}
          onChange={(e) => setShop(e.target.value)}
          invalid={!hasShopSelected}
          showError={!hasShopSelected}
          errorMessage={defineSelectErrorMessage()}
          className="shops-select"
          id="shops-select"
          name="shops-select"
        />
        <Button
          onClick={handleAddClick}
          name="add-button"
          className="add-button"
        >
          Add
        </Button>
      </div>
      <ProductsTable
        products={productsInCart}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  )
}

export default ShoppingCart
