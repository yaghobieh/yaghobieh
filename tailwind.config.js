/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f7f6f3',
          100: '#efede7',
          200: '#dedad0',
          300: '#c4bead',
          400: '#8f887a',
          500: '#6b6559',
          600: '#4d483f',
          700: '#2e2b26',
          800: '#1c1a17',
          900: '#12110f',
          950: '#0b0a09',
        },
        ember: {
          300: '#ffb98a',
          400: '#ff9a5c',
          500: '#f97a32',
          600: '#e0611b',
          700: '#b34a12',
        },
      },
      maxWidth: {
        page: '76rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -3%, 0) scale(1.05)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        drift: 'drift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
