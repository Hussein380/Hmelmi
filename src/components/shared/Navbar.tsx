"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "@/components/shared/Icons";
import { company } from "@/content/company";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-8 mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-32 md:h-16 md:w-40 mix-blend-multiply">
              <Image 
                src="/images/logo/hm-elmi-logo.jpg" 
                alt={`${company.name} Logo`} 
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-brand-orange">Home</Link>
          <Link href="/about" className="transition-colors hover:text-brand-orange">About</Link>
          <Link href="/services" className="transition-colors hover:text-brand-orange">Services</Link>
          <Link href="/gallery" className="transition-colors hover:text-brand-orange">Gallery</Link>
          <Link href="/projects" className="transition-colors hover:text-brand-orange">Projects</Link>
          <Link href="/fleet-compliance" className="transition-colors hover:text-brand-orange">Fleet & Compliance</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <div className="h-5 w-px bg-border" />
            <Link href="/admin" className="text-xs text-muted-foreground/60 hover:text-brand-orange transition-colors">Admin</Link>
          </div>
          <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white hidden md:flex">
            <Link href="/contact">Get a Quote</Link>
          </Button>

          {/* Mobile Nav Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className={`md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10`}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-brand-navy border-brand-navy">
              <nav className="flex flex-col gap-8 mt-10">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-brand-orange transition-colors">Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-brand-orange transition-colors">About</Link>
                <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-brand-orange transition-colors">Services</Link>
                <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-brand-orange transition-colors">Gallery</Link>
                <Link href="/projects" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-brand-orange transition-colors">Projects</Link>
                <Link href="/fleet-compliance" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-brand-orange transition-colors">Fleet & Compliance</Link>
                <div className="pt-4 mt-4 border-t border-white/10 space-y-4">
                  <Button asChild className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
                  </Button>
                  <Link href="/admin" onClick={() => setIsOpen(false)} className="block text-center text-sm text-white/40 hover:text-brand-orange transition-colors">Admin</Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
