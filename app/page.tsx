import { IconBook2, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from '@tabler/icons-react';
import {
  Avatar,
  Badge,
  Button,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import BlogPostHomeListItem from '@/components/Blog/BlogPostHomeListItem.component';
import posts from '@/posts/posts.json';

export const metadata = {
  title: 'yazgan.xyz - @alperreha',
  description: 'Alper Reha Yazgan - Personal Website',
};

export default async function HomePage() {
  const postsOrdered = posts.sort(
    (a, b) => new Date(b.published!).getTime() - new Date(a.published!).getTime()
  );

  return (
    <>
      <Container fluid className="border-b-2 bg-gray-50">
        <Container size="md" p="sm">
          <Grid my="lg">
            <GridCol span={{ base: 12, xs: 12, sm: 6 }}>
              <Stack gap="xs">
                <Group justify="flex-start" align="center">
                  <Avatar
                    size="8rem"
                    src="https://avatars.githubusercontent.com/u/43668181?s=256&v=4"
                    radius="16rem"
                    // Use tailwindcss className to make this avatar display like brutalist avatar like shadow blue and hover brutalist animation effect
                    className="shadow-lg border-2 border-blue-500 hover:animate-brutalist"
                  />
                  <Stack gap="xs">
                    <Badge variant="filled" color="blue" size="xl" radius="xs">
                      Alper Reha Yazgan
                    </Badge>
                    <Badge variant="filled" color="black" size="lg" radius="xs">
                      @rehash<span className="animate-pulse">_</span>
                    </Badge>
                  </Stack>
                </Group>
                <Group gap="xs">
                  <Button
                    size="sm"
                    radius="xs"
                    color="blue"
                    // variant="outline"
                    variant="outline"
                    component="a"
                    href="https://linkedin.com/in/alperreha"
                    rel="noopener"
                    target="_blank"
                    rightSection={<IconBrandLinkedin size="1.25rem" stroke={1.5} />}
                  >
                    Linkedin
                  </Button>

                  <Button
                    size="sm"
                    radius="xs"
                    color="red"
                    variant="outline"
                    // variant="default"
                    component="a"
                    href="https://youtube.com/@rehash_dev"
                    rel="noopener"
                    target="_blank"
                    rightSection={<IconBrandYoutube size="1.25rem" stroke={1.5} />}
                  >
                    Youtube
                  </Button>

                  <Button
                    size="sm"
                    radius="xs"
                    color="dark"
                    variant="outline"
                    component="a"
                    href="https://x.com/alperreha"
                    rel="noopener"
                    target="_blank"
                    rightSection={<IconBrandX size="1.25rem" stroke={1.5} />}
                  >
                    X
                  </Button>
                </Group>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, xs: 12, sm: 6 }}>
              <Stack gap="xs">
                <Text
                  size="lg"
                  fw="bold"
                  c="blue.6"
                  // font is mono and text line height is low
                  // underline on hover with left to right underline animation
                  className="font-mono leading-4 hover:underline"
                >
                  About
                </Text>

                <Text
                  size="sm"
                  c="gray.8"
                  // font is mono and text line height is low
                  className="font-mono leading-4"
                >
                  Hello, I'm Alper Reha. I am a software engineer who mainly focused backend and
                  devops technologies. I love to build websites using Next.js and TailwindCSS. I am
                  also a fan of brutalist design.
                </Text>
              </Stack>
            </GridCol>
          </Grid>
        </Container>
      </Container>
      <Container size="md" p="sm" mb="16rem">
        <Grid>
          <GridCol span={{ base: 12, xs: 12, sm: 12 }}>
            <Stack gap="xs">
              <Group justify="space-between" align="center">
                <Badge
                  leftSection={<IconBook2 size="1.25rem" stroke={1.5} />}
                  variant="light"
                  color="blue"
                  size="xl"
                  radius="xs"
                >
                  Posts
                </Badge>

                <Text size="sm" c="gray">
                  {postsOrdered.length} posts
                </Text>
              </Group>
              <Divider />
              {postsOrdered.map((post) => (
                <BlogPostHomeListItem key={`main-blog-item-${post.slug}`} {...post} />
              ))}

              {/* <ColorSchemeToggle /> */}
            </Stack>
          </GridCol>
        </Grid>
      </Container>
    </>
  );
}
