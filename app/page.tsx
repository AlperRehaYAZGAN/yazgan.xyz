import {
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconCode,
  IconUniverse,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
} from '@mantine/core';
import BlogPostHomeListItem from '@/components/Blog/BlogPostHomeListItem.component';
import posts from '@/posts/posts';

export const metadata = {
  title: 'yazgan.xyz - @alperreha',
  description: 'Alper Reha Yazgan - Personal Website',
};

export default async function HomePage() {
  // post.type is ["blog","webcontainer", "snippet", "project"] so aggregate them and show them in different sections
  const postByTypes = posts.reduce((acc: any, post) => {
    if (!acc?.[post?.type]) {
      acc[post.type] = [];
    }
    acc?.[post?.type].push(post);
    return acc;
  }, {});

  // order posts after aggregation
  const postByTypesOrdered = Object.keys(postByTypes).reduce((acc: any, type: string) => {
    acc[type] = postByTypes[type].sort((a: any, b: any) => {
      return new Date(b?.published).getTime() - new Date(a?.published).getTime();
    });
    return acc;
  }, {});

  // get courses, snippets, blogs
  const courses = postByTypesOrdered?.course || [];
  // every course has a "course.categories: ["",""]" so we can filter them and show them in different sections
  // const courseCategories: string[] = courses.reduce((acc: any, course: any) => {
  //   course.categories.forEach((category: string) => {
  //     if (!acc?.[category]) {
  //       acc[category] = [];
  //     }
  //     acc[category].push(course);
  //   });
  //   return acc;
  // }, {});
  // const courseCategoriesFlat = Object.keys(courseCategories).flat();
  const snippets = postByTypesOrdered?.snippet || [];
  // const snippetsCategories = snippets.reduce((acc: any, snippet: any) => {
  //   snippet.categories.forEach((category: string) => {
  //     if (!acc?.[category]) {
  //       acc[category] = [];
  //     }
  //     acc[category].push(snippet);
  //   });
  //   return acc;
  // }, {});
  // const snippetsCategoriesFlat = Object.keys(snippetsCategories).flat();

  // const iconStyle = { width: '1.5rem', height: '1.5rem' };

  return (
    <>
      <Container fluid className="border-b-2">
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
                  Hello 👋, I'm alperreha. I am a software engineer who mainly focused fullstack
                  development and worked devops technologies before. I love to build web services,
                  apps and ai powered tools using Go-Rust empowered backends and Next.js-TailwindCSS
                  frontends. I am also a holigan of brutalist design.
                </Text>
                <Text
                  size="sm"
                  c="gray.6"
                  // font is mono and text line height is low
                  className="font-mono leading-4"
                >
                  This page contains my development stuff 🔥 🚀 <br />
                  I write personal stories on my blog below. 👇🏻
                  <br />
                  <Anchor target="_blank" rel="noreferrer" href="https://alperreha.yazgan.xyz">
                    alperreha.yazgan.xyz
                  </Anchor>
                </Text>
              </Stack>
            </GridCol>
          </Grid>
        </Container>
      </Container>
      <Container size="md" p="sm" mb="16rem">
        <Grid>
          <GridCol span={{ base: 12, xs: 12, sm: 12 }}>
            <Tabs variant="default" defaultValue="courses">
              <TabsList>
                <TabsTab
                  value="courses"
                  leftSection={
                    <ActionIcon variant="transparent" component="span" color="dark" size="sm">
                      {/* <IconTerminal2 style={iconStyle} /> */}
                      <IconCode />
                    </ActionIcon>
                  }
                  rightSection={
                    <Badge variant="light" color="blue" size="lg" radius="xl">
                      {courses.length}
                    </Badge>
                  }
                >
                  Posts
                </TabsTab>
                <TabsTab
                  value="snippets"
                  leftSection={
                    <ActionIcon variant="transparent" component="span" color="dark" size="sm">
                      {/* <IconCodeCircle style={iconStyle} /> */}
                      <IconUniverse />
                    </ActionIcon>
                  }
                  rightSection={
                    <Badge variant="light" color="blue" size="lg" radius="xl">
                      {snippets.length}
                    </Badge>
                  }
                >
                  Snippets
                </TabsTab>
              </TabsList>

              <TabsPanel value="courses">
                <Stack gap="sm" mt="sm">
                  {/* <ChipGroup>
                    <Group justify="flex-start">
                      {courseCategoriesFlat?.map((category) => (
                        <Chip
                          value={`category-${category}`}
                          key={`category-${category}`}
                          variant="outline"
                        >
                          {category}
                        </Chip>
                      ))}
                    </Group>
                  </ChipGroup> */}
                  {courses.map((post: any) => (
                    <BlogPostHomeListItem key={`main-course-item-${post.slug}`} {...post} />
                  ))}
                </Stack>
              </TabsPanel>

              <TabsPanel value="snippets">
                <Stack gap="sm" mt="sm">
                  {/* <ChipGroup>
                    <Group justify="center">
                      {snippetsCategoriesFlat?.map((category) => (
                        <Chip
                          value={`category-${category}`}
                          key={`category-${category}`}
                          variant="outline"

                        >
                          {category}
                        </Chip>
                      ))}
                    </Group>
                  </ChipGroup> */}
                  {snippets.map((post: any) => (
                    <BlogPostHomeListItem key={`main-course-item-${post.slug}`} {...post} />
                  ))}
                </Stack>
              </TabsPanel>
            </Tabs>
          </GridCol>
        </Grid>
      </Container>
    </>
  );
}
