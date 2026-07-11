// Only 2 surfaces exist site-wide (forest / papaya), so only 2 blend
// directions are possible — kept as literal class strings (not built
// from template interpolation) so Tailwind's static scan picks them up.
const VARIANTS = {
  "forest-to-papaya": "bg-gradient-to-b from-forest to-papaya",
  "papaya-to-forest": "bg-gradient-to-b from-papaya to-forest",
};

/**
 * Replaces a hard color cut between the two page surfaces with a real
 * gradient blend — no border, no seam. Used wherever a dark (forest)
 * section meets a light (papaya) section or vice versa.
 */
export default function SurfaceBlend({ variant, className = "h-20" }) {
  return <div aria-hidden className={`${className} ${VARIANTS[variant]}`} />;
}
