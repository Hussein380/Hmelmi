"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/photos/tank-installation-action.jpg", alt: "Underground bulk fuel storage tank installation" },
  { src: "/images/photos/tank-installation-team.jpg", alt: "Team supervising tank installation" },
  { src: "/images/photos/storage-tank-logo-closeup.jpg", alt: "HM Elmi Limited branded storage tank" },
];

export function GalleryStrip() {
  return (
    <section className="py-2 bg-brand-navy overflow-hidden">
      <div className="flex gap-2 w-full overflow-x-auto pb-4 pt-2 px-2 snap-x hide-scrollbar">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative min-w-[85vw] md:min-w-[40vw] h-[300px] md:h-[400px] rounded-xl overflow-hidden snap-center flex-shrink-0"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 85vw, 40vw"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
