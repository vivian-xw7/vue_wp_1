/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Mono', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'sm': 14/16 + 'rem',
        'base': 16/16 + 'rem',
        'lg': 18/16 + 'rem',
        'xl': 20/16 + 'rem',
        '2xl': 24/16 + 'rem',
        '3xl': 32/16 + 'rem',
        '4xl': 40/16 + 'rem',
        '5xl': 48/16 + 'rem',
        '6xl': 64/16 + 'rem',
        '7xl': 80/16 + 'rem',
        '8xl': 96/16 + 'rem',
      },
    },
  },
  plugins: [],
}

