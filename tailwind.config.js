module.exports = {
  // ...existing code...
  theme: {
    extend: {
      colors: {
        'lavender': {
          50: '#faf9fc',
          100: '#f3f0f8',
          200: '#e9e3f0',
          300: '#d8cbe4',
        },
        'stone': {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        'rose': {
          25: '#fef7f7',
          50: '#fee2e2',
          100: '#fbcfe8',
          200: '#f9a8d4',
          300: '#f472b6',
          400: '#ec4899',
          500: '#db2777',
          600: '#be185d',
          700: '#9d174d',
          800: '#831843',
          900: '#6b1f3d',
        },
        'pink': {
          25: '#fef7f6',
          50: '#fce8e8',
          100: '#f9b5d1',
          200: '#f17ebd',
          300: '#ec4899',
          400: '#db2777',
          500: '#be185d',
          600: '#9d174d',
          700: '#831843',
          800: '#6b1f3d',
          900: '#581c3d',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.1em',
        'widest': '0.3em',
      }
    }
  }
}