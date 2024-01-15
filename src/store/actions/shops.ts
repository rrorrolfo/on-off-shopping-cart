import {
  FETCH_SHOPS,
  FETCH_SHOPS_SUCCESS,
  FETCH_SHOPS_ERROR,
} from "../constants/shops"
import { fetchShopsList } from "../../api/requests"
import { ShopType } from "../../common/types/shops"
import { AppThunk } from "../../app/store"

export type ShopsAction = {
  type: string
  payload?: ShopType[]
}

export const fetchShopsStarted = (): ShopsAction => {
  return {
    type: FETCH_SHOPS,
  }
}

export const fetchShopsSuccess = (shopsList: ShopType[]): ShopsAction => {
  return {
    type: FETCH_SHOPS_SUCCESS,
    payload: shopsList,
  }
}

export const fetchShopsError = (): ShopsAction => {
  return {
    type: FETCH_SHOPS_ERROR,
  }
}

export const fetchShops = (): AppThunk => async (dispatch) => {
  dispatch(fetchShopsStarted())

  try {
    const shopsList = await fetchShopsList()
    dispatch(fetchShopsSuccess(shopsList))
  } catch (error) {
    dispatch(fetchShopsError())
  }
}
