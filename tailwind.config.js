/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'github': ['Space Mono', 'monospace']
      },
      colors: {
        'github-blue': {
          'azure': '#0079FF',
          'queen': '#4B6A9B',
          'yankees': '#1E2A47'
        },
        'github-gray': {
          'slate': '#697C9A'
        },
        'github-gunmetal': {
          'main': '#2B3442',
          'dark': '#141D2F'
        },
        'github-white': {
          'main': '#FEFEFE',
          'ghost': '#F6F8FF'
        }
      },
    },
  },
  plugins: [],
}
