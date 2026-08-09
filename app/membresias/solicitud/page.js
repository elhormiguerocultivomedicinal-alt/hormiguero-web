import ArrowIcon from "@/components/ArrowIcon";

export const metadata = {
  title: "Solicitud de Membresía — El Hormiguero",
  description: "Mirá y descargá la solicitud de membresía para completar y firmar.",
};

export default function SolicitudPage() {
  return (
    <div className="relative flex flex-1 flex-col bg-papaya">
      <embed
        src="/solicitud-membresia.pdf"
        type="application/pdf"
        className="w-full flex-1 min-h-[70vh]"
      />
      <a
        href="/solicitud-membresia.pdf"
        download
        className="group absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center gap-3 rounded-full bg-olive py-1 pl-6 pr-1 font-heading text-sm uppercase tracking-wide text-forest shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-opacity hover:opacity-90"
      >
        Descargar PDF
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-olive transition-transform group-hover:translate-x-0.5">
          <ArrowIcon className="h-4 w-4" />
        </span>
      </a>
    </div>
  );
}
