import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f9f506",
        background: "#f8f8f5",
        "background-light": "#f8f8f5",
        "background-dark": "#1a1a15",
        "surface-light": "#ffffff",
        "surface-dark": "#262620",
        text: "#181811",
        "text-main": "#181811",
        "text-muted": "#8c8b5f",
        "border-color": "#e6e6db",
      },
      fontFamily: {
        display: ["Spline Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
