/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Custom breakpoint 'xs' with a minimum width of 320px
      },
    },
  },
  plugins: [],
};
