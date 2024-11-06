/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEBF00",
        secondary: "#B52B1D",
        tertiary: "#BD1F17",
        "text-primary": "#181818",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        display: ["Bebas Neue", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      boxShadow: {
        shadow: "-5px 22px 26px 0px rgba(95, 95, 95, 0.25)",
        icon: "0px 7px 16px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
