import { Suspense } from "react";
import { cookies } from "next/headers";
import { DashboardView } from "@/components/dashboard/DashboardView";
import { LandingView } from "@/components/landing/LandingView";

async function HomeContent() {
  const sessionCookie = (await cookies()).get("senju_token");
  return sessionCookie?.value ? <DashboardView /> : <LandingView />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<LandingView />}>
      <HomeContent />
    </Suspense>
  );
}