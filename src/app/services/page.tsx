import { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Services | Petroleum Trading & Logistics | HM Elmi Limited",
  description: "Explore our specialized services: cross-border petroleum clearance, bulk fuel transport, garage maintenance, and regional petroleum trading.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-navy text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/20 to-transparent z-0" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Integrated Petroleum Logistics</h1>
          <p className="text-xl text-brand-blue-tint/90">
            End-to-end solutions for moving fuel safely and efficiently across East and Central Africa.
          </p>
        </div>
      </section>
      
      <div className="-mt-12">
        <ServicesGrid />
      </div>
      
      <CTABanner />
    </>
  );
}
