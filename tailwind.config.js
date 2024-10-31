/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue'],
      },
      colors: {
        gray: {
          800: "#014aad",
        }
      }
    },
  },
  plugins: [],
};
