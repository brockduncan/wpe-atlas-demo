/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./wp-templates/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#de1d2a",
        primaryLight: "#f1f2f3",
        secondary: "#153e60",
        secondaryLight: "#a5c9df",
      },
      backgroundImage: {
        "home-bg": "url('/img/blue-background-child.webp')",
        "page-bg-mobile": "url('/img/bg-centered-mobile.webp')",
        "page-bg-inside": "url('/img/angle-bg-centered.webp')",
      },
    },
  },
  plugins: [],
};
