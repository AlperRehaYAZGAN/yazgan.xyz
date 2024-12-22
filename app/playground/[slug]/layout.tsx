'use client';

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import SplitPane, { Pane } from 'split-pane-react';
import { Button, Card, CardSection, Container, Group } from '@mantine/core';

import 'split-pane-react/esm/themes/default.css';

import { useState } from 'react';
import WebContainerProvider from '@/app/blog/[slug]/(sections)/WebcontainerProvider';
import { TerminalSection } from './Terminal.section';

const MINHEIGHT = 'calc(100vh - 6rem)';

export default function MdxPlaygroundLayout({ children }: { children: React.ReactNode }) {
  const [sizes, setSizes] = useState(['40%', '60%']);

  return (
    <WebContainerProvider>
      <Container
        fluid
        p={0}
        style={{
          minHeight: MINHEIGHT,
          height: MINHEIGHT,
        }}
      >
        <SplitPane
          sashRender={(_: any, __: any) => {
            return <></>;
          }}
          split="vertical"
          sizes={sizes}
          // @ts-ignore
          onChange={setSizes}
        >
          <Pane minSize="25%" maxSize="75%">
            <Card
              // border right 1
              // className="border-r border-gray-200"
              padding="xs"
              px={0}
              h="100%"
              shadow="0"
            >
              <CardSection p="xs" withBorder>
                <Group justify="space-between" px="sm" align="center">
                  <Button
                    leftSection={<IconArrowLeft size="1.25rem" stroke={1.5} />}
                    variant="outline"
                    size="compact-sm"
                    color="blue"
                    radius="xs"
                    component="a"
                    href="/"
                  >
                    Return to home
                  </Button>
                </Group>
              </CardSection>

              {children}

              <CardSection p="xs" withBorder>
                <Group justify="flex-end" px="sm" align="center">
                  <Button
                    rightSection={<IconArrowRight size="1.25rem" stroke={1.5} />}
                    variant="outline"
                    size="compact-sm"
                    color="blue"
                    radius="xs"
                  >
                    Next Step
                  </Button>
                </Group>
              </CardSection>
            </Card>
          </Pane>
          <Pane minSize="25%" maxSize="75%">
            <TerminalSection />
          </Pane>
        </SplitPane>
      </Container>
    </WebContainerProvider>
  );
}
