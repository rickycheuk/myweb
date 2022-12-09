/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'xl': '0 15px 20px rgba(0, 255, 255, 0.5)',
        'md': '0 5px 5px rgba(0, 255, 255, 0.5)'
      }
    },
  },
  plugins: [],
}
