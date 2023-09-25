/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx}",
    "./src/screens/**/*.{js,jsx}",
    "./src/**/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette1: "#2E4057",
        palette2: "#B2675E",
        palette3: "#FFFBFF",
        palette4: "#65B891",
        palette5: "#558C8C",
        darkgreen: "#0F4D38",
        body: "#1E1E1E",
      },
      fontFamily: {
        poppins: ["Poppins"],
        quantico: ["Quantico"],
      },
    },
  },
  plugins: [],
};
