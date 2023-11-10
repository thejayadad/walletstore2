module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#bbb891',
        'secondary': '#c8c8c8',
        'background': '#242325',
        'oran': '#dc965a',
        'sage': '#bbb891',
      },
      fontFamily: {
        'jost': ['var(--ff-jost)', 'sans-serif'],
      },
      fontSize: {
        '1': '2.5rem',
        '2': '1.75rem',
        '3': '1.625rem',
        '4': '1.5rem',
        '5': '1.375rem',
        '6': '1.25rem',
        '7': '1.125rem',
        '8': '.938rem',
        '9': '.875rem',
        '10': '.813rem',
      },
      fontWeight: {
        '500': '500',
        '600': '600',
      },
      spacing: {
        'section': '60px',
      },
      transitionProperty: {
        '1': '0.25s ease',
        '2': '0.75s ease',
      },
      cubicBezier: {
        'out': 'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
        'in': 'cubic-bezier(0.33, 0.85, 0.56, 1.02)',
      },
    },
  },
  plugins: [],
}
