import DarkZone from "@/components/DarkZone";
import Reveal from "@/components/Reveal";
import TranslucentMark from "@/components/TranslucentMark";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Nosotros — El Hormiguero",
  description:
    "Quiénes somos y qué es REPROCANN, el registro que habilita el cultivo de cannabis medicinal en Argentina.",
};

const PILLARS = [
  {
    title: "Natural",
    text: "Tomamos de la naturaleza no solo sus formas y colores, sino también su ritmo y armonía.",
  },
  {
    title: "Artesanal",
    text: "Un proceso cercano y hecho a mano, cuidado en cada etapa del cultivo.",
  },
  {
    title: "Consciente",
    text: "Una energía libre y relajada, pensada para el bienestar de quienes nos eligen.",
  },
];

export default function NosotrosPage() {
  return (
    <DarkZone images={[IMAGES.greenhouseRows]}>
      <TranslucentMark />

      <section className="relative mx-auto w-full max-w-6xl px-6 pt-12">
        <h1 className="font-display text-5xl text-papaya sm:text-6xl">Nosotros</h1>
      </section>

      <section className="relative mx-auto max-w-3xl px-6 py-20">
        <p className="font-heading text-xs uppercase tracking-wide text-olive">
          Inspiración
        </p>
        <h2 className="mt-3 font-display text-3xl text-papaya sm:text-4xl">
          Lo vivo y lo cercano
        </h2>
        <p className="mt-6 max-w-[65ch] leading-relaxed text-papaya/80 font-body">
          La marca encuentra su inspiración en lo vivo y lo cercano. Su
          identidad visual se nutre de texturas naturales, verdes profundos
          y patrones orgánicos que evocan conexión y frescura. Respira una
          energía libre, relajada y consciente, inspirada en lo simple, lo
          real y lo natural.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <h3 className="font-heading text-sm uppercase tracking-wide text-olive">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-papaya/75 font-body">
                {pillar.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-3xl px-6 pt-4 pb-20">
        <h2 className="font-display text-3xl text-papaya sm:text-4xl">
          ¿Qué es REPROCANN?
        </h2>
        <p className="mt-6 max-w-[65ch] leading-relaxed text-papaya/80 font-body">
          REPROCANN es el Registro del Programa de Cannabis (Cultivo
          Solidario) que habilita en Argentina, bajo la Ley 27.350, a
          pacientes con indicación médica a acceder al cannabis con fines
          terapéuticos o paliativos, ya sea mediante autocultivo o a través
          de un/a cultivador/a solidario/a inscripto/a. El Hormiguero cultiva
          exclusivamente para pacientes registrados en REPROCANN.
        </p>
        <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-papaya/60 font-body">
          Para inscribirte o conocer el detalle del trámite, la fuente
          oficial es el sitio de REPROCANN del Ministerio de Salud de la
          Nación.
        </p>
      </section>
    </DarkZone>
  );
}
