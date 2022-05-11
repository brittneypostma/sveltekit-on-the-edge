<!-- <script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/api/local');

		return {
			props: {
				response
			}
		};
	}
</script> -->
<script>
	// export let response;
	export let ip;
</script>

<!-- {JSON.stringify(response)} -->
{JSON.stringify(ip, null, 2)}
