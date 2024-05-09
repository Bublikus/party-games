import Image from 'next/image'
import Link from 'next/link'
import crocodileImg from '@/public/crocodile.webp'

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h1 className="text-xl lg:text-3xl font-bold text-green-800 text-center">
        Welcome to Crocodile Game!
      </h1>
      <Image src={crocodileImg} alt="Crocodile" width={300} height={300} className="rounded-2xl" />
      <Link
        href="/crocodile/game"
        className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
      >
        Start Game
      </Link>
    </div>
  )
}
