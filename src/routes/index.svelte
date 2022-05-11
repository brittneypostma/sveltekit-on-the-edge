<!-- <script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/event');
		const event = await res.json();
    console.log(event)
		return {
			props: {
				event
			}
		};
	}
</script> -->
<script>
	export let event;
</script>

{JSON.stringify(event, null, 2)}
