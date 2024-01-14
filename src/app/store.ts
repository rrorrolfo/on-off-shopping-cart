import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk"
import {
  legacy_createStore as createStore,
  applyMiddleware,
  Store,
  Action,
  AnyAction,
} from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import rootReducer from "../store/reducers"

export const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>
