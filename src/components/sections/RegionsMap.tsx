"use client";

import { motion } from "framer-motion";
import { MapPinned } from "@/components/shared/Icons";

export function RegionsMap() {
  return (
    <section className="py-20 bg-brand-blue-tint relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Operational Footprint</h2>
          <p className="text-lg text-brand-navy/80">
            Headquartered in Kenya, with a dedicated cross-border clearance presence and regional transport lines connecting East and Central Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { country: "Kenya", details: "HQ in Eldoret. Transport Base in Mombasa." },
            { country: "Uganda", details: "Transit and Delivery corridors." },
            { country: "DR Congo", details: "Dedicated clearance at Vurra & Mahagi." },
            { country: "South Sudan", details: "Cross-border supply lines." }
          ].map((region, i) => (
            <motion.div 
              key={region.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-brand-navy/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <MapPinned className="w-24 h-24 text-brand-orange" />
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4 text-brand-orange">
                  <MapPinned className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{region.country}</h3>
                <p className="text-brand-gray text-sm">{region.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background map elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0a2240" d="M45.7,-76.4C58.9,-69.3,69.2,-55.4,76.5,-40.7C83.7,-26,87.9,-10.6,85.2,3.8C82.5,18.2,72.9,31.5,62.8,43.2C52.7,54.9,42.1,65,28.8,72.3C15.5,79.5,-0.5,83.9,-16.1,81.3C-31.7,78.7,-46.8,69,-59.1,57.1C-71.4,45.2,-80.9,31.1,-84.9,15.6C-88.9,0.1,-87.3,-16.8,-80.1,-31.2C-72.9,-45.6,-60.1,-57.5,-46.2,-64.3C-32.3,-71.1,-17.3,-72.8,-1.1,-71.1C15.1,-69.4,32.5,-83.5,45.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}
