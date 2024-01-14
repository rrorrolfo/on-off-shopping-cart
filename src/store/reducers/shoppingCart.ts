import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constants/shoppingCart"
import { ProductType } from "../../common/types/shoppingCart"
import { RootState } from "../../app/store"

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
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter(
            (product) => product.id !== action.payload.id,
          ),
        ],
      }
    default:
      return state
  }
}

export const selectProductsInCart = (state: RootState): ProductType[] =>
  state.shoppingCart.products

export default shoppingCart
