import type { Context } from "netlify:edge"

export const get = async (event, context: Context) => {
  const local = context
  console.log(decodeURIComponent(event.request.headers.get("Authorization")), local)
  return {
    body: {
      ip: "ip",
      // city: decodeURIComponent(event.request.headers.get("")),
      // ip: event.clientAddress,
      // city: decodeURIComponent((event.request.headers.get('Date'))
      // )
    }
  }
}