import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constants/shoppingCart"
import { ProductType } from "../../common/types/shoppingCart"

type ShoppingcartState = {
  products: ProductType[]
}

const initialState: ShoppingcartState = {
  products: [],
}

const shoppingCart = (
  state = initialState,
  action: { type: string; payload: ProductType },
): ShoppingcartState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] }
    default:
      return state
  }
}

export default shoppingCart
