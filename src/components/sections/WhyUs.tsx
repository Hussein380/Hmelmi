"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

export function WhyUs() {
  const steps = [
    { title: "Trade", desc: "Sourcing & Export" },
    { title: "Transport", desc: "100+ Tankers" },
    { title: "Clear", desc: "Customs Agents" },
    { title: "Maintain", desc: "In-house Garage" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          

          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Why HM Elmi?
            </h2>
            <div className="h-1 w-20 bg-brand-orange rounded-full" />
            <p className="text-lg text-brand-gray leading-relaxed text-balance">
              Most <Link href="/services/trading-export" className="text-brand-blue hover:underline hover:text-brand-orange transition-colors">petroleum trading companies</Link> don't own the <Link href="/fleet-compliance" className="text-brand-blue hover:underline hover:text-brand-orange transition-colors">tanker fleet</Link>. Most transporters don't own the <Link href="/services/cross-border-clearance" className="text-brand-blue hover:underline hover:text-brand-orange transition-colors">cross-border clearance</Link> relationships. 
              <strong className="text-brand-navy font-semibold"> HM Elmi Limited does</strong> — giving clients one fully integrated partner from purchase to final delivery across East Africa.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative py-12 md:py-8">
              {/* Animated connector line */}
              <div className="absolute top-1/2 left-4 right-4 h-1 bg-brand-blue-tint -translate-y-1/2 hidden md:block" />
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-brand-blue to-brand-orange -translate-y-1/2 hidden md:block"
              />

              <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
                {steps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center group relative"
                  >
                    {/* Mobile connecting line */}
                    {i !== steps.length - 1 && (
                      <div className="w-0.5 h-8 bg-brand-blue-tint my-2 md:hidden" />
                    )}

                    <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-blue flex items-center justify-center shadow-lg group-hover:border-brand-orange transition-colors duration-300">
                      <span className="font-bold text-brand-navy group-hover:text-brand-orange transition-colors duration-300">{step.title}</span>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <span className="text-sm font-medium text-brand-gray bg-white px-2">
                        {step.desc}
                      </span>
                    </div>

                    {/* Arrow next to circles on desktop */}
                    {i !== steps.length - 1 && (
                      <div className="absolute top-10 -right-[calc(50%+1rem)] text-brand-orange/50 hidden md:block translate-x-1/2 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
