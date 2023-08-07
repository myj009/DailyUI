// /** @type {import('tailwindcss').Config} */

// The designs were created to the following widths:

// - Mobile: 375px
// - Desktop: 1440px

// ## Colors

// - White: hsl(0, 0%, 100%)
// - Light gray: hsl(212, 45%, 89%)
// - Grayish blue: hsl(220, 15%, 55%)
// - Dark blue: hsl(218, 44%, 22%)

// ## Typography

// ### Body Copy

// - Font size (paragraph): 15px

// ### Font

// - Family: [Outfit](https://fonts.google.com/specimen/Outfit)
// - Weights: 400, 700

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors : {
        white: 'hsl(0, 0%, 100%)',
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)',
      },
      fontFamily: {
        outfit: "'Outfit', sans-serif",
      },
    },
  },
  plugins: [],
}

