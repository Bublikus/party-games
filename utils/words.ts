export const filterWordDuplicates = (words: string[]): string[] => {
  return Array.from(new Set(words))
}

export const mergeAllWordsFromObject = (words: Record<string, string[]>): string[] => {
  return Object.values(words).flat()
}
