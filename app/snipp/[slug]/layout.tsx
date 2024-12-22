'use client';

import { useState } from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import SplitPane, { Pane } from 'split-pane-react';
import { Button, Card, CardSection, Container, Group } from '@mantine/core';
// css
import 'split-pane-react/esm/themes/default.css';

const MINHEIGHT = 'calc(100vh - 6rem)';

export default function MdxSnippLayout({ children }: { children: React.ReactNode }) {
  const [sizes, setSizes] = useState(['40%', '60%']);

  return (
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
          </Card>
        </Pane>
        <Pane minSize="25%" maxSize="75%">
          <div className="flex h-full items-center justify-center border-l-2">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Building This Area</h2>
              <p className="text-gray-500">This section will be available in the next release</p>
            </div>
          </div>
        </Pane>
      </SplitPane>
    </Container>
  );
}
