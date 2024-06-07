/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'preview-gradient': 'linear-gradient(90deg, #af2896, #509bf5)',
      }
    },
  },
  plugins: [],
}

