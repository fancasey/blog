import type { Metadata } from "next";
import { Inconsolata } from 'next/font/google'
import { Spectral } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from "./blog/components/nav";

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
          <NavBar />
        </header>
        <main className="px-0 md:px-[15%]">{children}</main>
        <footer className="my-20"/>
      </body>
    </html>
  );
}
