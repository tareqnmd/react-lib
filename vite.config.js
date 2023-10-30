import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	build: {
		outDir: 'dist',
		lib: {
			name: 'React Component Library',
			entry: {
				index: './src/index.js',
			},
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react'],
		},
	},
	plugins: [libInjectCss()],
});
