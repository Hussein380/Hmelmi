"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  createdAt: string;
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch gallery");
      } finally {
        setIsLoading(false);
      }
    };
    fetchGallery();
  }, []);

  return (
    <>
      <section className="bg-brand-navy text-white pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-brand-blue-tint/90 max-w-2xl mx-auto">
            A visual journey of our fleet, operations, and cross-border logistics.
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-blue-tint/10 min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-12 h-12 animate-spin text-brand-orange" />
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-border shadow-sm">
              <p className="text-brand-gray text-xl">The gallery is currently empty.</p>
              <p className="text-brand-gray/80 mt-2">Check back soon for new photos!</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 group">
                  <div className="relative w-full aspect-auto">
                    {/* Note: since we don't know the exact dimensions of uploaded photos, we use a standard aspect ratio or standard width/height layout */}
                    <img 
                      src={item.url} 
                      alt={item.caption || "HM Elmi Gallery"} 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {item.caption && (
                    <div className="p-5 border-t border-border/50">
                      <p className="text-brand-navy font-medium leading-relaxed">{item.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
