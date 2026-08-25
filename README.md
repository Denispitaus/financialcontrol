# 💰 Контроль финансов

> Веб-приложение для учёта личных доходов и расходов с визуализацией на кольцевой диаграмме. Данные сохраняются в localStorage.

---

## 🚀 Демо

**Живой сайт:** [denispitaus.github.io/financialcontrol](https://denispitaus.github.io/financialcontrol/)

---

## ✨ Фишки проекта

- 💾 **Локальное хранилище** — все данные (категории, суммы, даты) сохраняются в браузере
- 📊 **Кольцевая диаграмма на SVG** — визуализация доходов и расходов без внешних библиотек
- 📅 **Фильтрация по месяцам** — переключайте месяцы и просматривайте статистику за нужный период
- ➕ **Добавление записей** — укажите название категории, сумму и день месяца
- 📈 **Автоматический расчёт** — доходы, расходы, баланс и общее количество категорий обновляются в реальном времени
- 🧩 **Модульная архитектура** — код организован по методологии Feature-Sliced Design (FSD)
- 📱 **Адаптивный дизайн** — корректно отображается на всех устройствах

---

## 🛠 Технологии

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

- **Frontend:** SvelteKit, JavaScript
- **Стили:** Чистый CSS с CSS-переменными
- **Сборка:** Vite
- **Роутинг:** Filesystem-based routing (встроенный в SvelteKit)
- **Графики:** Самописные SVG-диаграммы
- **Хранилище:** localStorage
- **Анимации:** Svelte transitions (`fade`)
- **Деплой:** GitHub Pages (адаптер `@sveltejs/adapter-static`)

---

## 📁 Структура проекта

Проект организован по методологии **Feature-Sliced Design** (FSD):

**Что где лежит:**

- `app/` — точка входа в приложение + настройки роутинга
- `pages/` — страницы (Главная, Статистика)
- `widgets/` — самостоятельные блоки (Header, Footer, График)
- `features/` — функциональные модули (добавление операции, фильтрация по месяцам)
- `entities/` — бизнес-сущности
- `shared/` — переиспользуемые компоненты (кнопки, иконки, утилиты, Title)

---

## 📊 Как работает график

Кольцевая диаграмма построена на чистом **SVG**:

- 🎨 **Цвета:** доходы — зелёный (`#01ff01`), расходы — красный (`#ff0101`)
- 🔄 **Реактивность:** Svelte `$derived` автоматически пересчитывает данные
- 📊 **Легенда:** отображает суммы доходов и расходов
- 💰 **Центр:** показывает чистый итог (доходы минус расходы)
- ✨ **Анимация:** Svelte `transition:fade` при появлении сегментов

---

## ⚡️ Установка и запуск (локально)

```bash
# 1️⃣ Клонируем репозиторий
git clone https://github.com/DenisPitaus/financialcontrol.git

# 2️⃣ Переходим в папку проекта
cd financialcontrol

# 3️⃣ Устанавливаем все зависимости
npm install

# 4️⃣ Запускаем режим разработки
npm run dev
