'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { translateLevelName } from '@/utils/game'
import { checkDuplicates, filterDuplicatesInLevels, filterWordDuplicates } from '@/utils/words'
import { CrocodileGame } from '@/games/crocodile/game'

export default function Game() {
  const gameRef = useRef<CrocodileGame>()
  const wordsRef = useRef<Record<string, string[]>>({})

  const [word, setWord] = useState<string>()
  const [levels, setLevels] = useState<string[]>([])

  const regenerateWord = () => {
    setWord(gameRef.current?.regenerateWord())
  }

  const handleCheckboxChange = (key: string) => {
    setLevels((prevLevels) => {
      let newLevels: string[] = []

      if (key === 'all') {
        newLevels = prevLevels.includes(key) ? [] : Object.keys(wordsRef.current)
      } else if (prevLevels.includes(key)) {
        newLevels = prevLevels.filter((level) => level !== key && level !== 'all')
      } else {
        newLevels = [...prevLevels, key]
      }
      // select "all" if all levels are selected
      if (
        Object.keys(wordsRef.current).every((level) => level === 'all' || newLevels.includes(level))
      ) {
        newLevels = Object.keys(wordsRef.current)
      }

      // generate new word base on new levels
      const mergedLevels = newLevels.includes('all')
        ? wordsRef.current['all']
        : newLevels.flatMap((level) => wordsRef.current[level])

      gameRef.current?.setWords(filterWordDuplicates(mergedLevels))
      setWord(gameRef.current?.getWord())

      return newLevels
    })
  }

  useEffect(() => {
    const wordLevelPromises = {
      easy: import('@/db/crocodile/easy.json'),
      medium: import('@/db/crocodile/medium.json'),
      hard: import('@/db/crocodile/hard.json'),
      phrases: import('@/db/crocodile/phrases.json'),
    }

    Promise.allSettled(Object.values(wordLevelPromises)).then((results) => {
      // get words
      const dbWords = results.reduce<Record<string, string[]>>((acc, result, index) => {
        if (result.status === 'fulfilled') {
          const key = Object.keys(wordLevelPromises)[index]
          acc[key] = result.value.default
        }
        return acc
      }, {})

      // set words
      const filteredLevels = filterDuplicatesInLevels(dbWords)
      wordsRef.current = {
        ...filteredLevels,
        all: Object.values(dbWords).flat(),
      }

      // check levels
      checkDuplicates(filteredLevels).then((suggestedFilteredLevels) => {
        if (suggestedFilteredLevels) console.warn('Suggested replacement:', suggestedFilteredLevels)
      })

      // set game
      const initLevels = [Object.keys(wordsRef.current)[0]]
      setLevels(initLevels)
      gameRef.current = new CrocodileGame()
      gameRef.current?.startGame()
      gameRef.current?.setWords(wordsRef.current[initLevels[0]])
      setWord(gameRef.current?.getWord())
    })

    return () => {
      gameRef.current?.endGame()
    }
  }, [])

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 text-balance">{word || '...'}</h1>
      </div>

      <div role="button" className="dropdown" tabIndex={0} aria-label="Level">
        <div className="bg-white text-gray-800 py-2 px-4 rounded cursor-pointer">
          {levels.includes('all')
            ? translateLevelName('all')
            : levels.map((level) => translateLevelName(level)).join(', ') || '...'}
        </div>

        <div className="dropdown-content">
          {Object.keys(wordsRef.current).map((key) => (
            <button
              key={key}
              onClick={() => handleCheckboxChange(key)}
              className="w-full flex items-center py-2 px-4 hover:bg-gray-100 text-gray-800"
            >
              <div
                className={`h-4 w-4 border-2 rounded ${levels.includes(key) ? 'bg-blue-500' : 'bg-white'}`}
              />
              <span className="ml-2">{translateLevelName(key)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/crocodile"
          className="bg-gray-400 text-gray-950 font-bold py-2 px-4 rounded hover:bg-gray-500 transition duration-300"
        >
          Назад
        </Link>

        <button
          type="button"
          onClick={regenerateWord}
          className="bg-green-500 text-gray-950 font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          Рандом
        </button>
      </div>
    </div>
  )
}
