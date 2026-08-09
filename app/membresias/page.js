import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import DarkZone from "@/components/DarkZone";
import MembershipCard from "@/components/MembershipCard";
import TranslucentMark from "@/components/TranslucentMark";
import { IMAGES } from "@/lib/images";
import { AVAILABLE_GENETICS, MEMBERSHIP_TIERS } from "@/lib/memberships";
import { CONTACT } from "@/lib/site-config";

export const metadata = {
  title: "Membresías — El Hormiguero",
  description:
    "Membresías mensuales de El Hormiguero: elegí tu plan y descargá la solicitud de socio.",
};

export default function MembresiasPage() {
  return (
    <DarkZone image={IMAGES.growroom2}>
      <TranslucentMark />

      <section className="relative mx-auto w-full max-w-6xl px-6 pt-16 sm:pt-20">
        <h1 className="text-shadow-strong font-display text-4xl text-papaya sm:text-5xl">
          Membresías
        </h1>
        <p className="glass-panel mt-6 max-w-xl rounded-xl px-4 py-3 text-lg leading-relaxed text-papaya/90 font-body">
          Elegí tu genética. En las membresías de +5g podés combinar
          variedades — siempre se entrega en frascos de 5g.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {AVAILABLE_GENETICS.map((genetic) => (
            <span key={genetic} className="tag-stamp bg-forest/70 backdrop-blur-sm">
              {genetic}
            </span>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-4xl px-6 pt-12 pb-4 grid gap-6 sm:grid-cols-2">
        <div className="glass-panel rounded-2xl px-6 py-8 ring-1 ring-papaya/10 sm:px-8">
          <p className="tag-stamp">Paso 1</p>
          <h2 className="mt-3 font-display text-xl text-papaya sm:text-2xl">
            Elegí tu membresía
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-papaya/70 font-body">
            Vas a ver los 4 planes mensuales y su precio por gramo.
          </p>
          <a
            href="#planes"
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-olive py-1 pl-6 pr-1 font-heading text-sm uppercase tracking-wide text-forest transition-opacity hover:opacity-90"
          >
            Ver planes
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-olive transition-transform group-hover:translate-x-0.5">
              <ArrowIcon className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="glass-panel rounded-2xl px-6 py-8 ring-1 ring-papaya/10 sm:px-8">
          <p className="tag-stamp">Paso 2</p>
          <h2 className="mt-3 font-display text-xl text-papaya sm:text-2xl">
            Descargá la solicitud
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-papaya/70 font-body">
            Es la nota que hay que firmar para inscribirte como socio
            adherente.
          </p>
          <Link
            href="/membresias/solicitud"
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-olive py-1 pl-6 pr-1 font-heading text-sm uppercase tracking-wide text-forest transition-opacity hover:opacity-90"
          >
            Ver PDF
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-olive transition-transform group-hover:translate-x-0.5">
              <ArrowIcon className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      <section id="planes" className="relative mx-auto max-w-6xl px-6 pt-12 pb-8">
        <h2 className="text-shadow-strong font-display text-2xl text-papaya sm:text-3xl">
          Elegí tu plan
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {MEMBERSHIP_TIERS.map((tier) => (
            <MembershipCard key={tier.id} tier={tier} />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-2xl px-6 pt-8 pb-20">
        <div className="glass-panel rounded-2xl px-8 py-10 ring-1 ring-papaya/10">
          <p className="tag-stamp">Cómo enviar tu solicitud firmada</p>
          <ol className="mt-6 flex flex-col gap-4 text-papaya/80 font-body">
            <li>
              <span className="font-heading text-sm uppercase tracking-wide text-olive">
                1.
              </span>{" "}
              Descargá la solicitud.
            </li>
            <li>
              <span className="font-heading text-sm uppercase tracking-wide text-olive">
                2.
              </span>{" "}
              Completala y firmala — a mano o directo desde el celular.
            </li>
            <li>
              <span className="font-heading text-sm uppercase tracking-wide text-olive">
                3.
              </span>{" "}
              Reenviánosla por WhatsApp o email.
            </li>
          </ol>

          <div className="mt-8 flex flex-wrap items-center gap-5 font-heading text-sm uppercase tracking-wide">
            <Link
              href="/membresias/solicitud"
              className="group inline-flex items-center gap-3 rounded-full bg-olive py-1 pl-6 pr-1 text-forest transition-opacity hover:opacity-90"
            >
              Ver PDF
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-olive transition-transform group-hover:translate-x-0.5">
                <ArrowIcon className="h-4 w-4" />
              </span>
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-papaya/50 px-6 py-3 text-papaya transition-colors hover:border-olive hover:text-olive"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-full border border-papaya/50 px-6 py-3 text-papaya transition-colors hover:border-olive hover:text-olive"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </DarkZone>
  );
}
