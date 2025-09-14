import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  // 프로젝트 페이지로 배포 시 레포 이름으로 꼭 맞추기
  base: '/mobile-wedding-invitation/',
});
