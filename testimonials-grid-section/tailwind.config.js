module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'moderate-violet': 'hsl(263, 55%, 52%)',
        'very-dark-blakish-blue': 'hsl(219, 29%, 14%)',
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'custom-white': 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(0, 0%, 81%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        primary: ['Rubik', 'sans-serif']
      },
      gridTemplateRows: {
        app: 'auto 1fr auto',
      },
      zIndex: {
        '-10': '-10',
      },
      maxWidth: {
        desktop: '1440px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
