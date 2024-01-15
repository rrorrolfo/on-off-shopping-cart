import { addProductToCart, removeProduct } from "../actions/shoppingCart"
import shoppingCartReducer, { ShoppingcartState } from "./shoppingCart"

describe("counter reducer", () => {
  const initialState: ShoppingcartState = {
    products: [],
  }

  const testProduct = {
    name: "Test",
    id: "test-id",
    sortOrder: 1,
    shop: "Test shop",
  }

  it("should handle initial state", () => {
    expect(
      shoppingCartReducer(undefined, {
        type: "unknown",
        payload: testProduct,
      }),
    ).toEqual({
      products: [],
    })
  })

  it("should add a product to the cart", () => {
    const actual = shoppingCartReducer(
      initialState,
      addProductToCart(testProduct),
    )
    expect(actual.products).toEqual([testProduct])
  })

  it("should remove a product from the shopping cart that matches the provided product ID", () => {
    const actual = shoppingCartReducer(
      { products: [testProduct] },
      removeProduct(testProduct),
    )
    expect(actual.products).toEqual([])
  })
})
