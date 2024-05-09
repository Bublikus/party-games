import { Player } from '@/lib/game/player'
import { Team } from '@/lib/game/team'

export class Game {
  protected players: Player[] = []
  protected teams: Team[] = []
  protected isGameActive: boolean = false
  protected turnIndex: number = 0 // Track the current turn index

  constructor() {}

  get isGameStarted(): boolean {
    return this.isGameActive
  }

  // Add a player to the game
  addPlayer(player: Player) {
    this.players.push(player)
  }

  // Add a team to the game
  addTeam(team: Team) {
    this.teams.push(team)
  }

  getTeams(): Team[] {
    return this.teams
  }

  // Start the game
  startGame() {
    this.isGameActive = true
    this.turnIndex = 0 // Reset turn index at the start of the game
    console.log('Game started')
  }

  // End the game
  endGame() {
    this.isGameActive = false
    console.log('Game ended')
  }

  // Get the current team based on the turn index
  getCurrentTeam(): Team | null {
    if (this.teams.length === 0) {
      console.log('No teams are set up.')
      return null
    }
    return this.teams[this.turnIndex % this.teams.length]
  }

  // Proceed to the next turn
  nextTurn() {
    if (this.teams.length === 0) {
      console.error('No teams available.')
      return
    }

    this.turnIndex++ // Move to the next team
    console.log(`Turn ${this.turnIndex}: It's now ${this.getCurrentTeam()?.name}'s turn.`)
  }
}
