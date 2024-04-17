import react from '@vitejs/plugin-react-swc';
// import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Specify your custom size limit in kilobytes
  },
  plugins: [react()]
  // plugins: [vue({
  //   template: {
  //     compilerOptions: {
  //       isCustomElement: tag => tag.startsWith('my-')
  //     }
  //   }
  // })]
});


