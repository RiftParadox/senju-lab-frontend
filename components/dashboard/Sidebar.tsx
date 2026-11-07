"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LayoutDashboard, Lightbulb, LogOut, Plus, Wrench } from "lucide-react";

interface SidebarProps {
  lightMode: boolean;
}

export function Sidebar({ lightMode }: SidebarProps) {
  const router = useRouter();
  const muted = lightMode ? "text-[#504b60]" : "text-white/45";
  const surface = lightMode ? "border-[#ddd6fe] bg-white text-[#201b31]" : "border-[#29243a] bg-[#0b0917] text-white";

  function logout() {
    document.cookie = "senju_token=; path=/; max-age=0; SameSite=Lax";
    router.replace("/login");
    router.refresh();
  }

  return (
    <aside className={`flex w-full shrink-0 flex-col border-r p-5 lg:min-h-screen lg:w-62 ${surface}`}>
      <Link href="/" className="mb-10 flex items-center gap-3" aria-label="Senju Lab, inicio">
        <span aria-hidden="true" className="flex h-5 items-end gap-1">
          <i className="h-3 w-1.5 rounded-sm bg-indigo-500" />
          <i className="h-4 w-1.5 rounded-sm bg-indigo-500" />
          <i className="h-5 w-1.5 rounded-sm bg-indigo-500" />
        </span>
        <span className="text-xs font-bold tracking-[0.12em]">SENJU <span className="text-indigo-400">LAB</span></span>
      </Link>
      <p className={`mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.17em] ${muted}`}>Espacio de trabajo</p>
      <nav className="flex gap-2 overflow-x-auto lg:flex-col" aria-label="Navegación principal">
        <Link href="/" className="flex min-w-max items-center gap-3 rounded-md bg-indigo-500/15 px-3 py-2.5 text-sm font-medium text-indigo-300">
          <LayoutDashboard className="h-4 w-4" /> Resumen
        </Link>
        <Link href="/#solicitudes" className={`flex min-w-max items-center justify-between gap-5 rounded-md px-3 py-2.5 text-sm transition hover:bg-indigo-500/10 ${muted}`}>
          <span className="flex items-center gap-3"><Wrench className="h-4 w-4" /> Solicitudes</span>
          <span className="grid h-5 min-w-5 place-items-center rounded-full bg-indigo-500 px-1 text-[10px] font-bold text-white">2</span>
        </Link>
        <Link href="/#encargos" className={`flex min-w-max items-center gap-3 rounded-md px-3 py-2.5 text-sm transition hover:bg-indigo-500/10 ${muted}`}>
          <Wrench className="h-4 w-4" /> Mis encargos
        </Link>
      </nav>
      <div className={`mt-auto hidden border-t pt-5 lg:block ${lightMode ? "border-black/10" : "border-white/10"}`}>
        <div className={`rounded-md border p-4 ${lightMode ? "border-[#ddd6fe] bg-[#f5f3ff]" : "border-[#29243a] bg-[#141029]"}`}>
          <Lightbulb className="mb-3 h-5 w-5 text-indigo-400" />
          <p className="text-sm font-semibold">¿Tienes una idea?</p>
          <p className={`mt-1 text-xs leading-5 ${muted}`}>La convertimos en una pieza real.</p>
          <Link href="/registro" className="mt-4 flex items-center justify-center gap-2 rounded bg-[#5345f5] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#4335e0]">
            <Plus className="h-3.5 w-3.5" /> Nueva solicitud
          </Link>
        </div>
        <button type="button" onClick={logout} className={`mt-5 flex w-full items-center gap-3 px-3 py-2 text-sm transition hover:text-red-500 ${muted}`}>
          <LogOut className="h-4 w-4" /> Cerrar sesión
        </button>
      </div>
      <button type="button" onClick={logout} className={`mt-4 flex items-center gap-2 text-sm lg:hidden ${muted}`}>
        <LogOut className="h-4 w-4" /> Cerrar sesión
      </button>
    </aside>
  );
}