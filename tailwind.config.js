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
    extend: {},
  },
  plugins: [],
  presets: [relumeTailwind]
};
