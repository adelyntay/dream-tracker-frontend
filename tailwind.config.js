/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
  },
  colors: {
      orange: "#ff8906",
      red: "#f25f4c",
      pink: "#e53170",
      black: "#0f0e17",
      white: "#fffffe"
    },
  },
  plugins: [],
};