import type { Metadata } from "next";
import { Inconsolata } from 'next/font/google'
import { Spectral } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casey Fan",
  description: "Casey's blog",
};

const inconsolata = Inconsolata({
  subsets: ['latin'],
});

const spectral = Spectral({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spectral.className}>
        <header className={inconsolata.className}>
          <Link href="/">Casey Fan</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
