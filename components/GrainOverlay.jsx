const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>
        <feColorMatrix type='saturate' values='0'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`
  );

/**
 * Whole-page film-grain, standing in for the brand's printed/tactile
 * packaging feel (kraft labels, woodblock textures). Fixed + very low
 * opacity so it reads as paper texture, not visible noise.
 */
export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-overlay"
      style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
    />
  );
}
