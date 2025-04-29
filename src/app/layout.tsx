import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PEKCON Container & Logistics - Global Lojistik Çözümler",
  description: "PEKCON Container & Logistics, uluslararası taşımacılık ve konteyner tedariğinde güvenilir çözüm ortağınız.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://pekcon.com/tr"),
  icons: {
    icon: [
      { url: '/icons/pekcon-favicon.ico', sizes: 'any' },
      { url: '/icons/pekcon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/pekcon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/pekcon-apple-icon.png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="light">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/icons/pekcon-favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/pekcon-apple-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/pekcon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/pekcon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script src="/favicon.js" defer></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased light-theme`}>
        {children}
      </body>
    </html>
  );
}
