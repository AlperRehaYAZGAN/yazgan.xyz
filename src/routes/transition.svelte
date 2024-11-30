<script lang="ts">
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';

	let { children, url } = $props();
</script>

{#key url}
	<div class="h-full" in:fade>
		{@render children()}
	</div>
{/key}
