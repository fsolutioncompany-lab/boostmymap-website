/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neonPink: '#F06292',
        neonTurquoise: '#009688',
        darkBg: '#121212',
        darkSecondary: '#1E1E1E',
      },
      boxShadow: {
        'neon-pink': '0 0 15px #F06292',
        'neon-turquoise': '0 0 15px #009688',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #F06292' },
          '100%': { boxShadow: '0 0 20px #009688' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'text-neonPink',
    'text-neonTurquoise',
    'hover:text-neonPink',
    'hover:text-neonTurquoise',
  ],
};