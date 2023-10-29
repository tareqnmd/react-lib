import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	build: {
		outDir: 'dist',
		lib: {
			name: 'Anthill Component Library',
			entry: {
				index: './src/index.js',
				button: './src/button.js',
				icon: './src/icon.js',
			},
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react'],
		},
	},
	plugins: [libInjectCss()],
});
