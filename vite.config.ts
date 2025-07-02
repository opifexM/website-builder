import {TanStackRouterVite} from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import {dirname, resolve} from 'path'
import {fileURLToPath} from 'url'
import { defineConfig } from 'vitest/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({autoCodeSplitting: true}), viteReact()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
