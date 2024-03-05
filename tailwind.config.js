/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-aside":"#788778",
        "color-border":"#e1e6e1",
        "color-footer":"#9eaa9e",
      }
    },
  },
  plugins: [],
}