import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    files: {
          routes: 'src/app/routes',
          appTemplate: 'src/app/app.html'
        }
	}
};

export default config;
