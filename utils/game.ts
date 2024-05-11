export const translateLevelName = (level: string) =>
  ({
    easy: 'Легко',
    medium: 'Середньо',
    hard: 'Складно',
  })[level] || level
