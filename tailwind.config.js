/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'handwritten': ['Kalam', 'cursive'],
        'primary': ['Inter', 'sans-serif'],
      },
      colors: {
        cosmic: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        space: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#1a0b2e',
        },
        stellar: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#0a0e1a',
        },
      },
      opacity: {
        '3': '0.03',
        '4': '0.04',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'astronaut-float': 'astronaut-float 10s ease-in-out infinite',
        'rocket-fly': 'rocket-fly 15s linear infinite',
        'butterfly-flutter': 'butterfly-flutter 8s ease-in-out infinite',
        'saturn-rotate': 'saturn-rotate 30s linear infinite',
        'sphere-pulse': 'sphere-pulse 4s ease-in-out infinite',
        'skill-fill': 'skill-fill 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)' },
        },
        'astronaut-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-30px) translateX(10px) rotate(5deg)' },
          '50%': { transform: 'translateY(-20px) translateX(-10px) rotate(-3deg)' },
          '75%': { transform: 'translateY(-40px) translateX(5px) rotate(2deg)' },
        },
        'rocket-fly': {
          '0%': { transform: 'translateX(-100px) translateY(20px) rotate(-10deg)' },
          '50%': { transform: 'translateX(50vw) translateY(-30px) rotate(5deg)' },
          '100%': { transform: 'translateX(calc(100vw + 100px)) translateY(10px) rotate(-5deg)' },
        },
        'butterfly-flutter': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '25%': { transform: 'translateY(-15px) rotate(5deg) scale(1.1)' },
          '50%': { transform: 'translateY(-25px) rotate(-3deg) scale(0.95)' },
          '75%': { transform: 'translateY(-10px) rotate(3deg) scale(1.05)' },
        },
        'saturn-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'sphere-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.03' },
          '50%': { transform: 'scale(1.1)', opacity: '0.08' },
        },
        'skill-fill': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--skill-percentage)' },
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #000000 0%, #1a0b2e 25%, #0a0e1a 50%, #000000 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-lg': '0 0 40px rgba(168, 85, 247, 0.4)',
      }
    },
  },
  plugins: [],
};