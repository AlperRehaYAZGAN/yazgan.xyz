<script>
	let { children, data } = $props();
	// https://github.com/orgs/community/discussions/13309
</script>

<svelte:head>
	<script src="/enable-threads.js"></script>
</svelte:head>

{@render children()}
