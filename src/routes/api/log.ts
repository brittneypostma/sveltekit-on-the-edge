import type { Context } from "netlify:edge";

export const get = async (request: Request, context: Context, res) => {
  console.log(context)

  // return new Response("The request to this URL was logged", {
  //   headers: { "content-type": "text/html" },
  // });
  return {
    body: context
  }
};

export default get