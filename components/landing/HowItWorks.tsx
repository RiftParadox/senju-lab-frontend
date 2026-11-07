// src/components/landing/HowItWorks.tsx
import { FileUp, Calculator, Printer } from "lucide-react";

const PASOS = [
  {
    numero: "01",
    titulo: "Envía tu Solicitud",
    descripcion: "Cuéntanos qué necesitas y adjunta una imagen o boceto de referencia desde tu panel.",
    icono: FileUp,
  },
  {
    numero: "02",
    titulo: "Cotización en Tiempo Récord",
    descripcion: "Evaluamos viabilidad técnica, peso y tiempo para enviarte un presupuesto claro y cerrado.",
    icono: Calculator,
  },
  {
    numero: "03",
    titulo: "Impresión y Entrega",
    descripcion: "Aceptas la cotización con un clic y tu pieza entra directamente a cola de manufactura 3D.",
    icono: Printer,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-[#0b0917] border-y border-[#29243a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
          Flujo de Trabajo
        </h2>
        <p className="text-3xl font-extrabold text-white tracking-tight">
          De la idea a tu mano en 3 pasos
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PASOS.map((paso) => {
            const Icon = paso.icono;
            return (
              <div
                key={paso.numero}
                className="bg-[#141029] p-8 rounded-2xl border border-[#29243a] shadow-sm relative text-left hover:shadow-lg hover:shadow-indigo-950/40 hover:border-indigo-500/30 transition"
              >
                <span className="text-4xl font-black text-white/5 absolute top-4 right-6">
                  {paso.numero}
                </span>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {paso.titulo}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}