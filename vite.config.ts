import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/icons/', './src/lib/images/'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						// by default svgo removes the viewBox which prevents svg icons from scaling
						// not a good idea! https://github.com/svg/svgo/pull/1461
						params: { overrides: { removeViewBox: false } }
					}
				]
			}
		})
	]
};

export default config;
