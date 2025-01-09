import { readFileSync } from 'fs';
import { join } from 'path';
import rehypeShiki from '@shikijs/rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { Group, Stack, Title, TypographyStylesProvider } from '@mantine/core';
import posts from '@/posts/posts';

const MINHEIGHT = 'calc(100vh - 6rem)';


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
    published: post.published || null,
  }))
  .sort((a, b) => new Date(b.published!).getTime() - new Date(a.published!).getTime());
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const metadata = posts.find((post) => post.slug === slug);
  return metadata;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function PlaygroundContentPage({ params }: any) {
  const { slug } = await params;

  // const BlogPost = (await import(`@/posts/${slug}.mdx`)).default;
  // const metadata = (await import(`@/posts/${slug}.mdx`)).metadata;
  const metadata = posts.find((post) => post.slug === slug);

  const content = readFileSync(join(process.cwd(), 'posts', `${slug}.mdx`), 'utf8');

  const file = await unified()
    .use(remarkGfm) // Convert GitHub Flavored Markdown
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeSanitize) // Sanitize HTML input
    // .use(rehypeShiki, { theme: 'github-dark' })
    .use(rehypeStringify) // Convert AST into serialized HTML
    .use(rehypeShiki, {
      // or `theme` for a single theme
      themes: {
        light: 'one-light',
        dark: 'one-dark-pro',
      },
      transformers: [
        {
          name: 'border-black',
          pre(node) {
            const cx =
              'border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200';

            this.addClassToHast(node, cx);
          },
        },
      ],
    })
    .process(content);

  return (
    <Stack
      p="lg"
      mah={MINHEIGHT}
      style={{
        overflow: 'hidden',
        overflowY: 'auto',
      }}
    >
      <Group>
        <Title
          p="xs"
          bg="blue"
          c="white"
          ta="center"
          order={1}
          // line height is low
          className="leading-8"
        >
          {metadata?.title}
        </Title>
      </Group>
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: String(file) }} />
      </TypographyStylesProvider>
    </Stack>
  );
}
