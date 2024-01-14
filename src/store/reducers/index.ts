import { combineReducers } from "redux"
import shoppingCart from "./shoppingCart"
import shops from "./shops"

const rootReducer = combineReducers({
  shops,
  shoppingCart,
})

export default rootReducer
