"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * value));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function StatsBar() {
  const stats = [
    { value: 100, prefix: "~", suffix: "", label: "Company-owned tankers & trailers" },
    { value: 100, prefix: "", suffix: "%", label: "EPRA Licensed transporter", isTextValue: "EPRA" },
    { value: 3, prefix: "", suffix: "", label: "Export markets (UG, DRC, SSD)" },
    { value: 4, prefix: "", suffix: "", label: "Integrated service lines" },
  ];

  return (
    <section className="bg-brand-navy py-16 border-y border-brand-navy/90 relative z-20 -mt-2">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
                {stat.isTextValue ? (
                  <span className="text-brand-orange">{stat.isTextValue}</span>
                ) : (
                  <>
                    <span className="text-brand-orange">{stat.prefix}</span>
                    <AnimatedCounter value={stat.value} />
                    <span className="text-brand-orange">{stat.suffix}</span>
                  </>
                )}
              </div>
              <p className="text-brand-blue-tint/70 text-sm md:text-base font-medium max-w-[180px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
