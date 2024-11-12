/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEBF00",
        secondary: "#BD1F17",
        tertiary: "#BD1F17",
        "text-primary": "#0A1425",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        display: ["Bebas Neue", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      boxShadow: {
        shadow: "-5px 22px 26px 0px rgba(95, 95, 95, 0.25)",
        icon: "0px 7px 16px 0px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        "4xl": "40px",
        "6xl": "62px",
        "9xl": "120px",
      },
      lineHeight: {
        56: "56px",
        130: "130",
        62: "62px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      spacing: {
        8: "30px",
        30: "120px",
        19: '74px'
      },
    },
  },
  plugins: [],
};
