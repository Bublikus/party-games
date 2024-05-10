import Image from 'next/image'
import Link from 'next/link'
import crocodileImg from '@/public/games/crocodile.webp'

const GAMES: { name: string; path: string }[] = [
  {
    name: 'Крокодил',
    path: '/crocodile',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-4">
      <div className="flex flex-col justify-center items-center mt-10 lg:mt-[20vh]">
        <h1 className="text-center text-2xl font-bold">Ігри для друзів</h1>
      </div>

      <ul className="flex-none flex flex-wrap gap-4 justify-center items-center space-y-2 text-lg">
        {GAMES.map((game) => (
          <li key={game.path} className="text-center">
            <Link href={game.path} className="hover:underline">
              <Image
                src={crocodileImg}
                alt="Crocodile"
                width={100}
                height={100}
                className="rounded-xl"
              />
              <p>{game.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
