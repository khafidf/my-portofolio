/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      xxl: "1440px",
    },
    extend: {},
    color: {
      "color-1": "#2C3333",
      "color-2": "#395B64",
      "color-3": "E7F6F2",
      "color-4": "#A5C9CA",
    },
  },
  plugins: [],
};
