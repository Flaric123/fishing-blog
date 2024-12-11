/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'accent':'#2C6B73',
      'background':'#F3F3F3',
      'foreground-main':'#444444',
      'foreground-detail':'#666666',
      'foreground-dark':'#ffffff',
      'frame':'#d1d1d1',
    },
    fontFamily:{
      'klein': ['Klein Trial', 'Courier'],
      'roboto':['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

