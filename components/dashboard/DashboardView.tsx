"use client";

import { useState } from "react";
import { MetricCards } from "@/components/dashboard/MetricCards";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopBar } from "@/components/dashboard/TopBar";

export function DashboardView() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors ${lightMode ? "bg-[#f5f3ff] text-[#201b31]" : "bg-[#0b0917] text-white"}`}>
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <Sidebar lightMode={lightMode} />
        <div className="min-w-0 flex-1">
          <TopBar lightMode={lightMode} onToggleMode={() => setLightMode((current) => !current)} />
          <main className="px-5 py-8 sm:px-8 lg:px-10">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className={`text-[10px] font-semibold uppercase tracking-[0.17em] ${lightMode ? "text-black/45" : "text-white/40"}`}>Viernes, 23 de octubre de 2026</p>
                <h1 className="mt-2 text-2xl font-semibold">Hola, Alex</h1>
                <p className={`mt-1 text-sm ${lightMode ? "text-black/50" : "text-white/45"}`}>Aquí tienes el estado de tus proyectos.</p>
              </div>
            </div>
            <MetricCards lightMode={lightMode} />
            <div className="mt-6"><RecentActivity lightMode={lightMode} /></div>
          </main>
        </div>
      </div>
    </div>
  );
}