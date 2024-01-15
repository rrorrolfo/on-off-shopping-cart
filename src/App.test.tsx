import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"

test("Renders App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  const appElement = screen.getByTestId("app-container")
  expect(appElement).toBeInTheDocument()
})
