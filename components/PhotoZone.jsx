import Image from "next/image";

/**
 * Continuous photographic backdrop for a whole page's dark zone (hero
 * through Footer) — pinned to the viewport with `position: fixed`
 * instead of stretched to the page's full scroll height. Content
 * scrolls over it in normal flow.
 *
 * Why fixed, not absolute-inset-0-on-a-tall-container: object-cover on
 * a box sized to the page's full height (hero + text + grid + footer,
 * often 3+ phone screens tall) forces the image to cover that whole
 * height, which on a real mobile viewport (390 CSS px wide, DPR 3)
 * demanded ~13,000 device px of resolution — a 3-4x upscale of any
 * real photo, visible as pixelation. A `fixed` layer only ever has to
 * cover one viewport, so any normal photo has resolution to spare, and
 * it never needs blur to hide the shortfall.
 */
export default function PhotoZone({ image, children }) {
  return (
    <>
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-forest">
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={75}
          className="photo-tone scale-105 object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(30,42,17,0.4)" }}
        />
      </div>
      <div className="relative">{children}</div>
    </>
  );
}
