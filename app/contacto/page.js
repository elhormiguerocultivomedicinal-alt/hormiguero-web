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
    <DarkZone image={IMAGES.leafPortrait}>
      <TranslucentMark />
      <div className="relative mx-auto max-w-2xl px-6 pt-16 sm:pt-20">
        <h1 className="text-shadow-strong font-display text-4xl text-papaya sm:text-5xl">
          Contacto
        </h1>

        <div className="glass-panel mt-8 rounded-2xl px-8 py-10 ring-1 ring-papaya/10">
          <p className="max-w-[55ch] leading-relaxed text-papaya/80 font-body">
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
                  <span className="tag-stamp">{link.label}</span>
                  <span className="text-papaya/90 font-body">{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DarkZone>
  );
}
