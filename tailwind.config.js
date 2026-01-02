export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        secondary: '#1e40af',
        accent: '#0284c7',
      },
      animation: {
        'fall': 'fall 2s linear forwards',
      },
      keyframes: {
        fall: {
          '0%': {
            transform: 'translateY(-10vh) rotate(0deg)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(100vh) rotate(360deg)',
            opacity: '0'
          },
        }
      }
    },
  },
  plugins: [],
}
