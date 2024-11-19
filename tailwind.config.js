import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#F9F5EE",
            foreground: "#462115",
            default: {
              100: "#F6E2D0",
              200: "#EDC2A5",
              300: "#CB8C6E",
              400: "#985641",
              500: "#541F14",
              600: "#48140E",
              700: "#3C0B0A",
              800: "#300608",
              900: "#280308",
              DEFAULT: "#541F14",
              foreground: "#F6E2D0",
            },
            primary: {
              100: "#F9F5EE",
              200: "#F4EBDE",
              300: "#DED1C0",
              400: "#BEAE9E",
              500: "#938172",
              600: "#7E6453",
              700: "#694A39",
              800: "#553224",
              900: "#462115",
              DEFAULT: "#938172",
              foreground: "#F9F5EE",
            },
          },
        },
        dark: {
          colors: {
            background: "#280308",
            foreground: "#F9F5EE",
            default: {
              100: "#613212",
              200: "#76451E",
              300: "#926030",
              400: "#AF7D46",
              500: "#CC9E61",
              600: "#E0BE88",
              700: "#EFD5A4",
              800: "#F9EAC5",
              900: "#FCF5E1",
              DEFAULT: "#FCF5E1",
              foreground: "#613212",
            },
            primary: {
              100: "#462115",
              200: "#553224",
              300: "#694A39",
              400: "#7E6453",
              500: "#938172",
              600: "#BEAE9E",
              700: "#DED1C0",
              800: "#F4EBDE",
              900: "#F9F5EE",
              DEFAULT: "#F9F5EE",
              foreground: "#462115",
            },
          },
          // layout: {
          //   disabledOpacity: "0.3",
          //   radius: {
          //     small: "4px",
          //     medium: "6px",
          //     large: "8px",
          //   },
          //   borderWidth: {
          //     small: "1px",
          //     medium: "2px",
          //     large: "3px",
          //   },
          // },
        },
      },
    }),
  ],
};
