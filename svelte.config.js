import * as SvelteKit from '@sveltejs/kit';

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** 
 * Svelte Config
 * @type { SvelteKit.Config }
 */
export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		files: {
			appTemplate: 'src/index.html',
			assets: 'src/resources'
		}
	}
};
