import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({}),
	adapter: netlify(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;

