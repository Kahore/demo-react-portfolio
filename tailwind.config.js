/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans Condensed', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
