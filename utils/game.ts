export const translateLevelName = (level: string) =>
  ({
    all: 'Всі',
    easy: 'Легко',
    medium: 'Середньо',
    hard: 'Складно',
    phrases: 'Вирази',
  })[level] || level
