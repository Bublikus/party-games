export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="grid w-full min-h-screen bg-[#7BECE9] p-6">{children}</main>
}
