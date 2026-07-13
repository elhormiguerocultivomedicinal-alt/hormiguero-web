import Image from "next/image";

// One shared overlay for every page, hybrid-anchored: px at the two
// fixed-height zones (hero text, footer), % only in the variable
// middle (text block + grid) whose real height differs per page.
const OVERLAY_GRADIENT = `linear-gradient(to bottom,
  rgba(30,42,17,0.62) 0px,
  rgba(30,42,17,0.38) 320px,
  rgba(30,42,17,0.22) 42%,
  rgba(30,42,17,0.48) 68%,
  rgba(30,42,17,0.45) calc(100% - 380px),
  rgba(30,42,17,0.72) calc(100% - 200px),
  rgba(30,42,17,0.72) 100%)`;

function PhotoLayer({ image, mask, priority }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      style={mask ? { WebkitMaskImage: mask, maskImage: mask } : undefined}
    >
      <Image
        src={image.src}
        alt=""
        fill
        priority={priority}
        // This box is height-constrained (object-cover fits it to the
        // WHOLE page's height, not one viewport), so a `sizes="100vw"`
        // hint — which only reasons about viewport width — makes
        // next/image pick a source far too small on narrow/tall mobile
        // pages: it requested a 1200px-wide image to cover a box needing
        // ~13000 device px of height, an 8x upscale that showed up as
        // visibly blocky on a real phone. Pin sizes to the largest
        // generated bucket instead; a lower quality offsets the bigger
        // download since blur-2xl hides compression artifacts anyway.
        sizes="3840px"
        quality={40}
        className="photo-tone scale-110 object-cover blur-2xl"
      />
    </div>
  );
}

/**
 * Continuous photographic backdrop for a whole page's dark zone (hero
 * through Footer) — one or two photos, real crossfade via mask-image,
 * never a hard cut or a flat-color divider between them. `crossfadeAt`
 * is a % of this component's own rendered height (the page's dark
 * content height, since this div sits around all of it), not the
 * viewport — never measured with JS, so there's no SSR/hydration flash.
 */
export default function PhotoZone({ images, crossfadeAt = "55%", children }) {
  const [first, second] = images;
  const band = 100; // px, half-width of the ~200px blend zone

  return (
    <div className="relative overflow-hidden bg-forest">
      <PhotoLayer
        image={first}
        priority
        mask={
          second &&
          `linear-gradient(to bottom, black 0,
            black calc(${crossfadeAt} - ${band}px),
            transparent calc(${crossfadeAt} + ${band}px))`
        }
      />
      {second && (
        <PhotoLayer
          image={second}
          mask={`linear-gradient(to bottom, transparent 0,
            transparent calc(${crossfadeAt} - ${band}px),
            black calc(${crossfadeAt} + ${band}px))`}
        />
      )}
      <div aria-hidden className="absolute inset-0" style={{ background: OVERLAY_GRADIENT }} />
      <div className="relative">{children}</div>
    </div>
  );
}
