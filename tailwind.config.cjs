/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "pastel-black": "#2e2f2f",
      whitesmoke: "#f5f5f5",
      "living-coral": "#fe6e61",
      overlay: "rgba(0,0,0,0.4)",
    },
    borderRadius: {
      DEFAULT: "1rem",
    },
    extend: {
      scale: {
        85: ".85",
      },
    },
  },
  plugins: [],
};