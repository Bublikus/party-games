'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { translateLevelName } from '@/utils/game'
import { checkDuplicates, filterDuplicatesInLevels } from '@/utils/words'
import { CrocodileGame } from '@/games/crocodile/game'

let isWordsLoaded = false
let WORDS: Record<string, string[]> = {}

export default function Game() {
  const gameRef = useRef<CrocodileGame>()
  const [word, setWord] = useState<string>()
  const [level, setLevel] = useState<string>()

  const regenerateWord = () => {
    setWord(gameRef.current?.regenerateWord())
  }

  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(event.target.value)
    gameRef.current?.setWords(WORDS[event.target.value])
    setWord(gameRef.current?.getWord())
  }

  useEffect(() => {
    if (isWordsLoaded) return

    import('@/db/crocodile/words.json').then((dbWords) => {
      if (isWordsLoaded) return

      // set words
      isWordsLoaded = true
      const rawWords = dbWords.default as unknown as Record<string, string[]>
      const filteredLevels = filterDuplicatesInLevels(rawWords)
      WORDS = {
        ...filteredLevels,
        all: Object.values(rawWords).flat(),
      }

      // check levels
      checkDuplicates(filteredLevels).then((suggestedFilteredLevels) => {
        if (suggestedFilteredLevels) console.warn('Suggested replacement:', suggestedFilteredLevels)
      })

      // set game
      const initLevel = Object.keys(WORDS)[0]
      setLevel(initLevel)
      gameRef.current = new CrocodileGame()
      gameRef.current?.startGame()
      gameRef.current?.setWords(WORDS[initLevel])
      setWord(gameRef.current?.getWord())
    })

    return () => {
      gameRef.current?.endGame()
    }
  }, [])

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">{word || '...'}</h1>
      </div>

      <select
        value={level}
        onChange={handleLevelChange}
        className="bg-white text-gray-800 font-bold py-2 px-4 rounded"
      >
        {Object.keys(WORDS).map((key) => (
          <option key={key} value={key} className="text-gray-800">
            {translateLevelName(key)}
          </option>
        ))}
      </select>

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
