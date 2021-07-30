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
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
}
