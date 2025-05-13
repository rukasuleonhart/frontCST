import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Importação do plugin React
import svgr from 'vite-plugin-svgr' // Importação do plugin SVGR

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0', // Permite que o servidor escute em todas as interfaces de rede
  },
})
