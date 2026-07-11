import { IMAGES } from "@/lib/images";

/**
 * Renders the wordmark logo tinted to an arbitrary brand color via CSS
 * mask. The source PNG is dark-green-on-transparent (made for light
 * surfaces) — `brightness-0 invert` forces it to pure #fff, which reads
 * slightly off against the warmer papaya (#fff0d9) used everywhere else.
 * Masking lets us fill it with the exact token color instead.
 */
export default function BrandMark({ color = "var(--color-papaya)", className = "" }) {
  return (
    <span
      role="img"
      aria-label="El Hormiguero"
      className={`inline-block bg-[image:none] ${className}`}
      style={{
        backgroundColor: color,
        WebkitMaskImage: `url(${IMAGES.logo.src})`,
        maskImage: `url(${IMAGES.logo.src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
      }}
    />
  );
}
