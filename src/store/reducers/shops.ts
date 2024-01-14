import { ShopType } from "../../common/types/shops"
import { ShopsAction } from "../actions/shops"
import {
  FETCH_SHOPS,
  FETCH_SHOPS_ERROR,
  FETCH_SHOPS_SUCCESS,
} from "../constants/shops"

type InitialState = {
  shops: ShopType[]
  loading: boolean
  error: boolean
}

const initialState: InitialState = {
  shops: [],
  loading: false,
  error: false,
}

const shops = (
  state = initialState,
  { type, payload }: ShopsAction,
): InitialState => {
  switch (type) {
    case FETCH_SHOPS:
      return { ...state, loading: true }
    case FETCH_SHOPS_SUCCESS:
      return { ...state, loading: false, shops: payload as ShopType[] }
    case FETCH_SHOPS_ERROR:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default shops
