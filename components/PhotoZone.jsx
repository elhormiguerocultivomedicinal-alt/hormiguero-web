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
 *
 * Height is pinned with `h-lvh` (large viewport height), not
 * `inset-0`/`h-full`/`h-svh`: mobile Safari/Chrome resize the *visual*
 * viewport as the address bar hides on scroll. Sizing off the current
 * viewport (`dvh`, or `inset-0` on a fixed element) would make the box
 * grow/shrink live as that happens — object-cover then rescales to
 * cover the new box, reading as the photo "zooming" on scroll. Sizing
 * off the *smallest* viewport (`svh`) avoids the zoom but leaves a gap
 * of bare body background below the photo once the address bar hides
 * and the real viewport grows past it. `lvh` is pinned to the
 * *largest* possible viewport, so the box is never shorter than the
 * real one (no gap) and, being a fixed value, never changes size
 * mid-scroll (no zoom) — any part of it below the current shorter
 * viewport is simply clipped, not rescaled.
 *
 * The extra `+160px` on top of `lvh` is a buffer against iOS/Android
 * elastic overscroll: bouncing past the top/bottom of the page at the
 * end of a scroll gesture briefly exposes area outside the `fixed`
 * element's box, which without this margin shows raw `bg-forest`
 * instead of photo. 160px comfortably covers a normal-strength bounce.
 */
export default function PhotoZone({ image, children }) {
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-x-0 -top-[80px] h-[calc(100lvh+160px)] overflow-hidden bg-forest"
      >
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
