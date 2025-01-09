import Link from 'next/link';
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  Badge,
  Button,
  Container,
  Group,
  Space,
} from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

export async function MainAppShell({ children }: { children: any }) {
  return (
    <AppShell
      header={{ height: '3rem' }}
      //   navbar={{
      //     width: '16rem',
      //     breakpoint: 'sm',
      //     // collapsed: { mobile: !opened },
      //   }}
      footer={{ height: '3rem' }}
      padding="sm"
    >
      <AppShellHeader>
        {/* <Burger
          // opened={opened} onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        /> */}
        <Container size="md">
          <Group justify="space-between" align="center" gap="xs" m={0} h="3rem">
            <Badge
              // hover cursor="pointer" tailwindcss
              className="cursor-pointer"
              component={Link}
              href="/"
              size="xl"
              radius={0}
              color="blue"
              // variant="filled"
              variant="filled"

              // variant="gradient"
              // gradient={{ from: 'blue', to: 'blue.4', deg: 106 }}
            >
              yazgan.xyz
            </Badge>

            <Group gap="xs">
              <ColorSchemeToggle />

              <Button component="a" href="/" variant="outline" size="compact-sm" radius="xs">
                Home
              </Button>
            </Group>

            {/* <ActionIcon
              component={Link}
              href="/"
              size="lg"
              color="dark.8"
              variant="subtle"
              radius="xl"
            >
              <IconHome2 stroke={1.5} />
            </ActionIcon> */}
            {/* <ActionIcon size="lg" color="dark.8" variant="subtle" radius="xl">
              <IconTerminal2 stroke={1.5} />
            </ActionIcon> */}
          </Group>
        </Container>
      </AppShellHeader>

      {/* <AppShellMain p={0} m={0} mt="3rem"> */}
      <Space h="3rem" />
      {children}
      {/* </AppShellMain> */}

      <AppShellFooter>
        <Group justify="center" align="center" h="3rem">
          <Badge
            size="xl"
            radius={0}
            // hover cursor="pointer" tailwindcss
            className="cursor-pointer"
            // color="blue"
            // variant="dot"
            variant="gradient"
            gradient={{ from: 'blue', to: 'teal', deg: 161 }}
            component="a"
            href="https://x.com/alperreha"
            target="_blank"
            rel="noopener noreferrer"
          >
            follow me on X
          </Badge>
        </Group>
      </AppShellFooter>
    </AppShell>
  );
}
