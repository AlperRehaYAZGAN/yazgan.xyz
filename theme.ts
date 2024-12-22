'use client';

import { CodeHighlight } from '@mantine/code-highlight';
import { createTheme, TypographyStylesProvider } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    // blue: '#7DF9FF',
  },
  components: {
    TypographyStylesProvider: TypographyStylesProvider.extend({
      defaultProps: {
        // bg: 'grape',
      },
    }),
    CodeHighlight: CodeHighlight.extend({
      defaultProps: {},
    }),
  },
});
