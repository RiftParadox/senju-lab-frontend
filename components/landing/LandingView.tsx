import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { StepsTimeline } from "@/components/landing/StepsTimeLine";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Material } from "@/components/landing/Material";

export function LandingView() {
  return (
    <div className="min-h-screen bg-[#0b0917]">
      <Header />
      <main>
        <Hero />
        <Material />
        <StepsTimeline />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}