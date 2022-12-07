/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "intro-gradient":
          "radial-gradient(ellipse 60% 40% at 40% -20%, #2c3051, transparent)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0, transform: "translateY(-10px)" },
          to: { opacity: 1, transform: "none" },
        },
      },
      animation: {
        "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
      },
    },
  },
  plugins: [],
};
