// src/components/landing/Header.tsx
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#29243a] bg-[#0b0917]/90 backdrop-blur-md">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <span aria-hidden="true" className="flex h-5 items-end gap-1">
            <i className="h-3 w-1.5 rounded-sm bg-indigo-500" />
            <i className="h-4 w-1.5 rounded-sm bg-indigo-500" />
            <i className="h-5 w-1.5 rounded-sm bg-indigo-500" />
          </span>
          <span className="text-sm font-bold tracking-[0.12em] text-white">
            SENJU <span className="text-indigo-400">LAB</span>
          </span>
        </Link>

        {/* ACCIONES DIRECTAS */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/login" className="rounded-md px-3 py-2 text-sm text-white/70 transition hover:text-white">
            Iniciar sesión
          </Link>
          <Link href="/registro" className="rounded-md bg-[#5345f5] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4335e0]">
            Crear cuenta
          </Link>
        </div>

      </div>
    </header>
  );
}