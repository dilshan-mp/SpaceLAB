// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: " translateY(0px)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: " rotate(360deg)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        rotate: "rotate 480s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
    nextui({
      addCommonColors: true,
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      themes: {
        light: {
          colors: {}, // light theme colors
        },
        dark: {
          colors: {}, // dark theme colors
        },
      },
    }),
  ],
};
