'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Teams() {
  const [teams, setTeams] = useState([{ name: 'Команда 1' }])
  const [teamName, setTeamName] = useState('')

  const addTeam = () => {
    if (teamName) {
      setTeams([...teams, { name: teamName }])
      setTeamName('')
    }
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h1 className="text-2xl font-bold">Команди</h1>
      {teams.map((team, index) => (
        <div key={index} className="mt-2">
          {team.name}
        </div>
      ))}
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        className="mt-3 border-2 border-gray-300 p-1"
        placeholder="New Team Name"
      />
      <button onClick={addTeam} className="ml-2 bg-blue-500 text-white p-1 rounded">
        Add Team
      </button>
      <Link href="/crocodile/game" className="mt-4 block bg-green-500 text-white p-2 rounded">
        Start Game
      </Link>
    </div>
  )
}
