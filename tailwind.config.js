/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        Inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        saffron: '#F59E0B',
        cream: '#FAF3E0',
        brown: '#7C4A25',
        black: '#1C1C1C',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};