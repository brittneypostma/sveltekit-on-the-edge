<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/api/log');

		return {
			props: {
				response
			}
		};
	}
</script>

<script>
	export let response;
</script>

{JSON.stringify(response)}
