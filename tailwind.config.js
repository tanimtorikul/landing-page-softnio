/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FEBF00',
        secondary: '#B52B1D', 
        tertiary: '#BD1F17', 
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        display: ['Bebas Neue', 'cursive'],
        poppins: ['Poppins', 'sans-serif'], 
        raleway: ['Raleway', 'sans-serif'],
      },
      maxWidth: {
        container: '1320px',
      },
    },
  },
  plugins: [],
}
