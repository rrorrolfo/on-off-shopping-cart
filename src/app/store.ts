import thunk, { ThunkAction } from "redux-thunk"
import {
  legacy_createStore as createStore,
  applyMiddleware,
  Store,
  Action,
} from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import rootReducer from "../store/reducers"

export const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
