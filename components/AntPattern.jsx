import { IMAGES } from "@/lib/images";

/**
 * Repeating-isologo watermark, echoing the tiled-icon stationery mockups
 * from the brandbook (troqueles). Meant to be used sparingly — 1-2
 * surfaces max, not as a global background — inside a `relative` parent.
 *
 * Uses a CSS mask (rather than background-image + invert filter) so the
 * watermark can be tinted to the exact papaya token instead of pure white.
 */
export default function AntPattern({ className = "", color = "var(--color-papaya)" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.06] ${className}`}
      style={{
        backgroundColor: color,
        WebkitMaskImage: `url(${IMAGES.logoIcon.src})`,
        maskImage: `url(${IMAGES.logoIcon.src})`,
        WebkitMaskRepeat: "repeat",
        maskRepeat: "repeat",
        WebkitMaskSize: "110px 110px",
        maskSize: "110px 110px",
      }}
    />
  );
}
