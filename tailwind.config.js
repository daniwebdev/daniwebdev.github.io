/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          '50': '#edf2f5',
          '100': '#dde5eb',
          '200': '#abbbc9',
          '300': '#7e93a8',
          '400': '#3c4d69',
          '500': '#10172a',
          '600': '#0c1224',
          '700': '#090e1f',
          '800': '#060a1a',
          '900': '#030612',
          '950': '#01030d'
        }
      }
    },
  },
  plugins: [],
}

