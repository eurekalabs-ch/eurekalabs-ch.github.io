import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InsightGraphSection from "@/components/InsightGraphSection";
import TrustedBySection from "@/components/TrustedBySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MissionSection from "@/components/MissionSection";
import TopicsSection from "@/components/TopicsSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      {/* ValueProposition hidden per request */}
      <MissionSection />
      <TopicsSection />
      <InsightGraphSection />
      <TrustedBySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
