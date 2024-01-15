import { http, HttpResponse } from "msw"

export const handlers = [
  http.get("/data/shops.json", () => {
    return HttpResponse.json([
      {
        id: "maxima",
        name: "Maxima",
        sortOrder: 3,
      },
      {
        id: "rimi",
        name: "Rimi",
        sortOrder: 1,
      },
      {
        id: "selver",
        name: "Selver",
        sortOrder: 2,
      },
    ])
  }),
]
