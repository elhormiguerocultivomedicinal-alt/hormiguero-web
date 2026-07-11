import AmbientPhoto from "./AmbientPhoto";
import AntPattern from "./AntPattern";
import Footer from "./Footer";

/**
 * Wraps a page's last dark-surface content together with the Footer
 * under ONE continuous backdrop (one photo or one tiled pattern), so
 * the footer never reads as a separate, hard-cut block. Pass either
 * `image` (ambient blurred photo) or `pattern` (tiled isologo), not
 * both — one deliberate device per zone.
 */
export default function DarkZone({ children, image, pattern = false }) {
  return (
    <div className="relative overflow-hidden bg-forest">
      {image && <AmbientPhoto image={image} />}
      {pattern && <AntPattern />}
      <div className="relative">
        {children}
        <Footer />
      </div>
    </div>
  );
}
