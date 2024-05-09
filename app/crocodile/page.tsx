import Image from 'next/image'
import Link from 'next/link'
import crocodileImg from '@/public/crocodile.webp'

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1 className="text-xl lg:text-3xl font-bold text-green-800 text-center">Гра "Крокодил"</h1>

      <Image src={crocodileImg} alt="Crocodile" width={300} height={300} className="rounded-2xl" />

      <div className="flex gap-4 items-center justify-center">
        <Link
          href="/"
          className="bg-gray-400 text-white font-bold py-2 px-4 rounded hover:bg-gray-500 transition duration-300"
        >
          Назад
        </Link>

        <Link
          href="/crocodile/game"
          className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Почати
        </Link>
      </div>
    </div>
  )
}
