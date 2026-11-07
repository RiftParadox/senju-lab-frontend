// src/components/landing/Hero.tsx
import Link from "next/link";
import { ArrowDown, ArrowRight, Box, ScanLine } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0917] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(167,139,250,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,.07)_1px,transparent_1px)] bg-size-[64px_64px] opacity-50 mask-[linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="mx-auto grid min-h-155 max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
        <div className="relative z-10 max-w-2xl">

        {/* Badge superior */}
        <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-indigo-500 pl-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">
          <ScanLine className="h-4 w-4" /> Fabricación digital, sin límites
        </div>

        {/* Título Principal */}
        <h1 className="max-w-2xl text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-[76px]">
          Tus ideas merecen <span className="text-indigo-400">existir.</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
          Del primer boceto a una pieza real. Diseñamos, cotizamos e imprimimos con precisión para que puedas llevar tus proyectos más lejos.
        </p>

        {/* Call to Actions (Botones) */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/registro" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#5345f5] px-5 text-sm font-semibold text-white transition hover:bg-[#4335e0]">
            Comenzar un proyecto <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/login" className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#29243a] px-5 text-sm text-white/80 transition hover:border-indigo-500/40 hover:bg-[#141029] hover:text-white">
            Portal de clientes
          </Link>
        </div>

        {/* Micro-beneficios con íconos */}
        <div className="mt-14 flex items-center gap-3 text-xs text-white/40">
          <ArrowDown className="h-4 w-4 text-indigo-400" /> Diseño · Prototipado · Producción
        </div>
        </div>
      </div>
      <div className="relative mx-5 mb-16 flex aspect-square items-center justify-center border border-[#29243a] bg-[#141029] sm:mx-8 lg:absolute lg:right-[max(calc((100vw-80rem)/2+2rem),4rem)] lg:top-1/2 lg:mb-0 lg:aspect-square lg:w-[min(34vw,430px)] lg:-translate-y-1/2">
        <div className="absolute inset-5 border border-[#29243a]" />
        <div className="absolute left-0 top-1/4 h-px w-full bg-[#29243a]" />
        <div className="absolute bottom-1/4 left-0 h-px w-full bg-[#29243a]" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-[#29243a]" />
        <div className="absolute right-1/4 top-0 h-full w-px bg-[#29243a]" />
        <div className="relative flex h-1/2 w-1/2 items-center justify-center border border-indigo-500/40 bg-indigo-500/10 text-indigo-400 shadow-[0_0_80px_rgba(99,102,241,0.15)]">
          <Box className="h-24 w-24 stroke-[0.8]" />
          <span className="absolute -right-10 top-8 bg-[#141029] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/50">Layer 042</span>
          <span className="absolute -bottom-7 left-2 bg-[#141029] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-indigo-300">PLA · 0.2 mm</span>
        </div>
        <span className="absolute bottom-7 right-7 text-[10px] uppercase tracking-[0.2em] text-white/30">SL / 001</span>
      </div>
    </section>
  );
}