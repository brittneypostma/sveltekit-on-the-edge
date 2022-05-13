/** @type {import('./index').RequestHandler} */
export function get(event) {
  const ctx = event?.platform?.context
	return {
		body: {
			ctx
		}
	};
}