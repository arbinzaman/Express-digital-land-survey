/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        propeller: {
          navy: '#0A1120',
          dark: '#0F172A',
          slate: '#1E293B',
          blue: '#0066FF',
          cyan: '#00D4FF',
          emerald: '#10B981',
          lime: '#84CC16',
          magenta: '#D946EF',
          amber: '#F59E0B',
        }
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(0, 102, 255, 0.45)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.4)',
      }
    },
  },
  plugins: [],
}
