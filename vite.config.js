import * as Vite from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

/** 
 * Vite Config
 * @type { Vite.UserConfig }
 */
export default {
	plugins: [
		sveltekit()
	]
};
