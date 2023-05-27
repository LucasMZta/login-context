/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-10': '#1A202C',
        'dark-20': '#F7FAFC',
        'brand-blue': '#2B6CB0',
        'brand-green': '#04C45C'
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

