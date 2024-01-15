import { ShopType } from "../../common/types/shops"
import {
  fetchShopsStarted,
  fetchShopsSuccess,
  fetchShopsError,
} from "../actions/shops"
import shopsReducer, { ShopsInitialState } from "./shops"

describe("counter reducer", () => {
  const initialState: ShopsInitialState = {
    shopsList: [],
    loading: false,
    error: false,
  }

  const testShopsList: ShopType[] = [
    {
      name: "Maxima",
      id: "maxima",
      sortOrder: 1,
    },
    {
      name: "Rimi",
      id: "rimi",
      sortOrder: 2,
    },
  ]

  it("should handle initial state", () => {
    expect(
      shopsReducer(undefined, {
        type: "unknown",
      }),
    ).toEqual({
      shopsList: [],
      loading: false,
      error: false,
    })
  })

  it("Should set the loading state to true", () => {
    const actual = shopsReducer(initialState, fetchShopsStarted())
    expect(actual).toEqual({ shopsList: [], loading: true, error: false })
  })

  it("Should add a list of retrieved shops to state and set Loading state to false", () => {
    const actual = shopsReducer(initialState, fetchShopsSuccess(testShopsList))
    expect(actual).toEqual({
      shopsList: testShopsList,
      loading: false,
      error: false,
    })
  })

  it("Should set error state to true and set loading state to false", () => {
    const actual = shopsReducer(initialState, fetchShopsError())
    expect(actual).toEqual({ shopsList: [], loading: false, error: true })
  })
})
