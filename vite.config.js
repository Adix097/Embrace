import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // GitHub Pages project site: https://adix097.github.io/Embrace/
  base: command === 'build' ? '/Embrace/' : '/',
  plugins: [react(), tailwindcss()],
}))
