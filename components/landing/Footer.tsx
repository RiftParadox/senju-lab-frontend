// src/components/landing/Footer.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#29243a] bg-[#0b0917] px-5 py-8 text-white sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LOGO SENJU LAB */}
        <div className="flex items-center gap-2.5">
          {/* Isotipo: 3 barras en escala */}
          <div className="flex h-5 items-end gap-1">
            <span className="h-3 w-1.5 rounded-sm bg-indigo-500" />
            <span className="h-4 w-1.5 rounded-sm bg-indigo-500" />
            <span className="h-5 w-1.5 rounded-sm bg-indigo-500" />
          </div>
          <span className="text-sm font-bold tracking-[0.12em] text-white">
            SENJU <span className="text-indigo-400">LAB</span>
          </span>
        </div>

        {/* LEMA CENTRAL */}
        <div className="text-xs text-slate-400 font-normal text-center md:text-left">
          Ideas que toman forma.
        </div>

        {/* BOTÓN DE ACCIÓN */}
        <div>
          <Link
            href="/registro"
            className="inline-flex items-center gap-2 rounded-md border border-[#29243a] px-4 py-2.5 text-sm font-medium text-white transition hover:border-indigo-500/60 hover:text-indigo-300"
          >
            Iniciar un proyecto <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </footer>
  );
}