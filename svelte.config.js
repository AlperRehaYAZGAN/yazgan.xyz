import { transformerCopyButton } from '@rehype-pretty/transformers';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { join } from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
// import remarkToc from 'remark-toc';
// import remarkUnwrapImages from 'remark-unwrap-images';
import { createHighlighter } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			layout: {
				term: join(process.cwd(), 'src/lib/layouts/blog-layout-term.svelte'),
				default: join(process.cwd(), 'src/lib/layouts/blog-layout-default.svelte'),
				_: join(process.cwd(), 'src/lib/layouts/blog-layout-default.svelte')
			},

			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await createHighlighter({
						langs: [
							'bash',
							'go',
							'html',
							'css',
							'js',
							'java',
							'javascript',
							'typescript',
							'json',
							'c',
							'c++',
							'python',
							'c#',
							'php',
							'rust',
							'ruby',
							'docker',
							'dockerfile'
						],
						themes: ['github-dark']
					});
					const html = escapeSvelte(
						highlighter.codeToHtml(code, {
							lang: lang,
							themes: {
								light: 'github-dark',
								dark: 'github-dark'
							},
							transformers: [
								transformerCopyButton({
									visibility: 'always',
									feedbackDuration: 3_000
								})
							]
						})
					);
					return `{@html \`${html}\`}`;
				}
			},
			// remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: ''
		}
	}
};

export default config;
