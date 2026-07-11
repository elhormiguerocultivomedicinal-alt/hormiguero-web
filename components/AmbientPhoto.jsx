import Image from "next/image";

/**
 * Heavily-blurred real photography used as ambient background texture,
 * instead of a flat solid color. `scale-110` hides the blur's soft edge
 * falloff; the color overlay keeps text contrast while the photo still
 * reads as organic depth behind it. Place as the first child of a
 * `relative overflow-hidden` section.
 */
export default function AmbientPhoto({ image, overlayClassName = "bg-forest/85", className = "" }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt=""
        fill
        sizes="100vw"
        className="photo-tone scale-110 object-cover blur-2xl"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
