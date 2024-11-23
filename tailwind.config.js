/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-diagonal': 'gradient-diagonal 6s ease infinite',
        'gradient-border': 'gradient-border 4s ease infinite',
        'border-pulse': 'border-pulse 2s ease-in-out infinite',
        'gradient-background': 'gradient-background 4s ease infinite', // Animación de fondo
      },
      keyframes: {
        'gradient-diagonal': {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        'gradient-border': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        // Nueva animación de pulsación en el borde
        'border-pulse': {
          '0%': { borderColor: '#7b4dff' },
          '50%': { borderColor: '#5600a6' },
          '100%': { borderColor: '#7b4dff' },
        },
        'gradient-background': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      colors: {
        'purple-light': '#8254ff',  // Morado claro
        'purple-dark': '#50009b',   // Morado oscuro
      },
    },
  },
  plugins: [],
};
