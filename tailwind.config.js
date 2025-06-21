/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'jollof-gold': '#D4A95E',
        'ankara-indigo': '#2E4057',
        'palm-wine-cream': '#F3E9D2',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      animation: {
        'steam-rise': 'steam-rise 3s ease-out infinite',
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'steam-rise': {
          '0%': {
            transform: 'translateY(0) scale(1)',
            opacity: '0.6',
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.1)',
            opacity: '0.8',
          },
          '100%': {
            transform: 'translateY(-40px) scale(1.2)',
            opacity: '0',
          },
        },
        'pulse-gold': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
    },
  },
  plugins: [],
};