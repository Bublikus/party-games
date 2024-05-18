import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const isProd = process.env.NODE_ENV === 'production'

export const metadata: Metadata = {
  title: 'Party Games',
  description: 'A collection of cool and interactive games designed for party, friends, and fun.',
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
  openGraph: {
    title: 'Party Games',
    description: 'A collection of cool and interactive games designed for party, friends, and fun.',
    type: 'website',
    images: [
      {
        url: isProd ? '/party-games/android-chrome-512x512.png' : '',
        width: 512,
        height: 512,
        alt: 'Party Games',
      },
    ],
  },
  manifest: isProd ? '/party-games/manifest.json' : '/manifest.json',
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
        <link rel="manifest" href={isProd ? '/party-games/manifest.json' : '/manifest.json'} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
