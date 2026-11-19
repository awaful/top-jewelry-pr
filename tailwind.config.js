/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#F7F5F0",
          surface: "#FFFFFF",
          dark: "#171717",
          charcoal: "#222222",
          muted: "#77736D",
          champagne: "#B89A65",
          beige: "#EFECE4",
          border: "#E5E1D8",
          gold: "#B89A65",
          goldLight: "#E6D3B3",
        },
        luxury: {
          deep: "#080808",
          surface: "#111111",
          elevated: "#161616",
          gold: "#C6A36A",
          "gold-hover": "#D4B47F",
          champagne: "#E8D7B5",
          white: "#F5F1E9",
          muted: "#888888",
          border: "#222222",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "'Playfair Display'", "Georgia", "serif"],
        sans: ["var(--font-inter)", "'Inter'", "-apple-system", "sans-serif"],
        cinzel: ["'Cinzel'", "'Playfair Display'", "Georgia", "serif"],
      },
      letterSpacing: {
        luxury: "0.25em",
        wide: "0.18em",
      },
    },
  },
  plugins: [],
};
