/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f7ff', 100: '#e0effe', 200: '#bae0fd', 300: '#7dc8fc',
          400: '#38aaf8', 500: '#0e8fe9', 600: '#0271c7', 700: '#035aa1',
          800: '#074d85', 900: '#0c426e', 950: '#082a4a',
        },
        accent: { 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed' },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        gradientShift: { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      },
      boxShadow: {
        'glow': '0 0 30px rgba(14, 143, 233, 0.3)',
        'glow-accent': '0 0 30px rgba(139, 92, 246, 0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
