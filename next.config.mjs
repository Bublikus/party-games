/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'doodle-jump.web.app' },
      { hostname: 'little-tetris-game.web.app' },
      { hostname: 'fifteen-game.web.app' },
      { hostname: 'ascii-snake-game.web.app' },
      { hostname: 'sapper-puzzle.web.app' },
    ],
  },
}

export default nextConfig
