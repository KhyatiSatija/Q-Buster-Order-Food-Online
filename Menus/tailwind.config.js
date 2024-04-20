/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#F45E5E",
        "primary-blue": "#63cefc",
        "primary-beige": "#F7D297",
        "primary-green": "#74C365",
        "primary-orange": "#FC9A63",
        "secondary": "#333333",
        "tertiary": "#000000",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      rotate: {
        22.5: "22.5deg",
        45: "45deg",
        67.5: "67.5deg",
        90: "90deg",
        112.5: "112.5deg",
        135: "135deg",
        157: "157deg",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};