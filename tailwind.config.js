/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0f14',
        'card-bg': '#111920',
        'primary-cyan': '#22d3ee',
      }
    },
  },
  plugins: [],
}