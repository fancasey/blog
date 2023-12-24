import '@/app/ui/globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Navbar from './ui/navbar'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'cheeky lil blog',
  description: 'a blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <header className="px-5 py-3">
          <div className="flex items-center place-content-between">
            <h1 className="text-6xl">Casey Fan</h1>
            <Navbar />
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}
