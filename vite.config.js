import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base at root so assets resolve correctly on Vercel/Render
  base: '/',
  plugins: [react()],
})
