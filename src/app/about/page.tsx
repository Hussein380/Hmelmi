import Image from "next/image";
import { company } from "@/content/company";
import { CTABanner } from "@/components/sections/CTABanner";
import { Marquee } from "@/components/ui/marquee";
import { RegionsMap } from "@/components/sections/RegionsMap";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">About HM Elmi Limited</h1>
                <div className="h-1 w-24 bg-brand-orange rounded-full" />
              </div>
              
              <div className="prose prose-lg text-brand-gray">
                <p>
                  HM Elmi Limited is a Kenyan-owned petroleum trading, transport and logistics group headquartered in Eldoret, Kenya. 
                  The company combines a licensed road-transport fleet, regional fuel trading and export, dedicated cross-border clearance support, 
                  and its own heavy-vehicle garage — giving clients a single partner for moving petroleum products from source to destination.
                </p>
                <h3 className="text-2xl font-semibold text-brand-navy mt-10 mb-4">A Uniquely Integrated Model</h3>
                <p>
                  Most trading companies don't own the trucks. Most transporters don't own the border relationships. 
                  HM Elmi Limited does — giving clients one accountable partner from purchase to delivery.
                </p>
              </div>

            </div>

            <div className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/photos/tank-installation-action.jpg" 
                alt="HM Elmi Limited tank installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
          </div>
        </div>
      </section>
      <RegionsMap />
      <Marquee />
      <CTABanner />
    </div>
  );
}
