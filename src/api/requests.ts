import axios, { AxiosResponse } from "axios"
import { ShopType } from "../features/shoppingCart/types"

export const fetchShopsList = async (): Promise<ShopType[] | undefined> =>
  axios
    .get("/data/shops.json")
    .then((res: AxiosResponse) => res.data)
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.error("Axios error while fetching shops:", error.message)
      } else {
        console.error("General error while fetching shops:", error.message)
      }
      throw error
    })
