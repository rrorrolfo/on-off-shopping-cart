import axios, { AxiosResponse } from "axios"
import { ShopType } from "../common/types/shops"

export const fetchShopsList = async (): Promise<ShopType[]> =>
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
