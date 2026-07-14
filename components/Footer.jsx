import { REPROCANN_DISCLAIMER, siteConfig } from "@/lib/site-config";
import BrandMark from "./BrandMark";

/**
 * Deliberately background-less: Footer always lives inside a `DarkZone`,
 * which supplies one continuous photo/pattern backdrop spanning the
 * content above it AND the footer — no separate border, no restart.
 * No nav here — the Header already carries site navigation, so this
 * stays to brand + the medicinal-use disclaimer only.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mx-auto max-w-6xl px-6 pt-16 pb-12">
      <div className="glass-panel flex flex-col gap-6 rounded-3xl px-8 py-10 ring-1 ring-papaya/10">
        <BrandMark className="h-7 aspect-[4000/625]" />

        <p className="max-w-2xl text-sm leading-relaxed text-papaya/70 font-body">
          {REPROCANN_DISCLAIMER}
        </p>

        <p className="text-xs text-papaya/50 font-body">
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
