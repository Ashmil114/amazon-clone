/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: "#f08804",
          1: "#f3a847",
          hover: "#f3a847",
        },
        dark:{
          DEFAULT:"#0f1111",
          1:"#131921",
          2:"#232f3e"
        },
      },
      fontFamily: {
        ember: ["AmazonEmber", "sans-serif"],
      },
    },
  },
  plugins: [],
}

