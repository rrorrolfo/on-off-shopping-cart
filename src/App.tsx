import ShoppingCart from "./features/shoppingCart"
import "./App.sass"

function App() {
  return (
    <div className="App" data-testid="app-container">
      <ShoppingCart />
    </div>
  )
}

export default App
