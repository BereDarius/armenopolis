// import {
//   Gentium_Book_Plus as FontSerif,
//   Open_Sans as FontSans,
// } from "next/font/google";

import {
  PT_Serif as FontSerif,
  PT_Sans_Narrow as FontSans,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  fallback: ["Tahoma", "Verdana", "sans-serif"],
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
