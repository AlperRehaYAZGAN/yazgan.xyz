// css
import './globals.css';

import { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
// next google font Open Sans 'next/font'
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { MainAppShell } from './(appshell)/MainAppShell.skeleton';
import { GoogleAnalytics } from '@next/third-parties/google'

// If loading a variable font, you don't need to specify the font weight
const publicSans = Public_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yazgan.xyz'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'yazgan.xyz - @alperreha',
    template: '%s | alperreha',
  },
  description: 'devops and fullstack, go, nodejs guy!',
};

export default async function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        {/* <script src="/js/enable_threads.js" /> */}
        <GoogleAnalytics gaId="G-75N2YXKWY3" />
      </head>
      <body
        className={publicSans.className}
        // style={{ lineHeight: '1.15' }}
      >
        <MantineProvider withCssVariables withGlobalClasses withStaticClasses theme={theme}>
          <MainAppShell>{children}</MainAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
