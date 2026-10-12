import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // Defaults to the GitHub Pages subpath. Server builds set DEPLOY_BASE=/ (see build:server).
  base: process.env.DEPLOY_BASE || '/dumas-group/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})