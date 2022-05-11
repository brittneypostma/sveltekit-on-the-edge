import type { Context } from "netlify:edge"

export const get = async (event, context: Context) => {
  const local = context
  console.log(event.platform)
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