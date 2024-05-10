import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Party Games',
  description:
    'Party Games: A collection of cool and interactive games designed for party, friends, and fun.',
  category: 'Games',
  keywords: [
    'party',
    'card',
    'games',
    'fun',
    'friends',
    'interactive',
    'cool',
    'online',
    'crocodile',
  ],
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
