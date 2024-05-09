import Link from 'next/link'

const GAMES: { name: string; path: string }[] = [
  {
    name: 'Crocodile Game',
    path: '/crocodile',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold">Welcome to Party Games</h1>

      <ul className="mt-6 space-y-2 text-lg">
        {GAMES.map((game) => (
          <li key={game.path} className="text-center text-gray-800">
            <Link href={game.path} className="text-blue-600 hover:underline">
              {game.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
