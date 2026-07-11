import { IMAGES } from "@/lib/images";

/**
 * The isologo, tinted translucent, as a single recurring brand signature —
 * same position/size/opacity everywhere it appears (hero sections,
 * Contacto). One consistent placement reads as a deliberate system;
 * a different size/corner on every page reads as random decoration.
 * Do not override the defaults per-page.
 */
export default function TranslucentMark({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.08] ${className}`}
      style={{
        backgroundColor: "var(--color-papaya)",
        WebkitMaskImage: `url(${IMAGES.logoBadge.src})`,
        maskImage: `url(${IMAGES.logoBadge.src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "bottom -8% right -8%",
        maskPosition: "bottom -8% right -8%",
        WebkitMaskSize: "42rem",
        maskSize: "42rem",
      }}
    />
  );
}
