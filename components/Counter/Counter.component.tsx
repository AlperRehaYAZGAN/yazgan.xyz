'use client';

import { Button, Group, Stack, Text } from '@mantine/core';
import { useCounterStore } from './Counter.component.state';

export function Counter() {
  const { count, increment, decrement } = useCounterStore();
  return (
    <Group justify="flex-start" align="center" gap="xs">
      <Text className="bg-red-100" size="md">
        {count}
      </Text>
      <Button size="sm" variant="outline" onClick={decrement}>
        -
      </Button>
      <Button size="sm" variant="outline" onClick={increment}>
        +
      </Button>
    </Group>
  );
}
