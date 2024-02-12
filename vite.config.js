import { resolve } from 'path'

import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        'sign-in': resolve(__dirname, 'src/sign-in.html'),
        'sign-up': resolve(__dirname, 'src/sign-up.html'),
        'profile': resolve(__dirname, 'src/profile.html'),
        'chat': resolve(__dirname, 'src/chat.html'),
        'error-404': resolve(__dirname, 'src/error-404.html'),
        'error-500': resolve(__dirname, 'src/error-500.html')
      }
    }
  },
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
    context: {
      username: 'John'
    }
  })],
})