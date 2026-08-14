"use client";

import { motion } from "framer-motion";

export function ElvioraLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-12 h-12 fill-brand-navy">
        {/* Geometric Hexagon E */}
        <polygon points="20,30 50,12 80,30 50,48" />
        <polygon points="20,70 50,88 80,70 50,52" />
        <polygon points="20,30 20,70 50,52 50,12" />
        <polygon points="80,30 80,45 65,55 65,40" />
        <polygon points="80,70 80,55 65,45 65,60" />
      </svg>
      <div className="flex flex-col items-center">
        <span className="font-bold text-brand-navy tracking-[0.2em] leading-none text-sm">ELVIORA</span>
        <span className="text-[0.45rem] font-bold text-brand-navy/70 tracking-widest mt-1">TRADING L.L.C</span>
      </div>
    </div>
  );
}

export function FortifyLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-10 h-10 fill-brand-navy">
        {/* Geometric F */}
        <polygon points="30,10 90,10 90,35 60,35 60,10" />
        <polygon points="10,10 40,10 40,35 10,35" />
        <polygon points="10,45 70,45 70,70 40,70 40,45" />
        <polygon points="10,80 40,80 40,100 10,100" />
      </svg>
      <span className="font-bold text-brand-navy text-2xl tracking-tight">Fortify</span>
    </div>
  );
}

export function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-brand-blue-tint py-12 border-y border-brand-navy/10 flex flex-col items-center">
      <p className="text-brand-navy uppercase text-sm font-bold tracking-widest mb-8">Trusted By International Trading Partners</p>
      <div className="relative flex max-w-full overflow-hidden w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-blue-tint to-transparent z-10" />
        
        <motion.div
          className="flex whitespace-nowrap items-center gap-24 md:gap-48"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {/* Repeat array for seamless scroll */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-24 md:gap-48">
              <ElvioraLogo />
              <FortifyLogo />
            </div>
          ))}
        </motion.div>
        
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-blue-tint to-transparent z-10" />
      </div>
    </div>
  );
}
