const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    fontFamily: {
      "open-sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
      "mouse-memoirs": ["Mouse Memoirs", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#1471EE",
          50: "#DEEBFD",
          100: "#CBE0FB",
          200: "#9BC3F8",
          300: "#70AAF5",
          400: "#418DF1",
          500: "#1471EE",
          600: "#0E5ABE",
          700: "#0A418A",
          800: "#062956",
          900: "#021021"
        },
        orange: {
          DEFAULT: "#F1A125",
          50: "#FDF2E2",
          100: "#FCE8CA",
          200: "#F9D7A4",
          300: "#F6C479",
          400: "#F4B14E",
          500: "#F1A125",
          600: "#CE810D",
          700: "#955D0A",
          800: "#5B3906",
          900: "#261802"
        }
      }
    }
  },
  plugins: []
}
