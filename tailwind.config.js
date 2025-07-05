module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#001133',
          800: '#012265',
          700: '#013398',
          600: '#3477FE',
          500: '#4E89FE',
          400: '#6799FE',
          300: '#9ABBFE',
          200: '#C2D6FF',
          100: '#E6EEFF',
        },
        gray: {
          900: '#18191B',
          800: '#313235',
          700: '#494B50',
          600: '#61646B',
          500: '#7A7E85',
          400: '#878A92',
          300: '#94979E',
          200: '#AFB1B6',
          100: '#CACBCE',
        },
      },
      backgroundImage: {
        streaks: "url('/img/streaks.png')",
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
