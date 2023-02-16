import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import reactChartjs2 from 'react-chartjs-2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-chartjs-2', 'chart.js/auto']
    }
  },
  optimizeDeps: {
    include: [
      'react-chartjs-2',
    ],
  },
})
