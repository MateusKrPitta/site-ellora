/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ellora-cream': '#FFF8F5',
        'ellora-blush': '#FFECE5',
        'ellora-peach': '#FFDDBF',
        'ellora-deep': '#2C201C',
        'ellora-dark': '#201A18',
        'ellora-terracotta': '#855238',
        'ellora-terracotta-dark': '#704129',
        'ellora-gold': '#B9926D',
        'ellora-gold-light': '#C5A880',
        'ellora-rose': '#E6B3A1',
        'ellora-sand': '#F8EBE6',
        'ellora-surface': '#FDFBF7',
        'ellora-border': '#E8DFD8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 45px -15px rgba(44, 32, 28, 0.08)',
        'luxury-hover': '0 25px 50px -12px rgba(133, 82, 56, 0.18)',
        'glow-gold': '0 0 25px rgba(185, 146, 109, 0.35)',
        'warm-sm': '0 4px 20px -2px rgba(133, 82, 56, 0.06)',
      },
      letterSpacing: {
        'luxury': '0.22em',
        'subtle': '0.08em',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3.2s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 10px 25px -5px rgba(133, 82, 56, 0.3)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 16px 32px -4px rgba(133, 82, 56, 0.45)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
