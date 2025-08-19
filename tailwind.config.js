/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'solarpunk': {
          green: '#00ff88',
          blue: '#00aaff', 
          orange: '#ff8800',
          dark: '#0a0a0a',
          light: '#f0fff0'
        }
      },
      fontFamily: {
        'futura': ['Futura', 'Century Gothic', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88' },
          '100%': { 'box-shadow': '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88' }
        }
      }
    },
  },
  plugins: [],
}