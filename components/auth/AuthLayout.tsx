// src/components/auth/AuthLayout.tsx
import React from "react";
import Link from "next/link";
import { Sparkles, Sun, HelpCircle } from "lucide-react";

interface AuthLayoutProps {
  badgeText: string;
  title: string;
  subtitle: string;
  children: React.ReactNode; // Aquí se inyecta el formulario (Login o Registro)
}

export function AuthLayout({ badgeText, title, subtitle, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full flex bg-[#0b0917] text-white">
      
      {/* ================= COLUMNA IZQUIERDA (CONTENIDO) ================= */}
      <div className="w-full lg:w-[60%] flex flex-col justify-between p-6 sm:p-10 lg:p-14 min-h-screen">
        
        {/* TOP BAR: Logo + Acciones secundarias */}
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex items-end gap-1 h-5">
              <span className="w-1.5 h-3 bg-indigo-500 rounded-sm"></span>
              <span className="w-1.5 h-4 bg-indigo-500 rounded-sm"></span>
              <span className="w-1.5 h-5 bg-indigo-500 rounded-sm"></span>
            </div>
            <span className="font-extrabold tracking-wider text-base text-white">
              SENJU <span className="text-indigo-400">LAB</span>
            </span>
          </Link>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 hover:text-white transition">
              <Sun className="w-3.5 h-3.5" /> Claro
            </button>
            <Link href="/" className="hover:text-white transition">
              Volver al inicio
            </Link>
          </div>
        </header>

        {/* ZONA CENTRAL: Textos y Formulario */}
        <main className="my-auto py-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-center max-w-5xl">
          {/* Mensaje de bienvenida */}
          <div className="xl:col-span-5 space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#a78bfa] uppercase">
              {badgeText}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {title}
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {subtitle}
            </p>
          </div>

          {/* Tarjeta del formulario */}
          <div className="xl:col-span-7 w-full max-w-md mx-auto xl:max-w-none">
            {children}
          </div>
        </main>

        {/* FOOTER IZQUIERDO */}
        <footer className="text-[11px] text-slate-500">
          © 2026 Senju Lab. Fabricación digital con propósito.
        </footer>
      </div>

      {/* ================= COLUMNA DERECHA (IMAGEN IMPRESORA 3D) ================= */}
      <div className="hidden lg:flex lg:w-[40%] relative overflow-hidden bg-[#141029] border-l border-[#29243a]">
        {/* Imagen de fondo de la impresora 3D con overlay púrpura/oscuro */}
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-75 contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200')`
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b0917] via-[#1a152e]/60 to-transparent" />

        {/* Cita inspiracional */}
        <div className="relative z-10 m-auto p-12 max-w-md text-white space-y-4 mt-auto mb-16">
          <Sparkles className="w-6 h-6 text-[#a78bfa]" />
          <blockquote className="text-2xl font-bold tracking-tight leading-snug">
            “Cada gran objeto comenzó siendo una idea.”
          </blockquote>
          <p className="text-xs text-slate-400 font-medium">
            — El equipo de Senju Lab
          </p>
        </div>

        {/* Botón flotante de ayuda */}
        <button 
          aria-label="Ayuda"
          className="absolute bottom-6 right-6 w-9 h-9 rounded-full bg-white text-slate-900 font-bold flex items-center justify-center text-sm shadow-xl hover:scale-105 transition"
        >
          <HelpCircle className="w-5 h-5 text-slate-900" />
        </button>
      </div>

    </div>
  );
}