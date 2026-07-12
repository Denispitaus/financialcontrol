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
      fallback: 'index.html', // ✅ Правильно: HTML файл для SPA
      strict: false // ✅ Добавьте, чтобы игнорировать ошибки
    }),
    files: {
      routes: 'src/app/routes',
      appTemplate: 'src/app/index.html' // ✅ Убедитесь, что файл существует
    },
    paths: {
      base: process.env.NODE_ENV === 'production'
        ? '/financialcontrol' // ✅ Замените на имя вашего репозитория
        : ''
    },
    prerender: {
      handleHttpError: () => {
        // Игнорируем ошибки
        return;
      }
    }
  }
};

export default config;
