/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            montserrat: ['"Montserrat"', "sans-serif"],
            rale: ['"Raleway"', "sans-serif"],
            advent: ['"Advent Pro"', "sans-serif"],
            bahiana: ['"Bahiana"', "cursive"],
            crimson: ['"Crimson Pro"', "serif"],
         },
         colors: {
            c_main: {
               normal: "#7c2ad3",
               transparent: "rgba(124, 42, 211,0.6)",
            },
            c_red: "#d25d8a",
            c_pink: "#c43adc",
            c_violet: "#884ce1",
            c_cyan: "#37d8d8",
            c_dark: "#1A0E26",
         }
      },
      plugins: [],
   },
};
