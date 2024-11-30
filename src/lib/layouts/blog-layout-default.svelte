<script>
	let { children, data } = $props();
</script>

<div class="flex bg-blue-50 p-4">
	<a href="/" class="text-lg font-bold text-blue-500 underline hover:underline hover:decoration-2">
		← Go back to home
	</a>
</div>
<main class="mx-auto flex max-w-4xl flex-col items-center min-h-[calc(100vh-10rem)] bg-slate-50">
	<article class="prose p-4 lg:prose-xl">
		{@render children()}
	</article>
</main>

<style>
</style>
