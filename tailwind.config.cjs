/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "350px",
      ss: "650px",
      sm: "800px",
      md: "900px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
