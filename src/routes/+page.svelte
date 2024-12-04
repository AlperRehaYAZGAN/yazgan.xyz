<script lang="ts">
	import { site } from '$lib/config';
	import { IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-svelte';
	const { data } = $props();
	const posts = data.posts || [];
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta name="keywords" content={site.keywords?.join(', ')} />
	<meta name="author" content={site.author} />

	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:image" content={site.image} />
	<meta property="og:url" content={site.url} />
	<meta property="og:type" content="article" />

	<meta name="twitter:site" content="@alperreha" />
	<meta name="twitter:creator" content="@alperreha" />

	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/favicon.png" />
	<link rel="manifest" href="/manifest.json" />
</svelte:head>

<!-- Main Content -->
<main class="flex flex-col bg-blue-50 p-12">
	<!-- Header -->
	<header class="flex max-w-md justify-center self-center">
		<div class="grid grid-cols-2 items-center justify-center gap-4">
			<div class="flex flex-col">
				<img
					src="https://avatars.githubusercontent.com/u/43668181?s=256&v=4"
					alt="Profile Avatar"
					class="mx-auto mb-4 h-32 w-32 rounded-full"
				/>
			</div>
			<div class="flex flex-col justify-start gap-2">
				<h1 class="text-2xl font-bold text-gray-800">Alper Reha YAZGAN</h1>
				<a href="https://twitter.com/alperreha" target="_blank" rel="noopener" class="text-gray-600"
					>@alperreha</a
				>

				<div class="flex justify-start space-x-4">
					<a
						href="https://linkedin.com/in/alperreha"
						class="text-gray-600 transition-all duration-300 hover:scale-110 hover:text-gray-800"
						rel="noopener"
						target="_blank"
					>
						<IconBrandLinkedin size="1.5rem" />
					</a>
					<a
						href="https://twitter.com/alperreha"
						class="text-gray-600 transition-all duration-300 hover:scale-110 hover:text-gray-800"
						rel="noopener"
						target="_blank"
					>
						<IconBrandTwitter size="1.5rem" />
					</a>
					<a
						href="https://youtube.com/@rehash_dev"
						rel="noopener"
						target="_blank"
						class="text-gray-600 transition-all duration-300 hover:scale-110 hover:text-gray-800"
					>
						<IconBrandYoutube size="1.5rem" />
					</a>
				</div>
			</div>
		</div>
	</header>
</main>

<main class="mx-auto flex max-w-2xl flex-col p-6">
	<!-- Blog Posts -->
	<section class="space-y-4">
		{#each posts as post}
			<article class="group relative">
				<a
					href={`/blog/${post.slug.toLowerCase().replace(/ /g, '-')}`}
					class="relative -mx-4 block rounded p-4 transition-colors group-hover:bg-blue-50/50"
				>
					<div
						class="pointer-events-none absolute inset-0 rounded border border-transparent group-hover:border-blue-500"
					></div>
					<div class="mb-1 flex items-baseline gap-4">
						<time class="text-sm tabular-nums text-gray-500">
							{post.date}
						</time>
						<span class="rounded bg-blue-500 px-2 py-1 text-xs text-white">
							{post.categories}
						</span>
					</div>
					<h2 class="text-xl transition-colors group-hover:text-blue-500">
						{post.title}
					</h2>
				</a>
			</article>
		{/each}
	</section>
</main>
