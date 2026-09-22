import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    // reactRouter() provides the React plugin itself (JSX + Fast Refresh), so
    // @vitejs/plugin-react must not be added alongside it.
    reactRouter(),
    tailwindcss(),
  ],
})
