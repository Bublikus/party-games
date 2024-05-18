import Image from 'next/image'
import Link from 'next/link'
import { GAMES } from '@/constants/games'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-4">
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-center text-2xl font-bold">Ігри</h1>
      </div>

      <ul className="flex-none flex flex-wrap gap-4 justify-center items-center text-lg">
        {GAMES.map((game) => (
          <li key={game.path} className="text-center">
            <Link href={game.path} className="hover:underline">
              <Image
                src={game.image}
                alt={game.name}
                width={100}
                height={100}
                className="rounded-xl"
                crossOrigin="anonymous"
                style={{ width: 100, height: 100 }}
                priority
              />
              <p className="text-sm mt-1">{game.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
