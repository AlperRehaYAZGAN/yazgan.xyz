<script>
	import '../app.css';
	import Transition from './transition.svelte';

	import { site } from '$lib/config';

	let { children, data } = $props();
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta name="keywords" content={site.keywords?.join(', ')} />
	<meta name="author" content={site.author} />

	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.coverImage} />
	<meta property="og:image:width" content={meta.coverWidth} />
	<meta property="og:image:height" content={meta.coverHeight} />
	<meta property="og:url" content={meta.coverImage} />
	<meta property="og:type" content="article" />

	<meta name="twitter:site" content="@alperreha" />
	<meta name="twitter:creator" content="@alperreha" />

	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/favicon.png" />
	<link rel="manifest" href="/manifest.json" />
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Top Banner -->
	<div
		class="flex flex-row items-center justify-center gap-4 bg-gray-900 px-4 py-2 text-center text-sm text-gray-200"
	>
		<span class="inline-flex items-center gap-2 text-wrap">
			<span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
			yazgan.xyz - Alper Reha Yazgan personal blog
		</span>
		<!-- <span class="inline-flex">
			<Theme />
		</span> -->
	</div>

	<Transition url={data.url}>
		{@render children()}
	</Transition>

	<main class="mx-auto flex flex-col content-center items-center justify-center border-t-2">
		<!-- Footer -->
		<footer class="flex max-w-md border-gray-200 pt-4 text-center text-sm text-gray-500">
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
