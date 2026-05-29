import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// gh-pages(homepage)와 동일한 base. 미설정 시 배포 환경에서 asset 404 발생.
export default defineConfig({
  base: '/ReactPracticePart1/',
  plugins: [react()],
});
