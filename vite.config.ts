import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

const pages = [
  '/servizi',
  '/team',
  '/contatti',
  '/prenota',
  '/privacy',
]

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://coffeewaredesigns.com',
      dynamicRoutes: pages,
    }),
  ],
})
