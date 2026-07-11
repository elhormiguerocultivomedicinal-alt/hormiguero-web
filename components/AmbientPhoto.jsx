import Image from "next/image";

/**
 * Heavily-blurred real photography used as ambient background texture,
 * instead of a flat solid color. `scale-110` hides the blur's soft edge
 * falloff. One defined gradient overlay (not a per-instance flat alpha)
 * — darker at the top where headings usually sit, lighter through the
 * middle so the photo actually reads, per impeccable's guidance against
 * ad-hoc transparency proliferation: define the overlay once, reuse it.
 * Place as the first child of a `relative overflow-hidden` container.
 */
export default function AmbientPhoto({ image, className = "" }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt=""
        fill
        sizes="100vw"
        className="photo-tone scale-110 object-cover blur-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/65 via-forest/40 to-forest/60" />
    </div>
  );
}
