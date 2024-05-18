import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Party Games',
    short_name: 'party-games',
    description: 'A collection of party games to play with friends',
    theme_color: '#8936FF',
    background_color: '#2EC6FE',
    display: 'fullscreen',
    orientation: 'portrait-primary',
    start_url: '/',
    icons: [
      { src: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { src: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
