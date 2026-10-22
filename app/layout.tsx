import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Total Tiles | Quality Wall & Floor Tiles at Cheap Prices',
  description:
    'Buy wall tiles and floor tiles at the cheapest prices in the UK. Huge stocks of the latest designs & next day delivery. Shop marble effect tiles, wood effect tiles, bathroom tiles, outdoor tiles and underfloor heating.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white text-[#262626] antialiased`}>
        {children}
      </body>
    </html>
  );
}
