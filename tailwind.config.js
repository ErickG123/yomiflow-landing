/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        zinc: { 950: '#09090b' },
        brand: { 400: '#a5b4fc', 500: '#6366f1', 600: '#4f46e5' },
        violet: { 400: '#c4b5fd', 500: '#8b5cf6' },
      },
      boxShadow: { glow: '0 0 80px rgba(99,102,241,.22)' },
    },
  },
  plugins: [],
};
