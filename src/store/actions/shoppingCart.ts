import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constants/shoppingCart"
import { ProductType } from "../../common/types/shoppingCart"
import { AppThunk } from "../../app/store"

type ProductTypeWithoutID = Omit<ProductType, "id">

export const addProductToCart = (product: ProductType) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}

export const removeProduct = (product: ProductType) => {
  return {
    type: REMOVE_PRODUCT,
    payload: product,
  }
}

export const addProductWithoutIDToCart =
  (product: ProductTypeWithoutID): AppThunk =>
  (dispatch) => {
    const { name, shop } = product
    const newID = `${name}-${shop}-${Math.ceil(Math.random() * 1000)}`

    dispatch(
      addProductToCart({
        ...product,
        id: String(newID),
      }),
    )
  }

export const removeProductFromCart =
  (product: ProductType): AppThunk =>
  (dispatch) => {
    dispatch(removeProduct(product))
  }
