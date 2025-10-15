const { keyframes } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes:{
        gradientShift:{
          '0%, 100%': { backgroundPosition: '0% 50%'},
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation:{
        gradientShift: 'gradientShift 15s ease infinite',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'], 
  },
};
