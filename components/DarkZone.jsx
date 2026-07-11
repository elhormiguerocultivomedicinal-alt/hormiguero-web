import PhotoZone from "./PhotoZone";
import Footer from "./Footer";

/**
 * Wraps a page's dark-surface content (from hero down) together with
 * the Footer under ONE continuous photographic backdrop — one photo,
 * or two crossfaded via PhotoZone — so the footer never reads as a
 * separate, hard-cut block.
 */
export default function DarkZone({ children, images, crossfadeAt }) {
  return (
    <PhotoZone images={images} crossfadeAt={crossfadeAt}>
      {children}
      <Footer />
    </PhotoZone>
  );
}
