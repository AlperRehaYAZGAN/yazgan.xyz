'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const isLight = computedColorScheme === 'light';

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="subtle"
      size="md"
      color={isLight ? 'blue' : 'yellow'}
      aria-label="Toggle color scheme"
    >
      {isLight ? <IconSun size="1.25rem" stroke={1.5} /> : <IconMoon size="1.25rem" stroke={1.5} />}
    </ActionIcon>
  );
}
