/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#28B30F',
        'secondary':'#D5FFCF',
        'danger': '#E3342F',
      },
      fontFamily:{
        league:["League Spartan" , "sans-serif"],
        poppins:["Poppins" , "sans-serif"],
      },
    },
  },
  plugins: [],
}