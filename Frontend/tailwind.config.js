/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/assets/images/banner.png')",
        'textBanner': "url('/assets/images/textBanner.png')"
      }
    },
  },
  plugins: [],
}

