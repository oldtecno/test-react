/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shadow': "url('./src/assets/bg-shadow.png')",
        'hero': "url('./src/assets/banner-main.png')",
      }
    
    }
  },
  plugins: [],
}
