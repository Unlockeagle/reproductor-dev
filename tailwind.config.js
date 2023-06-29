/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        'darkGreen': '#1DB956',
        'green': '#1FD662',
        'white': '#FEFEFE',
        'black': '#191313'
      },

      fontFamily: {
        mainFonts: ['Montserrat', 'sans-serif'],
        mainExtrabold : ['Monserrat_Bold','sans-serif'],
      }

      




    },
  },
  plugins: [],
}

