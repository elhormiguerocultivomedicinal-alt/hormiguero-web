import DarkZone from "@/components/DarkZone";
import TranslucentMark from "@/components/TranslucentMark";
import { CONTACT } from "@/lib/site-config";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Contacto — El Hormiguero",
  description: "Comunicate con El Hormiguero.",
};

const LINKS = [
  { label: "Email", href: `mailto:${CONTACT.email}`, value: CONTACT.email },
  { label: "WhatsApp", href: CONTACT.whatsapp, value: "Escribinos" },
  { label: "Instagram", href: CONTACT.instagram, value: "@elhormiguero" },
];

export default function ContactoPage() {
  return (
    <DarkZone images={[IMAGES.leafPortrait]}>
      <TranslucentMark />
      <div className="relative mx-auto max-w-2xl px-6 pt-12">
        <h1 className="font-display text-5xl text-papaya">Contacto</h1>
        <p className="mt-6 max-w-[55ch] leading-relaxed text-papaya/80 font-body">
          ¿Sos paciente REPROCANN y tenés dudas sobre nuestras genéticas?
          Escribinos por cualquiera de estos medios.
        </p>

        <ul className="mt-10 flex flex-col gap-4">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-baseline gap-3 border-b border-army/40 py-3 transition-colors hover:border-olive"
              >
                <span className="font-heading text-xs uppercase tracking-wide text-olive">
                  {link.label}
                </span>
                <span className="text-papaya/90 font-body">{link.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </DarkZone>
  );
}
