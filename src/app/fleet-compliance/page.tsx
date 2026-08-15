import Image from "next/image";
import { Metadata } from "next";
import { ShieldCheck, Truck } from "@/components/shared/Icons";
import { company } from "@/content/company";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Fleet & Compliance | Petroleum Logistics | HM Elmi Limited",
  description: "Learn about our rigorous safety standards, real-time fleet tracking, and regulatory compliance that keeps our tanker fleet safe across East Africa.",
};

export default function FleetCompliancePage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/generated/hero_background.png')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Fleet & Compliance</h1>
            <div className="h-1 w-24 bg-brand-orange rounded-full" />
            <p className="text-xl text-brand-blue-tint/90">
              Operating safely and legally across East and Central Africa with a fully licensed fleet and dedicated depot infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-8 h-8 text-brand-orange" />
                  <h2 className="text-3xl font-bold text-brand-navy">Licensing & Authorizations</h2>
                </div>
                <Card className="bg-brand-blue-tint/30 border-brand-blue-tint">
                  <CardHeader>
                    <CardTitle className="text-xl text-brand-navy">EPRA Licence</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-brand-navy/10 pb-4">
                      <div className="text-brand-gray font-medium text-sm">Type</div>
                      <div className="md:col-span-2 text-brand-navy font-semibold">{company.licence.type}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-brand-navy/10 pb-4">
                      <div className="text-brand-gray font-medium text-sm">Licence No.</div>
                      <div className="md:col-span-2 text-brand-navy font-semibold">{company.licence.number}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-brand-navy/10 pb-4">
                      <div className="text-brand-gray font-medium text-sm">Serial No.</div>
                      <div className="md:col-span-2 text-brand-navy font-semibold">{company.licence.serial}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-brand-navy/10 pb-4">
                      <div className="text-brand-gray font-medium text-sm">Issuing Authority</div>
                      <div className="md:col-span-2 text-brand-navy font-semibold">{company.licence.authority}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-brand-navy/10 pb-4">
                      <div className="text-brand-gray font-medium text-sm">Legislation</div>
                      <div className="md:col-span-2 text-brand-navy font-semibold">{company.licence.legislation}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-b border-brand-navy/10 pb-4">
                      <div className="text-brand-gray font-medium text-sm">Licensed Premises</div>
                      <div className="md:col-span-2 text-brand-navy font-semibold">{company.licence.licensedBase}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="text-brand-gray font-medium text-sm">Expiry</div>
                      <div className="md:col-span-2 text-brand-orange font-bold">{company.licence.expiry}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="w-8 h-8 text-brand-orange" />
                  <h2 className="text-3xl font-bold text-brand-navy">Our Fleet</h2>
                </div>
                <p className="text-lg text-brand-gray leading-relaxed">
                  HM Elmi Limited operates {company.fleetSize} company-owned tankers and trailers, each operating under EPRA authorization. 
                  Our fleet is maintained to the highest safety standards by our in-house garage in Eldoret, ensuring reliable transit 
                  across challenging regional routes.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Storage & Depot Infrastructure</h2>
              <p className="text-lg text-brand-gray leading-relaxed mb-8">
                HM Elmi Limited maintains underground bulk fuel storage tanks at its depot sites to support loading and regional distribution.
              </p>
              
              <div className="space-y-6">
                <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src="/images/photos/tank-installation-action.jpg" 
                    alt="Tank Installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image 
                      src="/images/photos/fuel-convoy.jpg" 
                      alt="Fleet Convoy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image 
                      src="/images/photos/storage-terminal.jpg" 
                      alt="Storage Terminal"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <CTABanner />
    </>
  );
}
