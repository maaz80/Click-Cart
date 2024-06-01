/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: 'rgb(69 19 29)',  // Adding the custom RGB color
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        'red-800': '#991b1b',
        'pink-900': '#831843',
      },
  
    },
  },
  plugins: [],
}