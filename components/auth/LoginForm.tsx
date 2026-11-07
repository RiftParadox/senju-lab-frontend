// src/components/auth/LoginForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface TokenResponse {
  access?: string;
  detail?: string;
}

export function LoginForm() {
  const router = useRouter();

  // Estados del formulario
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Acción para el botón de "Acceso de demostración" del Figma
  const llenarDemo = () => {
    setUsername("cliente_demo");
    setPassword("DemoPass123!");
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = (await res.json()) as TokenResponse;

      if (!res.ok || !data.access) {
        throw new Error(data.detail ?? "Usuario o contraseña incorrectos");
      }

      // Guardamos el Access Token en una cookie para que Next.js lo lea en el servidor
      const maxAge = rememberMe ? 60 * 60 * 24 * 7 : 60 * 60 * 24; // 7 días o 1 día
      document.cookie = `senju_token=${data.access}; path=/; max-age=${maxAge}; SameSite=Lax;`;

      // Redirigir al panel
      router.push("/");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "No se pudo iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#141029] border border-[#29243a] rounded-2xl p-7 sm:p-9 shadow-2xl space-y-6">
      
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">Inicia sesión</h2>
        <p className="text-xs text-slate-400 mt-1">Ingresa tus datos para continuar.</p>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo Usuario */}
        <div className="space-y-1.5">
          <label htmlFor="username" className="text-xs font-medium text-slate-300">
            Nombre de usuario
          </label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ej: alex"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0917] border border-[#29243a] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition"
          />
        </div>

        {/* Campo Contraseña */}
        <div className="space-y-1.5">
          <label htmlFor="password" className="text-xs font-medium text-slate-300">
            Contraseña
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0917] border border-[#29243a] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-indigo-400 hover:text-indigo-300 transition"
            >
              {showPassword ? "Ocultar" : "Ver"}
            </button>
          </div>
        </div>

        {/* Recordarme y Olvidé contraseña */}
        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-3.5 h-3.5 rounded bg-[#0b0917] border-[#29243a] text-indigo-600 focus:ring-0 focus:ring-offset-0"
            />
            Recordarme
          </label>
          <Link href="#" className="text-indigo-400 hover:text-indigo-300 transition">
            Olvidé mi contraseña
          </Link>
        </div>

        {/* Botón Principal */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 py-3 px-4 rounded-xl bg-[#5345f5] hover:bg-[#4335e0] text-white text-sm font-semibold flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-600/30 disabled:opacity-50"
        >
          {loading ? "Verificando..." : "Entrar a mi cuenta"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Caja de Acceso de Demostración del Figma */}
      <button
        type="button"
        onClick={llenarDemo}
        className="flex w-full items-start gap-3 rounded-xl border border-indigo-950/60 bg-[#1d192d] p-3.5 text-left transition hover:border-indigo-500/40"
      >
        <Sparkles className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
        <div className="text-[11px] leading-tight">
          <p className="font-semibold text-indigo-200">Acceso de demostración</p>
          <p className="text-slate-400 mt-0.5">Los datos ya están listos, solo pulsa entrar.</p>
        </div>
      </button>

      {/* Enlace para ir al registro */}
      <div className="text-center pt-2 text-xs text-slate-500">
        ¿Aún no tienes cuenta?{" "}
        <Link href="/registro" className="text-indigo-400 hover:text-indigo-300 font-medium">
          Crea una gratis
        </Link>
      </div>

    </div>
  );
}