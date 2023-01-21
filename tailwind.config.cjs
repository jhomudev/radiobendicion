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
         },
         keyframes: {
            rotateMedium: {
               "0%": { transform: "rotate(-10deg)" },
               "100%": { transform: "rotate(10deg)" },
            },
            rotateComplete: {
               "0%": { transform: "rotate(0)" },
               "100%": { transform: "rotate(360deg)" },
            },
         },
         animation: {
            balance: "rotateMedium 2s ease-in-out alternate infinite",
            discRotate: "rotateComplete 5s infinite linear ",
         },
      },
      plugins: [],
   },
};
