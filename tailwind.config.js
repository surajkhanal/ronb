module.exports = {
  purge: {
    content: [
      'index.html',
      'single.html',
      'contact.html',
      'app.js',
    ],
  },
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
      },

    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp'),],
}
