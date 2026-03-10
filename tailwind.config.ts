import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fdf8f0",
          100: "#f9edd8",
          200: "#f2d9b0",
          300: "#e8c07f",
          400: "#dca04d",
          500: "#d4882d",
          600: "#c07020",
          700: "#9f571c",
          800: "#81451e",
          900: "#6a3a1b",
        },
        olive: {
          50: "#f6f7f0",
          100: "#eaecdb",
          200: "#d3d9b9",
          300: "#b5bf8e",
          400: "#98a668",
          500: "#7d8d4a",
          600: "#627039",
          700: "#4c572e",
          800: "#3e4727",
          900: "#353c23",
        },
        terra: {
          50: "#fdf4f0",
          100: "#fbe5dc",
          200: "#f6c9b8",
          300: "#f0a488",
          400: "#e77555",
          500: "#dc5530",
          600: "#c94023",
          700: "#a7321c",
          800: "#8a2b1c",
          900: "#72271b",
        },
        cream: "#faf7f2",
        charcoal: "#2c2a26",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
