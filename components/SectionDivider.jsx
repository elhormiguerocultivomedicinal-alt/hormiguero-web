import { IMAGES } from "@/lib/images";

/**
 * Textured band echoing the brand's woven/kraft-paper packaging feel
 * (see brandbook "TEXTURA" swatch). Used at 1-2 deliberate section
 * transitions only — a real photographed texture, not a synthesized
 * CSS stripe pattern.
 */
export default function SectionDivider({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`relative h-10 w-full overflow-hidden border-y border-army/30 ${className}`}
    >
      <div
        className="photo-tone absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${IMAGES.texturePaperGreen.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-transparent to-forest/80" />
    </div>
  );
}
