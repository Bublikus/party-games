import { StaticImageData } from 'next/image'
import crocodileImg from '@/public/games/crocodile.webp'

type Game = {
  name: string
  path: string
  image: string | StaticImageData
}

export const GAMES: Game[] = [
  {
    name: 'Крокодил',
    path: '/crocodile',
    image: crocodileImg,
  },
  {
    name: 'Дудл Джамп',
    path: 'https://doodle-jump.web.app/',
    image: 'https://doodle-jump.web.app/ogImage.png',
  },
  {
    name: 'Тетріс',
    path: 'https://little-tetris-game.web.app/',
    image: 'https://little-tetris-game.web.app/ogImage.png',
  },
  {
    name: 'Пʼятнашки',
    path: 'https://fifteen-game.web.app/',
    image: 'https://fifteen-game.web.app/ogImage.png',
  },
  {
    name: 'Змійка',
    path: 'https://ascii-snake-game.web.app/',
    image: 'https://ascii-snake-game.web.app/ogImage.png',
  },
  {
    name: 'Сапер',
    path: 'https://sapper-puzzle.web.app/',
    image: 'https://sapper-puzzle.web.app/ogImage.png',
  },
]
