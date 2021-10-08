module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    colors:{
      green: {
        dark:"#1F6566",
        DEFAULT: '#C4D6B7',
        light: '#E8F1E3',
        lightest: '#F8FDF6',
      }
    }
  },
  fonts: {
    body: [],
    heading: [],
    monospace: [],
  }, 
  variants: {
    extend: {},
  },
  plugins: [],
}
