/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8EDF5',
          100: '#C5D0E4',
          200: '#9FB2D2',
          300: '#6B85B8',
          400: '#3D5A9A',
          500: '#1A3B7A',
          600: '#0B1F3A',
          700: '#081629',
          800: '#050F1E',
          900: '#030A15',
        },
        accent: {
          50: '#FFF9E0',
          100: '#FFF1B8',
          200: '#FFE580',
          300: '#FFD74D',
          400: '#FFD11A',
          500: '#FFD700',
          600: '#D4B000',
          700: '#A88A00',
          800: '#7C6600',
          900: '#504200',
        },
        cta: {
          50: '#E0FBE8',
          100: '#B8F5CD',
          200: '#7AEFA0',
          300: '#3DE973',
          400: '#1AE05C',
          500: '#00C853',
          600: '#00A847',
          700: '#008838',
          800: '#006829',
          900: '#00481B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 200, 83, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 200, 83, 0.7)' },
        },
      },
    },
  },
  plugins: [],
};
