/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'
      },
      fontFamily:{
        'inter':'inter',
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
          sans: ["var(--font-opensans)"],
          kanit: ['Kanit', 'sans-serif'],
          rajdhani: ['Rajdhani', 'sans-serif'],
          'courier-prime': ['"Courier Prime"', 'monospace'],
          'roboto': ['Roboto', 'sans-serif'],
          nunito: ['Nunito', 'sans-serif'],
          comfortaa: ['Comfortaa', 'cursive']
          // mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        primary: '#007BFF',
        secondary: '#0056b3',
        accent: '#FF6F61',
        background: '#F8F9FA',
        text: '#212529',
        footerbg: '#343A40',
        navbarbg: '#007BFF',
      },
    },
    keyframes: {
      slideInLeft: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideInRight: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideOutLeft: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      slideOutRight: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(100%)' },
      },
    },
    animation: {
      slideInLeft: 'slideInLeft 0.5s ease-in forwards',
      slideInRight: 'slideInRight 0.5s ease-out forwards',
      slideOutLeft: 'slideOutLeft 0.5s ease-out forwards',
      slideOutRight: 'slideOutRight 0.5s ease-out forwards',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}