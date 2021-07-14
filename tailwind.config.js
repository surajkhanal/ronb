module.exports = {
  purge: [
    './**/*.html'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mukta: "'Mukta', sans-serif",
        poppins: "'Poppins', sans-serif",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
