'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Player, Team } from '@/lib/game'
import { CrocodileGame } from '@/games/crocodile/game'
import dbWords from '@/db/crocodile/words.json'

const WORDS = dbWords as unknown as string[]
const WORD_TIMEOUT_SEC = 60

export default function Game() {
  const gameRef = useRef<CrocodileGame>()
  const secondsIntervalRef = useRef<ReturnType<typeof setInterval>>()

  const [word, setWord] = useState<string>()
  const [seconds, setSeconds] = useState(WORD_TIMEOUT_SEC)
  const [endGameScores, setEndGameScores] = useState<{ name: string; score: number }[]>()

  const regenerateWord = () => {
    const newWord = gameRef.current?.regenerateWord()
    setWord(newWord)
  }

  const guessedWord = () => {
    if (word) gameRef.current?.guessWord(word)
    setWord(gameRef.current?.getWord())

    clearInterval(secondsIntervalRef.current)
    setSeconds(WORD_TIMEOUT_SEC)
    startTimer()
  }

  const onWordTimeout = () => {
    gameRef.current?.skipWord()
    setWord(gameRef.current?.getWord())
  }

  const startTimer = () => {
    secondsIntervalRef.current = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)
  }

  const endGame = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (gameRef.current?.isGameStarted) {
      e.preventDefault()
      gameRef.current?.endGame()
      clearInterval(secondsIntervalRef.current)

      const scores = gameRef.current?.getTeams().map((team) => ({
        name: team.name,
        score: team.getAverageScore(),
      }))

      setEndGameScores(scores)
    }
  }

  useEffect(() => {
    if (seconds === -1) {
      onWordTimeout()
      setSeconds(WORD_TIMEOUT_SEC)
    }
  }, [seconds])

  useEffect(() => {
    const teams = [...Array(3)].map((_, i) => {
      const team = new Team(`Команда ${i + 1}`)
      team.addMember(new Player('Гравець 1'))
      team.addMember(new Player('Гравець 2'))
      team.addMember(new Player('Гравець 3'))
      return team
    })

    gameRef.current = new CrocodileGame(WORDS, teams)
    gameRef.current?.startGame()
    setWord(gameRef.current?.getWord())

    startTimer()

    return () => {
      gameRef.current?.endGame()
      clearInterval(secondsIntervalRef.current)
    }
  }, [])

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      {!endGameScores ? (
        <>
          <div>
            <h2 className="text-md font-bold text-gray-800">
              Команда: {gameRef.current?.getCurrentTeam()?.name || '🤷'}
            </h2>
            <h2 className="text-md font-bold text-gray-800">
              Рахунок: {gameRef.current?.getCurrentTeam()?.getAverageScore() || 0}
            </h2>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">{word}</h1>
            <p className="text-gray-800 text-center">Покажіть слово за {seconds} сек.</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={regenerateWord}
              className="bg-yellow-500 text-white py-2 px-4 rounded"
            >
              Рандом
            </button>
            <button
              type="button"
              onClick={guessedWord}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Вгадали
            </button>
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-gray-800">Рахунки:</h2>

          {endGameScores.map((team, index) => (
            <div key={index} className="text-lg text-gray-800">
              {team.name}: {team.score} балів
            </div>
          ))}
        </div>
      )}

      <Link href="/crocodile" className="bg-red-500 text-white py-2 px-4 rounded" onClick={endGame}>
        {endGameScores ? 'Назад' : 'Завершити гру'}
      </Link>
    </div>
  )
}
