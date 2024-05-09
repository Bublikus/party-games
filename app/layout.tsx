import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/utils/cn'
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
      type: 'image/png',
      url: '/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, 'grid min-h-screen w-full items-stretch justify-stretch')}
      >
        {children}
      </body>
    </html>
  )
}
