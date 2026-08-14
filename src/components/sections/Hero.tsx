"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0 w-full h-[120%]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/photos/fuel-convoy.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-brand-blue/30" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight text-balance">
            Fueling East & Central Africa's Fuel Supply Chain
          </h1>
          <p className="text-lg md:text-xl text-brand-blue-tint/90 max-w-2xl mx-auto text-balance">
            From trading and transport to cross-border clearance and fleet maintenance — HM Elmi Limited moves petroleum products safely across Kenya, Uganda, DR Congo, and South Sudan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white min-w-[160px] text-lg rounded-full">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="min-w-[160px] text-lg rounded-full bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-sm tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-brand-orange to-transparent"
        />
      </motion.div>
    </section>
  );
}
