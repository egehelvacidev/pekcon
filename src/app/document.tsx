import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="icon" href="/icons/pekcon-favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/pekcon-apple-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/pekcon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/pekcon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 