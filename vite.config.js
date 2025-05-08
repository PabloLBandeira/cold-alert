import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // base: command === 'build' ? '/cold-alert/' : '/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
}))


