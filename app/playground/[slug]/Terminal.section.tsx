'use client';

// ts ignore this file
import { useEffect, useRef, useState } from 'react';
import { IconBrowser, IconTerminal2 } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Card,
  CardSection,
  Group,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
} from '@mantine/core';
import { useWebContainer } from '@/app/blog/[slug]/(sections)/useWebcontainer.hook';
import { usePlaygroundStore } from './page.store';

export function TerminalSection() {
  const terminalRef = useRef(null);
  const terminal = useRef(null);

  const webContainer = useWebContainer();

  const handleClose = () => {
    try {
      webContainer?.teardown();
    } catch (error) {
      console.error('Failed to close terminal:', error);
    }
    // write terminal goodbye message
    // @ts-ignore
    terminal.current?.write?.('Goodbye!\r\n');
    // terminal.current?.dispose();
  };

  const { url, setUrl } = usePlaygroundStore();
  const [activeTab, setActiveTab] = useState<string | null>('terminal');

  useEffect(() => {
    // Rest of your WebContainer setup code...
    // @ts-ignore
    webContainer?.on?.('server-ready', (port, newUrl) => {
      console.log(`Server is ready on url and port: ${newUrl}`);
      setUrl(newUrl);
      setActiveTab('preview');
    });
  }, [webContainer]);

  // attach window resize events
  useEffect(() => {
    const handleResize = () => {
      // @ts-ignore
      terminal.current?.fit();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const initTerminal = async () => {
      try {
        // Dynamic imports for client-side modules
        const [
          { Terminal },
          { FitAddon },
          { WebLinksAddon },
          // Add WebContainer import when needed
          // { WebContainer }
        ] = await Promise.all([
          import('@xterm/xterm'),
          import('@xterm/addon-fit'),
          import('@xterm/addon-web-links'),
          // import('@webcontainer/api')
        ]);

        // Import CSS
        // @ts-ignore
        await import('@xterm/xterm/css/xterm.css');

        const fitAddon = new FitAddon();
        const webLinksAddon = new WebLinksAddon();

        // @ts-ignore
        terminal.current = new Terminal({
          cursorBlink: true,
          fontSize: 14,
          theme: {
            background: '#1e1e1e',
            foreground: '#d4d4d4',
          },
        });

        // @ts-ignore
        terminal.current.loadAddon(fitAddon);
        // @ts-ignore
        terminal.current.loadAddon(webLinksAddon);
        // @ts-ignore
        terminal.current.open(terminalRef.current);

        fitAddon.fit();

        const shellProcess = await webContainer?.spawn('jsh', {
          terminal: {
            // @ts-ignore
            cols: terminal.current.cols,
            // @ts-ignore
            rows: terminal.current.rows,
          },
        });

        shellProcess?.output.pipeTo(
          new WritableStream({
            write(data) {
              // @ts-ignore
              terminal.current?.write(data);
            },
          })
        );

        const input = shellProcess?.input?.getWriter();
        // @ts-ignore
        terminal.current.onData((data) => {
          // @ts-ignore
          input.write(data);
        });
        // @ts-ignore
        terminal.current.onResize(({ cols, rows }) => {
          // @ts-ignore
          shellProcess.resize({ cols, rows });
        });
      } catch (error) {
        console.error('Failed to initialize WebContainer:', error);
      }
    };

    initTerminal();

    return () => {
      // @ts-ignore
      terminal.current?.dispose();
    };
  }, [webContainer?.workdir]);

  return (
    <Card padding="sm" px={0} h="100%" shadow="0">
      <CardSection p="xs" withBorder>
        <Group justify="space-between" px="xs" align="center">
          <Badge
            // @ts-ignore
            color={webContainer?.workdir?.length > 1 ? 'green' : 'red'}
            variant="filled"
            radius="xl"
          >
            {/* @ts-ignore */}
            {webContainer?.workdir?.length > 1 ? 'Ready' : 'Not Ready'}
          </Badge>
          <Button color="red" onClick={handleClose} variant="outline" size="compact-sm">
            Close Terminal
          </Button>
        </Group>
      </CardSection>
      <Tabs
        variant="outline"
        defaultValue="terminal"
        value={activeTab}
        onChange={setActiveTab}
        h="100%"
      >
        {/* <CardSection p="xs" withBorder> */}
        {/* <Group justify="center" px="xs" align="center"> */}
        <TabsList>
          <TabsTab value="terminal" leftSection={<IconTerminal2 size="1.25rem" stroke={1.5} />}>
            Terminal
          </TabsTab>
          <TabsTab value="preview" leftSection={<IconBrowser size="1.25rem" stroke={1.5} />}>
            Preview
          </TabsTab>
        </TabsList>
        {/* </Group> */}
        {/* </CardSection> */}
        <TabsPanel value="terminal" h="100%">
          <Stack h="100%" w="100%">
            <div
              ref={terminalRef}
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#1e1e1e',
              }}
            />
          </Stack>
        </TabsPanel>

        <TabsPanel value="preview" h="100%">
          {url?.length > 3 ? (
            <iframe
              title="preview-of-webcontainer"
              src={url}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          ) : (
            <>Url not ready yet...</>
          )}
        </TabsPanel>
      </Tabs>
    </Card>
  );
}
