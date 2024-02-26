/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    colors: {
      'very-dark-grey': '#18171F',
      'dark-grey': '#24232C',
      'grey': '#817D92',
      'almost-white': '#E6E5EA',
      'neon-green': '#A4FFAF',
      'yellow': '#F8CD65',
      'orange': '#FB7C58',
      'red': '#F64A4A',
    },
    fontFamily: {
      sans: ['Jet Brains Mono', 'monospace']
    },
    extend: {},
  },
  plugins: [],
}
