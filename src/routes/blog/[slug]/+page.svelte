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
	<meta property="og:url" content={meta.coverImage} />
	<meta property="og:type" content="article" />
	<meta name="twitter:site" content="@alperreha" />
	<meta name="twitter:creator" content="@alperreha" />
</svelte:head>

<svelte:component this={content} />
