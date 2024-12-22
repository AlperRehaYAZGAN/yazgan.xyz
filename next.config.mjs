import bundleAnalyzer from '@next/bundle-analyzer';
import createMDX from '@next/mdx';

// import rehypeSanitize from 'rehype-sanitize';
// import rehypeStringify from 'rehype-stringify';
// import remarkGfm from 'remark-gfm';
// import remarkParse from 'remark-parse';
// import remarkRehype from 'remark-rehype';

const withMDX = createMDX({
  // // Add markdown plugins here, as desired
  // options: {
  //   remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
  //   rehypePlugins: [rehypeShiki],
  // },
  // extension: /\.(md|mdx)$/,
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withMDX(
  withBundleAnalyzer({
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },

    // ?markdown
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

    // ?Static build
    images: { unoptimized: true },
    output: 'export',
    basePath: '',

    // ?Sharedbuffers for webcontainer/api
    // async headers() {
    //   return [
    //     {
    //       source: '/',
    //       headers: [
    //         {
    //           key: 'Cross-Origin-Embedder-Policy',
    //           value: 'require-corp',
    //         },
    //         {
    //           key: 'Cross-Origin-Opener-Policy',
    //           value: 'same-origin',
    //         },
    //       ],
    //     },
    //   ];
    // },
  })
);
