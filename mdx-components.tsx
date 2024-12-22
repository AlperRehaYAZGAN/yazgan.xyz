import { ImageProps } from 'next/image';
import type { MDXComponents } from 'mdx/types';
import { CodeHighlight } from '@mantine/code-highlight';
import { AspectRatio, Code, Image, List, ListItem, Text, Title } from '@mantine/core';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const otherComponents: MDXComponents = {
  h1: ({ children }: any) => <Title order={1}>{children}</Title>,
  h2: ({ children }: any) => <Title order={2}>{children}</Title>,
  h3: ({ children }: any) => <Title order={3}>{children}</Title>,
  h4: ({ children }: any) => <Title order={4}>{children}</Title>,
  h5: ({ children }: any) => <Title order={5}>{children}</Title>,
  h6: ({ children }: any) => <Title order={6}>{children}</Title>,
  img: (props: any) => (
    <AspectRatio ratio={16 / 9}>
      <Image style={{ height: 'auto' }} {...(props as ImageProps)} />
    </AspectRatio>
  ),
  p: (props: any) => (
    <Text size="sm" fw="lighter">
      {props.children}
    </Text>
  ),
  a: (props: any) => <a {...props} target="_blank" rel="noopener noreferrer" />,
  ul: (props: any) => (
    <List spacing="xs" size="sm" withPadding center>
      {props.children}
    </List>
  ),
  ol: (props: any) => (
    <List type="ordered" spacing="xs" size="sm" withPadding center>
      {props.children}
    </List>
  ),
  li: (props: any) => <ListItem>{props.children}</ListItem>,
  code: (props: any) =>
    props.children?.trim()?.split('\n')?.length === 1 ? (
      <Code {...props} />
    ) : (
      <CodeHighlight
        code={`${props.children}`}
        copyLabel="Copy button code"
        copiedLabel="Copied!"
        withCopyButton
      />
    ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    ...otherComponents,
    ...components,
  };
}
