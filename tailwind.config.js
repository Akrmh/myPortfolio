/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideTop: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideBottom: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        floatImage: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-24px)" },
        },
      },
      animation: {
        slideRight: "slideRight 1s ease forwards",
        slideLeft: "slideLeft 1s ease forwards",
        slideTop: "slideTop 1s ease forwards",
        slideBottom: "slideBottom 1s ease forwards",
        zoomIn: "zoomIn 1s ease forwards",
        floatImage: "floatImage 4s ease-in-out infinite",
      },
      boxShadow: {
        'custom-glow': '0 0 20px #0ef', // Add the custom glow shadow
      },
      // Glass effect styles
      backgroundImage: {
        'glass-pattern': 'linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        'lg': '10px',
      },
      colors: {
        glassBorder: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
};
