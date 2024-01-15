import { ShopType } from "../../common/types/shops"
import { ShopsAction } from "../actions/shops"
import {
  FETCH_SHOPS,
  FETCH_SHOPS_ERROR,
  FETCH_SHOPS_SUCCESS,
} from "../constants/shops"
import { RootState } from "../../app/store"

export type ShopsInitialState = {
  shopsList: ShopType[]
  loading: boolean
  error: boolean
}

const initialState: ShopsInitialState = {
  shopsList: [],
  loading: false,
  error: false,
}

const shops = (
  state = initialState,
  { type, payload }: ShopsAction,
): ShopsInitialState => {
  switch (type) {
    case FETCH_SHOPS:
      return { ...state, loading: true }
    case FETCH_SHOPS_SUCCESS:
      return { ...state, loading: false, shopsList: payload as ShopType[] }
    case FETCH_SHOPS_ERROR:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export const selectShopsList = (state: RootState): ShopType[] =>
  state.shops.shopsList

export const selectShopByID = (
  state: RootState,
  id: string,
): ShopType | undefined => {
  const shopsList = selectShopsList(state)
  return shopsList?.find(
    (shop: ShopType) => shop.id.toLowerCase() === id.toLowerCase(),
  )
}

export default shops
