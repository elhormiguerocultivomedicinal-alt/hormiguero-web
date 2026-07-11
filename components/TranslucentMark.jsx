import { IMAGES } from "@/lib/images";

/**
 * The isologo icon (no text), tinted translucent, as a small corner
 * signature — never `logoBadge` (icon + arced wordmark), which reads
 * as ghost text when stretched large and faint over a heading.
 */
export default function TranslucentMark({ className = "", size = "6rem" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.09] ${className}`}
      style={{
        backgroundColor: "var(--color-papaya)",
        WebkitMaskImage: `url(${IMAGES.logoIcon.src})`,
        maskImage: `url(${IMAGES.logoIcon.src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "top 1.5rem right 1.5rem",
        maskPosition: "top 1.5rem right 1.5rem",
        WebkitMaskSize: size,
        maskSize: size,
      }}
    />
  );
}
