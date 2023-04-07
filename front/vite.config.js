import { sveltekit } from '@sveltejs/kit/vite';
import { normalizePath } from 'vite';
import path from 'path'
/** @type {import('vite').UserConfig} */
const config = {
	root: normalizePath(path.resolve('./')),
	resolve: {
		alias: {
			process: 'process'
		}
	},
	plugins: [sveltekit()]
};

export default config;
