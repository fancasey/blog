import type { Metadata } from "next";
import { Jost } from 'next/font/google'
import Link from "next/link";
import Navbar from "./ui/navbar";
import "./ui/globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casey Fan",
  description: "my blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <header className="px-5 py-3">
          <div className="flex items-center place-content-between text-6xl">
            <Link href="/">Casey Fan</Link>
            <Navbar />
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
