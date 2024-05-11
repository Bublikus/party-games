'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { mergeAllWordsFromObject } from '@/utils/words'
import { CrocodileGame } from '@/games/crocodile/game'
import dbWords from '@/db/crocodile/words.json'

const WORDS = mergeAllWordsFromObject(dbWords as unknown as Record<string, string[]>)

export default function Game() {
  const gameRef = useRef<CrocodileGame>()
  const [word, setWord] = useState<string>()

  const regenerateWord = () => {
    setWord(gameRef.current?.regenerateWord())
  }

  useEffect(() => {
    gameRef.current = new CrocodileGame(WORDS)
    gameRef.current?.startGame()
    setWord(gameRef.current?.getWord())

    return () => {
      gameRef.current?.endGame()
    }
  }, [])

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">{word}</h1>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/crocodile"
          className="bg-gray-400 text-white font-bold py-2 px-4 rounded hover:bg-gray-500 transition duration-300"
        >
          Назад
        </Link>

        <button
          type="button"
          onClick={regenerateWord}
          className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Рандом
        </button>
      </div>
    </div>
  )
}
