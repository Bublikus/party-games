import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crocodile Game',
  description: 'Show your acting skills and have fun with friends and family.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="grid w-full min-h-screen bg-gradient-to-b from-[#9efdfb] from-40% to-[#7BECE9] to-60% p-6">
      {children}
    </main>
  )
}
