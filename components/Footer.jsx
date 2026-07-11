import Link from "next/link";
import { NAV_LINKS, REPROCANN_DISCLAIMER, siteConfig } from "@/lib/site-config";
import AntPattern from "./AntPattern";
import BrandMark from "./BrandMark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest border-t border-army/40 mt-24">
      <AntPattern />

      <div className="relative mx-auto max-w-6xl px-6 py-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <BrandMark className="h-7 aspect-[4000/625]" />

          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-heading text-sm uppercase tracking-wide">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-papaya/80 hover:text-olive transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

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
