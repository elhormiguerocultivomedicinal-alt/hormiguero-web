import ArrowIcon from "@/components/ArrowIcon";
import DarkZone from "@/components/DarkZone";
import TranslucentMark from "@/components/TranslucentMark";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Solicitud de Membresía — El Hormiguero",
  description: "Mirá y descargá la solicitud de membresía para completar y firmar.",
};

export default function SolicitudPage() {
  return (
    <DarkZone image={IMAGES.growroom2}>
      <TranslucentMark />

      <section className="relative mx-auto max-w-3xl px-6 pt-16 pb-20 sm:pt-20">
        <h1 className="text-shadow-strong font-display text-3xl text-papaya sm:text-4xl">
          Solicitud de membresía
        </h1>
        <p className="glass-panel mt-6 max-w-xl rounded-xl px-4 py-3 leading-relaxed text-papaya/90 font-body">
          Completala y firmala — a mano o directo desde el celular — y
          reenviánosla por WhatsApp o email.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-papaya/10 bg-papaya">
          <iframe
            src="/solicitud-membresia.pdf"
            title="Solicitud de membresía"
            className="aspect-[210/297] w-full"
          />
        </div>

        <p className="mt-3 text-xs text-papaya/60 font-body">
          ¿No ves el documento?{" "}
          <a
            href="/solicitud-membresia.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-olive underline-offset-2 hover:text-olive"
          >
            Abrilo directo acá
          </a>
          .
        </p>

        <a
          href="/solicitud-membresia.pdf"
          download
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-olive py-1 pl-6 pr-1 font-heading text-sm uppercase tracking-wide text-forest transition-opacity hover:opacity-90"
        >
          Descargar PDF
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-olive transition-transform group-hover:translate-x-0.5">
            <ArrowIcon className="h-4 w-4" />
          </span>
        </a>
      </section>
    </DarkZone>
  );
}
