import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
  },
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      strict: false
    }),
    files: {
      routes: 'src/app/routes',
      appTemplate: 'src/app/index.html'
    },
    paths: {
      base: '/financialcontrol' // ✅ Имя вашего репозитория
    },
    prerender: {
      handleHttpError: () => {}
    }
  }
};

export default config;
