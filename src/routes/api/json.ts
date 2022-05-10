import type { Context } from "netlify:edge";

export const get = async (request: Request, context: Context) => {
  const res = context.json({ hello: "world" })
  console.log(res, context)
  return {
    body: "world"
  }
};