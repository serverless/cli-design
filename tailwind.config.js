module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './styles.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#fd5750',
        },
        gray: {
          DEFAULT: '#8c8d91',
        },
        yellow: {
          DEFAULT: '#f3f99d',
        },
        orange: {
          DEFAULT: '#ffa500',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
