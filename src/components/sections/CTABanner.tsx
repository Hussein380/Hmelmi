import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-navy z-0" />
      <div className="absolute inset-0 bg-[url('/images/generated/hero_background.png')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Need fuel moved reliably across the region?
        </h2>
        <p className="text-lg text-brand-blue-tint/90 mb-10 max-w-2xl mx-auto">
          Get in touch with HM Elmi Limited today for trading, transport, and logistics solutions you can count on.
        </p>
        <Button size="lg" asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white min-w-[200px] text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
}
