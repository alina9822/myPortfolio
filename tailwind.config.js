/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heroBg: "#fdf9f1",
      },
      fontFamily: {
        roboto: ["Roboto", "Outfit"], // Set as default sans-serif
        kalam: ["Kalam", "Outfit"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
