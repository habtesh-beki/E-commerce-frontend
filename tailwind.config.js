/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "color_primary": "#EEF1F8",
        "color_secondary":"#FFFFFF",
        "color_btn":"#3bb28f",
        "color_hover":"#2aafa9",
        "color_notify":"#FF4040"
      },
      fontFamily:{
        inria:["Inria Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

