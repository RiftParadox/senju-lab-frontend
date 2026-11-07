// src/app/login/page.tsx
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      badgeText="Portal de clientes"
      title="Bienvenido de vuelta."
      subtitle="Accede para seguir tus encargos, revisar cotizaciones y comenzar algo nuevo."
    >
      <LoginForm />
    </AuthLayout>
  );
}