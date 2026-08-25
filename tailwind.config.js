/** @type {import('tailwindcss').Config} */

import relumeTailwind from "@relume_io/relume-tailwind";

export default {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Relume's preset uses percentage values here, which Tailwind emits as
    // invalid media-query breakpoints. The base container is already 100%
    // wide, so only cap it at Relume's pixel-based breakpoints.
    container: {
      center: true,
      screens: {
        lg: "992px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        // These aliases feed the existing Relume UI component classes.
        background: {
          primary: "#ffffff",
          secondary: "#f4efe6",
          alternative: "#080101",
        },
        text: {
          primary: "#080101",
          secondary: "#4d4949",
          alternative: "#ffffff",
        },
        border: {
          primary: "#080101",
          "ink-5": "#0801010d",
          alternative: "#ffffff",
        },
        falcon: {
          ink: "#080101",
          "racing-black": "#020403",
          "totem-pole": "#a00b0d",
          surface: "#f2f2f2",
          white: "#ffffff",
          "ink-5": "#0801010d",
          transparent: "#ffffff00",
        },
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Roboto Condensed", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "falcon-body": ["1rem", { lineHeight: "1.6", letterSpacing: "0" }],
        "falcon-h1": ["2.5rem", { lineHeight: "1.1", letterSpacing: "0.025em", fontWeight: "700" }],
        "falcon-h6": ["1.125rem", { lineHeight: "1.2", letterSpacing: "0.01em", fontWeight: "700" }],
      },
      borderRadius: {
        "falcon-button": "0.75rem",
        "falcon-control": "0.5rem",
      },
      maxWidth: {
        "falcon-medium": "35rem",
        "falcon-large": "48rem",
      },
      spacing: {
        "falcon-page": "1.25rem",
        "falcon-section": "4rem",
      },
      backgroundImage: {
        "falcon-primary": "linear-gradient(133.07deg, #a00b0d 0%, #020403 100%)",
      },
    },
  },
  plugins: [],
  presets: [relumeTailwind]
};
