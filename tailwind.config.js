// tailwind.config.js
module.exports = {
  important: true,
  corePlugins: {
    // ...
  container: false,
  },
  theme: {
    fontSize: {
      '6': '2.5rem',
      '5': '2rem',
      '4': '1.5rem',
      '3': '1.4rem',
      '2': '1.3rem',
      '1': '1.2rem'
    },
    padding: {
      '4': '3rem',
      '3': '2.2rem',
      '2': '2rem',
      '1': '1.4rem'
    },
    margin: {
      '5': '3rem',
      '4': '2.2rem',
      '3': '2rem',
      '2': '1.4rem',
      '1': '0rem'
    },
    inset: {
      '1/2': '50%',
      '-1/2': '-50%',
      '0': '0'
    },
    screens: {
      'sm': {'max': '576px'},
      'md': {'min': '577px', 'max': '768px'},
      'lg': {'min': '768px', 'max': '1200px'},
      'xl': {'min': '1201px'},
    }
  }
}