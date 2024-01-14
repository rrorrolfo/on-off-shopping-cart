import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constants/shoppingCart"
import { ProductType } from "../../common/types/shoppingCart"
import { AppThunk } from "../../app/store"

type ProductTypeWithoutID = Omit<ProductType, "id">

const addProductToCart = (product: ProductType) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}

export const generateIDAndAddProductToCart =
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
