export const filterWordDuplicates = (words: string[]): string[] => {
  return Array.from(new Set(words))
}

export const mergeAllWordsFromObject = (words: Record<string, string[]>): string[] => {
  return Object.values(words).flat()
}

export const filterDuplicatesInLevels = (
  words: Record<string, string[]>
): Record<string, string[]> => {
  let isDuplicate = false
  const filteredWords: Record<string, string[]> = {}
  for (const level in words) {
    if (words.hasOwnProperty(level)) {
      const originalWords = words[level]
      const uniqueWords = filterWordDuplicates(originalWords)

      if (originalWords.length > uniqueWords.length) {
        isDuplicate = true
        const duplicates = originalWords.filter(
          (item, index) => originalWords.indexOf(item) !== index
        )
        console.warn(
          `Warning: Found duplicate words at level "${level}" (${duplicates.length}): ${duplicates.join(', ')}`
        )
        const suggestedWords = uniqueWords.sort((a, b) => a.localeCompare(b))
        console.warn(`Suggested "${level}" level replacement:`, suggestedWords)
      }

      filteredWords[level] = uniqueWords
    }
  }
  if (isDuplicate) {
    console.warn('Suggested WORDS replacement:', filteredWords)
  }
  console.table(
    Object.keys(filteredWords).reduce<Record<string, { length: number }>>((acc, key) => {
      acc[key] = { length: filteredWords[key].length }
      return acc
    }, {})
  )
  return filteredWords
}

export const checkDuplicates = (
  words: Record<string, string[]>
): Promise<Record<string, string[]> | null> => {
  return new Promise((resolve, reject) => {
    try {
      const filteredWords: Record<string, string[]> = {}
      let isDuplicates = false

      for (const level in words) {
        filteredWords[level] = []

        for (const word of words[level]) {
          let isDuplicate = false

          for (const otherLevel in words) {
            if (otherLevel !== level && words[otherLevel].includes(word)) {
              isDuplicate = true
              isDuplicates = true
              break
            }
          }

          if (!isDuplicate) {
            filteredWords[level].push(word)
          }
        }
      }

      resolve(isDuplicates ? filteredWords : null)
    } catch (error) {
      reject(error)
    }
  })
}
