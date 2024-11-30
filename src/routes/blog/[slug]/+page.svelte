<script lang="ts">
	export let data;
	/* 
			{
  "meta": {
    "title": "2222 A Markdown post with a Svelte component",
    "description": "second post",
    "slug": "2-heading-sample2",
    "published": true,
    "date": "2023-04-30",
    "updated": "2023-04-30",
    "categories": [
      "sveltekit",
      "markdown",
      "svelte"
    ],
    "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
    "coverWidth": 16,
    "coverHeight": 9,
    "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post."
  }
}
	*/
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={data.meta.coverImage} />
	<meta property="og:image:width" content={data.meta.coverWidth} />
	<meta property="og:image:height" content={data.meta.coverHeight} />
	<meta property="og:url" content={`https://sveltekit-blog.vercel.app/blog/${data.meta.slug}`} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={data.meta.date} />
	<meta property="article:modified_time" content={data.meta.updated} />
	<meta property="article:author" content="https://twitter.com/shortdiv" />
	<meta property="article:section" content={data.meta.categories.join(', ')} />
	<meta property="article:tag" content={data.meta.categories.join(', ')} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@shortdiv" />
	<meta name="twitter:creator" content="@shortdiv" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:image" content={data.meta.coverImage} />
	<meta name="twitter:image:width" content={data.meta.coverWidth} />
	<meta name="twitter:image:height" content={data.meta.coverHeight} />
	<meta name="twitter:url" content={`https://sveltekit-blog.vercel.app/blog/${data.meta.slug}`} />
	<meta name="twitter:label1" content="Written by" />
	<meta name="twitter:data1" content="alperreha" />
	<meta name="twitter:label2" content="Filed under" />
	<meta name="twitter:data2" content={data.meta.categories.join(', ')} />
	<meta name="twitter:label3" content="Published on" />
	<meta name="twitter:data3" content={data.meta.date} />
	<meta name="twitter:label4" content="Updated on" />
	<meta name="twitter:data4" content={data.meta.updated} />
</svelte:head>

<!-- Main Content -->
<main class="flex w-full flex-col p-8">
	<!-- Header -->
	<div class="prose lg:prose-xl">
		<svelte:component this={data.content} />
	</div>
</main>
