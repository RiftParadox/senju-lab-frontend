// src/app/registro/page.tsx
import { AuthLayout } from "@/components/auth/AuthLayout";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      badgeText="Nueva cuenta"
      title="Comienza tu proyecto hoy."
      subtitle="Únete a Senju Lab para solicitar presupuestos, gestionar piezas 3D y acumular sellos de descuento."
    >
      <RegisterForm />
    </AuthLayout>
  );
}