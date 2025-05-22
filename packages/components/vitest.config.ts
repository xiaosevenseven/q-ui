/// <reference types="vitest" />
import { defineConfig } from 'vite'
import * as vue from '@vitejs/plugin-vue'
import * as vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    globals: true,
    environment: 'jsdom',
  }
})