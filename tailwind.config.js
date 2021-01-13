module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/hero.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
