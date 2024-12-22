import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { Alert, Button, Container } from '@mantine/core';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-52">
      <Alert
        // className="text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-700 hover:after:w-full"
        color="blue"
        p="xs"
        // h="3rem"
        // mah="3rem"
      >
        <Container size="md" py="0.25rem">
          <Button
            leftSection={<IconArrowLeft size="1.25rem" stroke={1.5} />}
            className="bg-white text-blue-600 border-2 border-black font-bold px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 cursor-pointer"
            variant="outline"
            size="md"
            radius="xs"
            component={Link}
            href="/"
          >
            Return to home
          </Button>
        </Container>
      </Alert>

      <Container bg="white.4" size="md" mt="md">
        {children}
      </Container>
    </div>
  );
}
