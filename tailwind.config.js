/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        position: {
            sticky: 'sticky',
        },
        top: {
            '0': '0',
        }
    },
  },
  plugins: [],
}

