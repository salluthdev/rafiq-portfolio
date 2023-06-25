/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hellix: ["Hellix Regular", "sans-serif"],
        "hellix-medium": ["Hellix Medium", "sans-serif"],
        "hellix-semibold": ["Hellix SemiBold", "sans-serif"],
        "hellix-bold": ["Hellix Bold", "sans-serif"],
      },
      colors: {
        grey1: "#ADADAD",
      },
    },
  },
  plugins: [],
};
