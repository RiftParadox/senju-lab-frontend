// src/components/landing/StepsTimeline.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PASOS = [
  {
    numero: "01",
    titulo: "Cuéntanos tu idea",
    descripcion: "Sube tu modelo 3D o explícanos lo que necesitas.",
  },
  {
    numero: "02",
    titulo: "Recibe tu cotización",
    descripcion: "Revisamos cada detalle y te enviamos una propuesta clara.",
  },
  {
    numero: "03",
    titulo: "Nosotros lo hacemos real",
    descripcion: "Acepta la propuesta y sigue tu encargo desde el panel.",
  },
];

export function StepsTimeline() {
  return (
    <section className="border-y border-[#29243a] bg-[#0b0917] px-5 py-24 text-white sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* COLUMNA IZQUIERDA: Títulos y CTA */}
        <div className="lg:col-span-5 space-y-6">
          <span className="inline-flex border border-indigo-500/30 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-indigo-400">
            SIMPLE Y TRANSPARENTE
          </span>

          <h2 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            Tu proyecto, <br />en tres pasos.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md pt-2">
            Sin tecnicismos innecesarios. Nuestro equipo te acompaña desde el archivo hasta la entrega.
          </p>

          <div className="pt-4">
            <Link
              href="/registro"
              className="inline-flex items-center gap-2 rounded-md bg-[#5345f5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4335e0]"
            >
              Comenzar mi proyecto <ArrowRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>
        </div>

        {/* COLUMNA DERECHA: Línea de tiempo vertical */}
        <div className="lg:col-span-7 lg:pl-10">
          <div className="relative space-y-12">

            {/* Línea vertical conectora */}
            <div className="absolute bottom-6 left-6 top-6 w-px -translate-x-1/2 bg-[#29243a]" />

            {PASOS.map((paso) => (
              <div key={paso.numero} className="relative flex items-start gap-6 group">

                {/* Círculo con el número (01, 02, 03) */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#29243a] bg-[#141029] text-xs font-medium text-indigo-300 transition-colors group-hover:border-indigo-500/70">
                  {paso.numero}
                </div>

                {/* Textos del paso */}
                <div className="pt-1.5 space-y-1">
                  <h3 className="text-lg font-semibold text-white">
                    {paso.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {paso.descripcion}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}