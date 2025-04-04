import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import {tscWatch} from 'vite-plugin-tsc-watch';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tscWatch(), tsconfigPaths()],
	appType: 'spa',
});
