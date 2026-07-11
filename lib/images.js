/**
 * Single source of truth for every image used on the site.
 * Every entry is currently a stock-photo placeholder (see
 * /public/images/CREDITS.md) — swap the `src` here when real
 * cultivation/product photography is available, nothing else
 * in the codebase needs to change.
 */
// logo/logoBadge/logoIcon are all dark-green-on-transparent exports, made
// for placement on light surfaces — on dark forest backgrounds they need a
// `brightness-0 invert` (or equivalent filter) or they're nearly invisible.
export const IMAGES = {
  logo: {
    src: "/brand/logo-lockup-horizontal.png",
    alt: "El Hormiguero",
    width: 4000,
    height: 625,
  },
  logoBadge: {
    src: "/brand/logo-badge-circular.png",
    alt: "El Hormiguero",
    width: 2250,
    height: 2250,
  },
  logoIcon: {
    src: "/brand/logo-icon-radial.png",
    alt: "",
    width: 2250,
    height: 2250,
  },
  canopyBright: {
    src: "/images/canopy-bright.jpg",
    alt: "Cultivo de cannabis a pleno sol",
    placeholder: true,
  },
  canopyDarkTexture: {
    src: "/images/canopy-dark-texture.jpg",
    alt: "Textura de hojas de cannabis",
    placeholder: true,
  },
  canopyMoody: {
    src: "/images/canopy-moody.jpg",
    alt: "Cultivo de cannabis en floración",
    placeholder: true,
  },
  greenhouseRows: {
    src: "/images/greenhouse-rows.jpg",
    alt: "Filas de cultivo en invernadero",
    placeholder: true,
  },
  cultivationTrim: {
    src: "/images/cultivation-trim-01.jpg",
    alt: "Manicurado de flores de cannabis",
    placeholder: true,
  },
  cultivationHarvest: {
    src: "/images/cultivation-harvest-01.jpg",
    alt: "Cosecha de cannabis",
    placeholder: true,
  },
  leafPortrait: {
    src: "/images/leaf-portrait.jpg",
    alt: "Hoja de cannabis",
    placeholder: true,
  },
  leafCloseupDark: {
    src: "/images/leaf-closeup-dark.jpg",
    alt: "Hoja de cannabis en detalle",
    placeholder: true,
  },
  texturePaperGreen: {
    src: "/images/texture-paper-green.jpg",
    alt: "",
    placeholder: true,
  },
  budMacroAmbient: {
    src: "/images/bud-macro-02.jpg",
    alt: "",
    placeholder: true,
  },

  // Producto: Fancy
  productFancy: {
    src: "/images/bud-macro-03.jpg",
    alt: "Flor de la genética Fancy",
    placeholder: true,
  },
};
