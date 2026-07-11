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

  // Genéticas — fotografía propia de El Hormiguero (no placeholder)
  productFancy: {
    src: "/images/geneticas/fancy-macro.jpg",
    alt: "Flor de la genética Fancy",
  },
  productOg24k: {
    src: "/images/geneticas/og24k-macro.jpg",
    alt: "Flor de la genética OG24K",
  },
  productZkiem: {
    src: "/images/geneticas/zkiem-macro.jpg",
    alt: "Flor de la genética Z-KIEM",
  },
  productGorilla: {
    src: "/images/geneticas/gorilla-macro.jpg",
    alt: "Flor de la genética Gorilla R.",
  },
  productChocoOg: {
    src: "/images/geneticas/chocoog-macro.jpg",
    alt: "Flor de la genética Choco OG",
  },
  productTropicana: {
    src: "/images/geneticas/tropicana-macro.jpg",
    alt: "Planta de la genética Tropicana",
  },

  // Fotos propias sin asignar todavía — candidatas a reemplazar hero/Nosotros
  growroom1: {
    src: "/images/geneticas/growroom-1.jpg",
    alt: "Vista general del cultivo de El Hormiguero",
  },
  growroom2: {
    src: "/images/geneticas/growroom-2.jpg",
    alt: "Vista general del cultivo de El Hormiguero",
  },
  brandWall: {
    src: "/images/geneticas/brand-wall.jpg",
    alt: "Cartel de El Hormiguero pintado en pared",
  },
};
