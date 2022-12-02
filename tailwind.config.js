/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#aa1d4e",
        secondary: "#1a5a95",
        background: "#f8e9bb",
        contrast: "#170312",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        beldaCon: ["belda-condensed", "sans-serif"],
        beldaExt: ["belda-extended", "sans-serif"],
        belda: ["belda-normal", "sans-serif"],
        josefin: ["Josefin Slab", "sans-serif"],
        roboto: ["Roboto Slab", "sans-serif"],
        zilla: ["Zilla Slab", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
