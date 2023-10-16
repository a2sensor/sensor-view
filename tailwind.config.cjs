/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#b62f72',
          100: '#ffb4ef',
          200: '#ff97d3',
          300: '#ff7bb7',
          400: '#e75f9d',
          500: '#c94383',
          600: '#ac2369',
          700: '#8f0051',
          800: '#72003a',
          900: '#560025'
        },
        blue: {
          DEFAULT: '#0000ff',
          100: '#b1e7ff',
          200: '#94cbff',
          300: '#77aff9',
          400: '#5a95dc',
          500: '#3b7bc0',
          600: '#1362a5',
          700: '#004b8a',
          800: '#003470',
          900: '#002057'
        },
        green: {
          DEFAULT: '#00ff00',
          100: '#b1f56d',
          200: '#94d952',
          300: '#79bd36',
          400: '#5da115',
          500: '#418700',
          600: '#236d00',
          700: '#005400',
          800: '#003c00',
          900: '#002600'
        },
      },
    },
  },
  variants: {},
  plugins: []
};
