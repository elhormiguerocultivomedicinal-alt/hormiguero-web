import { IMAGES } from "@/lib/images";

/**
 * Kraft-paper print texture for light (papaya) sections, echoing the
 * brandbook's premium packaging line (tan paper, dark-green ink) instead
 * of a flat-digital cream background. Multiply blend so it reads as
 * "paper under ink," not a photo pasted on top. Place inside a
 * `relative` parent, behind the section's content.
 */
export default function TextureOverlay({ opacity = 0.1, className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url(${IMAGES.texturePaperGreen.src})`,
        opacity,
        mixBlendMode: "multiply",
      }}
    />
  );
}
