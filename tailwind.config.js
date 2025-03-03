/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "glass-bg": "rgba(255, 255, 255, 0.08)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
