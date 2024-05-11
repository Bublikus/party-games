import { Game, Player, Team, WordBank } from '@/lib/game'

export class CrocodileGame extends Game {
  private wordBank: WordBank
  private currentWord: string = ''
  private currentTeam: Team | null = null

  constructor(words: string[], teams: Team[] = []) {
    super()
    teams.forEach((team) => this.addTeam(team))
    this.wordBank = new WordBank(words)
  }

  startGame() {
    super.startGame()
    this.computeTurn()
  }

  nextTurn() {
    super.nextTurn()
    this.computeTurn()
  }

  computeTurn() {
    this.currentTeam = this.getCurrentTeam()
    this.currentWord = this.wordBank.getRandomWord()
    console.log(`It's ${this.currentTeam?.name}'s turn. The word is: ${this.currentWord}`)
  }

  setWords(words: string[]) {
    this.wordBank = new WordBank(words)
    this.computeTurn()
  }

  getWord(): string {
    return this.currentWord
  }

  regenerateWord(): string {
    this.currentWord = this.wordBank.getRandomWord()
    return this.currentWord
  }

  skipWord() {
    this.currentTeam?.addScore(-1)
    this.nextTurn()
  }

  guessWord(guess: string) {
    if (!this.isGameActive) {
      console.log('The game is not active.')
      return
    }

    if (guess === this.currentWord) {
      console.log('Correct guess!')
      this.currentTeam?.addScore(1)
    } else {
      console.log('Wrong guess!')
    }
  }

  endGame() {
    super.endGame()
    console.log('Final Scores:')
    this.getTeams().forEach((team) => {
      console.log(`${team.name}: ${team.getAverageScore()} points`)
    })
  }
}
