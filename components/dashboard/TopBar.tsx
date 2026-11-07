"use client";

import { Moon, Sun } from "lucide-react";

interface TopBarProps {
  lightMode: boolean;
  onToggleMode: () => void;
}

export function TopBar({ lightMode, onToggleMode }: TopBarProps) {
  return (
    <header className={`flex min-h-19 items-center justify-between border-b px-5 sm:px-8 ${lightMode ? "border-[#ddd6fe] bg-white" : "border-[#29243a] bg-[#0b0917]"}`}>
      <div className="text-xs sm:text-sm">
        <span className={lightMode ? "text-[#625d70]" : "text-white/40"}>Portal de clientes</span>
        <span className={`mx-2 ${lightMode ? "text-[#aaa4b9]" : "text-white/20"}`}>›</span>
        <span className="font-medium">Resumen</span>
      </div>
      <div className="flex items-center gap-3 sm:gap-5">
        <button type="button" onClick={onToggleMode} aria-label={lightMode ? "Activar modo oscuro" : "Activar modo claro"} className={`grid h-9 w-9 place-items-center rounded-md border transition ${lightMode ? "border-[#ddd6fe] hover:bg-[#f5f3ff]" : "border-[#29243a] hover:bg-[#141029]"}`}>
          {lightMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-indigo-500 text-xs font-bold text-white">AM</div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold">Alex Martínez</p>
            <p className={`mt-0.5 text-[10px] ${lightMode ? "text-black/45" : "text-white/40"}`}>Cliente</p>
          </div>
        </div>
      </div>
    </header>
  );
}