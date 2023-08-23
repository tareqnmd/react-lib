import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'dist',
		lib: {
			entry: {
				index: './src/index.js',
				button: './src/button.js',
				input: './src/input.js',
			},
		},
		formats: ['es', 'cjs'],
		rollupOptions: {
			external: ['react'],
		},
	},
});
