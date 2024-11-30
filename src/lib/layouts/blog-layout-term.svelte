<script>
	import WebContainerJS from '$lib/components/webcontainers/WebContainerJS.svelte';
	let { children, data } = $props();
</script>

<div class="flex bg-blue-50 p-4">
	<a href="/" class="text-lg font-bold text-blue-500 underline hover:underline hover:decoration-2">
		← Go back to home
	</a>
</div>
<!-- <main class="mx-auto flex max-w-4xl flex-col items-center">
	<article class="prose bg-slate-50 lg:prose-xl">
		{@render children()}
	</article>
</main> -->
<div class="grid grid-cols-2 justify-items-stretch">
	<main class="p-4">
		<article class="prose bg-slate-50 lg:prose-xl">
			{@render children()}
		</article>
	</main>
	<div class="min-h-[calc(100vh-10rem)] w-full bg-gray-900">
		<WebContainerJS />
	</div>
</div>
