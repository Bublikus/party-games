import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const isProd = process.env.NODE_ENV === 'production'

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
  manifest: isProd ? '/party-games/manifest.webmanifest' : '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <head>
        <meta name="theme-color" content="#8936FF" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
