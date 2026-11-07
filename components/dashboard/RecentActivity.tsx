import Link from "next/link";
import { ArrowUpRight, Box, ChevronRight, Clock3 } from "lucide-react";

interface RecentActivityProps {
  lightMode: boolean;
}

const projects = [
  { name: "Carcasa para sensor IoT", date: "Solicitud · 18 oct 2026", status: "Cotizada", detail: "$1,280 MXN", accent: "bg-emerald-400/10 text-emerald-500" },
  { name: "Set de engranajes", date: "Encargo · 16 oct 2026", status: "Imprimiendo", detail: "72%", accent: "bg-sky-400/10 text-sky-500", progress: 72 },
  { name: "Soporte para monitor", date: "Solicitud · 15 oct 2026", status: "En revisión", detail: "Por cotizar", accent: "bg-orange-400/10 text-orange-500" },
];

export function RecentActivity({ lightMode }: RecentActivityProps) {
  const card = lightMode ? "border-[#ddd6fe] bg-white" : "border-[#29243a] bg-[#141029]";
  const muted = lightMode ? "text-[#625d70]" : "text-white/40";

  return (
    <div className="grid gap-4 xl:grid-cols-[1.4fr_.8fr]">
      <section id="solicitudes" className={`border ${card}`}>
        <div className={`flex items-center justify-between border-b px-5 py-4 ${lightMode ? "border-[#ddd6fe]" : "border-[#29243a]"}`}>
          <div>
            <h2 className="text-sm font-semibold">Actividad reciente</h2>
            <p className={`mt-1 text-[11px] ${muted}`}>Tus últimos proyectos y solicitudes</p>
          </div>
          <Link href="/#solicitudes" className="flex items-center gap-1 text-xs text-indigo-400">Ver todo <ChevronRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className={`divide-y ${lightMode ? "divide-[#ede9fe]" : "divide-[#29243a]"}`}>
          {projects.map((project) => (
            <article key={project.name} className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className={`grid h-10 w-10 shrink-0 place-items-center ${lightMode ? "bg-[#f5f3ff]" : "bg-[#0b0917]"}`}><Box className={`h-4 w-4 ${muted}`} /></div>
                <div className="min-w-0">
                  <h3 className="truncate text-xs font-medium">{project.name}</h3>
                  <p className={`mt-1 text-[10px] ${muted}`}>{project.date}</p>
                </div>
              </div>
              <div className="ml-auto flex min-w-32.5 flex-col items-end gap-1.5">
                <span className={`rounded-sm px-2 py-1 text-[9px] font-semibold ${project.accent}`}>{project.status}</span>
                {project.progress ? <div className="flex w-full items-center gap-2"><div className={`h-1 flex-1 ${lightMode ? "bg-black/10" : "bg-white/10"}`}><div className="h-full bg-sky-400" style={{ width: `${project.progress}%` }} /></div><span className={`text-[10px] ${muted}`}>{project.detail}</span></div> : <span className={`text-[10px] ${muted}`}>{project.detail}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="flex flex-col gap-4">
        <section id="encargos" className={`flex-1 border p-5 ${card}`}>
          <div className="flex items-start justify-between">
            <div>
              <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${muted}`}>Encargo en curso</p>
              <h2 className="mt-3 text-base font-semibold">Set de engranajes</h2>
            </div>
            <span className="grid h-9 w-9 place-items-center bg-sky-400/10 text-sky-500"><Clock3 className="h-4 w-4" /></span>
          </div>
          <p className={`mt-2 text-xs ${muted}`}>Impresión en progreso · Entrega estimada 24 oct</p>
          <div className="mt-5 flex items-center justify-between text-[10px]"><span className={muted}>Progreso de fabricación</span><span className="font-semibold text-sky-500">72%</span></div>
          <div className={`mt-2 h-1.5 ${lightMode ? "bg-black/10" : "bg-white/10"}`}><div className="h-full bg-sky-400" style={{ width: "72%" }} /></div>
        </section>
        <Link href="/registro" className="group relative flex min-h-37.5 flex-col justify-between overflow-hidden border border-indigo-500/30 bg-[#141029] p-5 text-white transition hover:border-indigo-400/60 hover:bg-[#1b1638]">
          <div className="absolute -right-4 -top-8 text-indigo-400 opacity-15"><Box className="h-36 w-36 stroke-[0.7]" /></div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-300">Senju Lab · Ideas en movimiento</span>
          <span className="flex items-end justify-between gap-4 text-xl font-semibold">¿Qué vamos a crear?<ArrowUpRight className="h-5 w-5 shrink-0 text-indigo-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
        </Link>
      </div>
    </div>
  );
}