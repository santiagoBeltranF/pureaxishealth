/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      'gold-pure': '#D4AF37', // Este es el dorado del botón
    }
  }
},
  plugins: [],
}