import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	paths: {
		'@/*': ['./src/*'],
		'@styles/*': ['src/styles/*'],
		'@types/*': ['src/types/*'],
		'@components/*': ['src/components/*'],
		'@apis/*': ['src/apis/*'],
	},
	server: {
		port: 3000,
	},
});
