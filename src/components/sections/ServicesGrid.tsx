"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { Fuel, Truck, MapPinned, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Fuel: <Fuel className="w-8 h-8 transition-colors duration-300" />,
  Truck: <Truck className="w-8 h-8 transition-colors duration-300" />,
  MapPinned: <MapPinned className="w-8 h-8 transition-colors duration-300" />,
  Wrench: <Wrench className="w-8 h-8 transition-colors duration-300" />,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function ServicesGrid() {
  return (
    <section className="py-24 bg-brand-blue-tint/20">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Our Services</h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full" />
          <p className="text-brand-gray text-lg">
            Integrated petroleum logistics across East and Central Africa.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={item}>
                <Dialog>
                  <DialogTrigger className="group h-full block text-left w-full outline-none cursor-pointer">
                    <Card className="h-full flex flex-col border-border/50 bg-white hover:border-brand-orange/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image 
                          src={
                            service.slug === "trading-export" ? "/images/photos/storage-terminal.jpg" :
                            service.slug === "transport-logistics" ? "/images/photos/fuel-convoy.jpg" :
                            service.slug === "cross-border-clearance" ? "/images/photos/cross-border.jpg" :
                            "/images/photos/garage-maintenance.jpg"
                          }
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-navy group-hover:text-brand-orange transition-colors duration-300 shadow-sm z-10">
                          {iconMap[service.iconName]}
                        </div>
                      </div>
                      <CardHeader className="space-y-2 pt-6">
                        <CardTitle className="text-xl group-hover:text-brand-blue transition-colors duration-300">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <CardDescription className="text-base text-brand-gray/90 leading-relaxed">
                          {service.shortDescription}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl overflow-hidden p-0 border-none bg-white sm:rounded-3xl">
                    <div className="relative h-64 w-full">
                      <Image 
                        src={
                          service.slug === "trading-export" ? "/images/photos/storage-terminal.jpg" :
                          service.slug === "transport-logistics" ? "/images/photos/fuel-convoy.jpg" :
                          service.slug === "cross-border-clearance" ? "/images/photos/cross-border.jpg" :
                          "/images/photos/garage-maintenance.jpg"
                        }
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-brand-navy/10 flex items-end p-8">
                        <div className="flex items-center gap-4 text-white">
                          <div className="p-3 bg-brand-orange rounded-xl">
                            {iconMap[service.iconName]}
                          </div>
                          <DialogTitle className="text-3xl font-bold">{service.title}</DialogTitle>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 max-h-[60vh] overflow-y-auto">
                      <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                        {service.longDescription}
                      </p>
                      
                      <div className="bg-brand-blue-tint/20 p-6 rounded-2xl mb-8 border border-brand-blue-tint/50">
                        <h4 className="font-bold text-brand-navy text-xl mb-4">Service Highlights</h4>
                        <ul className="space-y-3">
                          {service.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start text-brand-gray">
                              <span className="text-brand-orange mr-3 mt-1 text-xl leading-none">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button asChild className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full">
                        <Link href="/contact">Enquire about this service</Link>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
