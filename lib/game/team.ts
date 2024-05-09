import { Player } from '@/lib/game/player'

export class Team {
  private members: Player[] = []

  constructor(public name: string) {}

  addMember(player: Player) {
    this.members.push(player)
    player.team = this
  }

  removeMember(player: Player) {
    this.members = this.members.filter((member) => member !== player)
  }

  getMembers(): Player[] {
    return this.members
  }

  getScore(): number {
    return this.members.reduce((total, member) => total + member.score, 0)
  }

  getAverageScore(): number {
    return this.getScore() / this.members.length
  }

  setScore(score: number): void {
    this.members.forEach((member) => (member.score = score))
  }

  addScore(points: number): void {
    this.members.forEach((member) => (member.score += points))
    console.log(this.members)
  }

  resetScores(): void {
    this.members.forEach((member) => (member.score = 0))
  }
}
