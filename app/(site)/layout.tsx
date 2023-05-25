import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David Baxter',
  description: 'David Baxter Portfolio Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header>
          <Link href="/" className='bg-blue-600 bg-clip-text text-transparent text-lg font-bold'>Home</Link>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}
