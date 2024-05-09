export class WordBank {
  private words: string[]
  private usedWords: Set<string> = new Set()
  private unusedWords: string[] = []

  constructor(words: string[]) {
    this.words = words
    this.resetWords()
  }

  // Resets the unusedWords list and usedWords set
  private resetWords() {
    this.unusedWords = [...this.words] // Clone the original words array
    this.usedWords = new Set()
  }

  getRandomWord(): string {
    if (this.unusedWords.length === 0) {
      this.resetWords() // Reset if all words have been used
    }

    // Get a random index, pick the word, and then remove it from the unused list
    const randomIndex = Math.floor(Math.random() * this.unusedWords.length)
    const word = this.unusedWords.splice(randomIndex, 1)[0]
    this.usedWords.add(word)

    return word
  }
}
