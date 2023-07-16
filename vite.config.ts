import path from 'node:path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: [
        '*.spec.*',
        'src/test/*',
        'src/main.tsx',
        'src/example.tsx',
        'src/example.spec.tsx',
      ],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/confetti/index.tsx'),
      name: 'ReactConfettiExplosion',
      formats: ['es', 'umd'],
      fileName: format => `react-confetti-explosion.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-jss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-jss': 'reactJss',
        },
      },
    },
  },
});
