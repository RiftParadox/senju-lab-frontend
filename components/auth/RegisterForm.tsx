// src/components/auth/RegisterForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RegistrationError = Record<string, string | string[]>;

async function getRegistrationError(response: Response): Promise<string> {
  try {
    const data = (await response.json()) as RegistrationError;
    const firstError = Object.entries(data)[0];
    if (firstError) {
      const [field, messages] = firstError;
      return `${field}: ${Array.isArray(messages) ? messages[0] : messages}`;
    }
  } catch {
    return "Error al registrarse";
  }
  return "Error al registrarse";
}

export function RegisterForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    telefono: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/usuarios/auth/registro/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(await getRegistrationError(res));
      }

      // Registro exitoso -> Redirigir a iniciar sesión
      router.push("/login?registrado=true");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "No se pudo completar el registro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#141029] border border-[#29243a] rounded-2xl p-7 sm:p-9 shadow-2xl space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">Crea tu cuenta</h2>
        <p className="text-xs text-slate-400 mt-1">Completa tus datos para empezar a cotizar.</p>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="space-y-1">
          <label htmlFor="register-username" className="text-xs font-medium text-slate-300">Nombre de usuario</label>
          <input
            type="text"
            id="register-username"
            required
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            placeholder="ej: alex"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0917] border border-[#29243a] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="register-email" className="text-xs font-medium text-slate-300">Correo electrónico</label>
          <input
            type="email"
            id="register-email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="cliente@senjulab.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0917] border border-[#29243a] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="register-phone" className="text-xs font-medium text-slate-300">Teléfono (opcional)</label>
          <input
            type="tel"
            id="register-phone"
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            placeholder="+57 300 000 0000"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0917] border border-[#29243a] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="register-password" className="text-xs font-medium text-slate-300">Contraseña</label>
          <input
            type="password"
            id="register-password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="••••••••"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0917] border border-[#29243a] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 py-3 px-4 rounded-xl bg-[#5345f5] hover:bg-[#4335e0] text-white text-sm font-semibold flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-600/30 disabled:opacity-50"
        >
          {loading ? "Creando cuenta..." : "Registrarme"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <div className="text-center pt-2 text-xs text-slate-500">
        ¿Ya tienes una cuenta?{" "}
        <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
          Inicia sesión
        </Link>
      </div>
    </div>
  );
}