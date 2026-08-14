import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Marquee } from "@/components/ui/marquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { GalleryStrip } from "@/components/sections/GalleryStrip";
import { CTABanner } from "@/components/sections/CTABanner";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { FloatingChatbot } from "@/components/ui/floating-chatbot";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Marquee />
      <ServicesGrid />
      <WhyUs />
      <GalleryStrip />
      <CTABanner />
      <FloatingWhatsApp />
      <FloatingChatbot />
    </>
  );
}
