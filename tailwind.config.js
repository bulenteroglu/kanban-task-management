/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "blue-marguerite": "#635FC7",
      melrose: "#A8A4FF",
      "black-russian": "#000112",
      charade: "#20212C",
      white: "#ffffff",
      selago: "#F4F7FD",
      "medium-grey": "#828FA3",
    },
    extend: {},
  },
  plugins: [],
};
