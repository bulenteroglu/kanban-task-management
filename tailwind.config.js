/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue-marguerite': '#635FC7',
      'melrose': '#A8A4FF',
      'black-russian': '#000112',
      'charade': '#20212C',
    },
    extend: {},
  },
  plugins: [],
};
