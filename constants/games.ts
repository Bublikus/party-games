import { StaticImageData } from 'next/image'

import crocodileImg from '@/public/games/crocodile.webp'
import doodleJumpImg from '@/public/games/doodle-jump.webp'
import tetrisImg from '@/public/games/tetris.webp'
import fifteenImg from '@/public/games/fifteen.webp'
import snakeImg from '@/public/games/snake.webp'
import sapperImg from '@/public/games/sapper.webp'

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
    image: doodleJumpImg,
  },
  {
    name: 'Тетріс',
    path: 'https://little-tetris-game.web.app/',
    image: tetrisImg,
  },
  {
    name: 'Пʼятнашки',
    path: 'https://fifteen-game.web.app/',
    image: fifteenImg,
  },
  {
    name: 'Змійка',
    path: 'https://ascii-snake-game.web.app/',
    image: snakeImg,
  },
  {
    name: 'Сапер',
    path: 'https://sapper-puzzle.web.app/',
    image: sapperImg,
  },
]
