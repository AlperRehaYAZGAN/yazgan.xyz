<script>
	import Theme from '$lib/theme/Theme.svelte';
	import Transition from './transition.svelte';
	import '../app.css';

	let { children, data } = $props();
</script>

<div class="min-h-screen bg-white">
	<!-- Top Banner -->
	<div
		class="flex flex-row items-center justify-center gap-4 bg-gray-900 px-4 py-2 text-center text-sm text-gray-200 dark:bg-gray-100"
	>
		<span class="inline-flex items-center gap-2 text-wrap">
			<span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
			yazgan.xyz - Alper Reha Yazgan personal blog
		</span>
		<span class="inline-flex">
			<Theme />
		</span>
	</div>

	<Transition url={data.url}>
		{@render children()}
	</Transition>

	<main class="mx-auto flex flex-col content-center items-center justify-center border-t-2">
		<!-- Footer -->
		<footer class="flex max-w-md border-gray-200 pt-8 text-center text-sm text-gray-500">
			<p>
				u can find me on
				<a href="https://github.com/AlperRehaYAZGAN" class="text-blue-500 hover:underline">GitHub</a
				>
				and
				<a href="https://twitter.com/alperreha" class="text-blue-500 hover:underline">X</a>
			</p>
		</footer>
	</main>
</div>
