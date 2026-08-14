"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { company } from "@/content/company";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const formatNumberForWA = (number: string) => {
    return number.replace(/[\s+]/g, '');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-brand-navy/10 overflow-hidden w-72"
          >
            <div className="bg-[#25D366] p-4 text-white">
              <h3 className="font-bold text-lg">Chat with us!</h3>
              <p className="text-white/90 text-sm">We typically reply within minutes.</p>
            </div>
            <div className="p-2">
              {company.phones.map((phone, i) => (
                <a
                  key={i}
                  href={`https://wa.me/${formatNumberForWA(phone.number)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 hover:bg-brand-blue-tint/20 rounded-xl transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy text-sm">{phone.label}</p>
                    <p className="text-brand-gray text-xs">{phone.number}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        aria-label="WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>
    </div>
  );
}
