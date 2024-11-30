<script>
	let { children, data } = $props();
</script>

<svelte:head>
	<script src="/enable-threads.js"></script>
</svelte:head>

{@render children()}
