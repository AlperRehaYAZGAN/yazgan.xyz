import { readFileSync } from 'fs';
import { join } from 'path';
import rehypeShiki from '@shikijs/rehype';
import { IconFile } from '@tabler/icons-react';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import {
  Card,
  CardSection,
  Group,
  Space,
  Text,
  Title,
  TypographyStylesProvider,
} from '@mantine/core';
import posts from '@/posts/posts.json';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return (
    posts
      .map((post) => ({
        slug: post.slug,
        published: post.published || null,
      }))
      // sort by created also
      .sort((a, b) => new Date(b.published!).getTime() - new Date(a.published!).getTime())
  );
}

export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const metadata = posts.find((post) => post.slug === slug);
  return metadata;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function BlogContentPage({ params }: any) {
  const { slug } = await params;

  const content = readFileSync(join(process.cwd(), 'posts', `${slug}.mdx`), 'utf8');
  const metadata = posts.find((post) => post.slug === slug);

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
    <>
      <Group>
        <Title
          p="xs"
          ta="center"
          order={1}
          className="leading-8 bg-blue-500 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
        >
          {metadata?.title}
        </Title>
      </Group>

      <Group align="flex-start">
        <Text size="sm" mt="sm">
          {metadata?.description}
        </Text>
      </Group>

      <Space h="md" />

      <Card
        withBorder
        radius="md"
        shadow="md"
        // make neubrutalism like card hover shadow effect and normal color id blue
        className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
      >
        <CardSection withBorder className="bg-blue-50 border-b-2">
          <Group justify="space-between" align="center" p="sm" gap="xs">
            <Group className="border-gray-400 border-1" gap="xs">
              <IconFile size="1.25rem" stroke={1.5} />
              content.md
            </Group>
            <Text size="sm">{metadata?.published}</Text>
          </Group>
        </CardSection>
        <Space h="sm" />
        <TypographyStylesProvider>
          <div dangerouslySetInnerHTML={{ __html: String(file) }} />
        </TypographyStylesProvider>
      </Card>
    </>
  );
}
