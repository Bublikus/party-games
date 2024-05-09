import { Team } from '@/lib/game/team'

export class Player {
  constructor(
    public name: string,
    public team?: Team,
    public score: number = 0
  ) {}

  addScore(points: number) {
    this.score += points
  }

  resetScore(): void {
    this.score = 0
  }
}
