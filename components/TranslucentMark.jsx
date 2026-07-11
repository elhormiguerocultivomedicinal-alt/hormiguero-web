import { IMAGES } from "@/lib/images";

/**
 * The isologo, tinted translucent, as a single recurring brand signature —
 * same corner/opacity everywhere it appears (hero sections, Contacto).
 * `size` defaults to 42rem for full-height heroes; pass a smaller value
 * on shorter sections (e.g. Productos' 40vh hero) so the mark stays a
 * corner accent instead of arcing across the title — same rule (scale
 * to the section), not a one-off arbitrary size.
 */
export default function TranslucentMark({ className = "", size = "42rem" }) {
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
        WebkitMaskSize: size,
        maskSize: size,
      }}
    />
  );
}
