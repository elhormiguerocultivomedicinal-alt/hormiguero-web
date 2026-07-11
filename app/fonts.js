import { Bricolage_Grotesque, Baloo_2, Work_Sans } from "next/font/google";

// Stand-ins for the brand's real fonts (Explorer / Cocogoose), which aren't
// available as licensed files yet. Swap these imports for next/font/local
// pointing at the real files later — nothing else in the codebase needs to
// change since components only ever reference the semantic tokens below.
export const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

export const heading = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

export const body = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});
