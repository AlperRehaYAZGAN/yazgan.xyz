<script lang="ts">
	const { data } = $props();
	const { meta, content } = data;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.coverImage} />
	<meta property="og:image:width" content={meta.coverWidth} />
	<meta property="og:image:height" content={meta.coverHeight} />
	<meta property="og:url" content={`https://sveltekit-blog.vercel.app/blog/${meta.slug}`} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={meta.date} />
	<meta property="article:modified_time" content={meta.updated} />
	<meta property="article:author" content="https://twitter.com/shortdiv" />
	<meta property="article:section" content={meta.categories.join(', ')} />
	<meta property="article:tag" content={meta.categories.join(', ')} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@shortdiv" />
	<meta name="twitter:creator" content="@shortdiv" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image" content={meta.coverImage} />
	<meta name="twitter:image:width" content={meta.coverWidth} />
	<meta name="twitter:image:height" content={meta.coverHeight} />
	<meta name="twitter:url" content={`https://sveltekit-blog.vercel.app/blog/${meta.slug}`} />
</svelte:head>

<svelte:component this={content} />
