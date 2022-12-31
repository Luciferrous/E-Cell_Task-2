/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      animation: {
        'spin-slow': 'spin 0.2s linear 0.5',
        
      }
      
      
    },
  },
  plugins: [],
}
