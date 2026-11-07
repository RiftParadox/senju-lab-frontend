import { Box, CheckCheck, ClipboardList } from "lucide-react";

const metrics = [
  { label: "Solicitudes abiertas", value: "2", note: "1 requiere tu atención", icon: ClipboardList, color: "text-indigo-400" },
  { label: "Encargos activos", value: "1", note: "En producción", icon: Box, color: "text-sky-400" },
  { label: "Piezas completadas", value: "7", note: "Desde que te uniste", icon: CheckCheck, color: "text-orange-300" },
];

interface MetricCardsProps {
  lightMode: boolean;
}

export function MetricCards({ lightMode }: MetricCardsProps) {
  return (
    <section aria-label="Resumen de actividad" className="grid gap-3 sm:grid-cols-3">
      {metrics.map(({ label, value, note, icon: Icon, color }) => (
        <article key={label} className={`min-h-35.5 border p-5 ${lightMode ? "border-[#ddd6fe] bg-white" : "border-[#29243a] bg-[#141029]"}`}>
          <div className="flex items-center justify-between">
            <p className={`text-xs ${lightMode ? "text-[#625d70]" : "text-white/50"}`}>{label}</p>
            <Icon className={`h-4 w-4 ${color}`} />
          </div>
          <p className="mt-5 text-3xl font-semibold tabular-nums">{value}</p>
          <p className={`mt-1 text-[11px] ${lightMode ? "text-[#777184]" : "text-white/35"}`}>{note}</p>
        </article>
      ))}
    </section>
  );
}