import { CTABanner } from "@/components/sections/CTABanner";
import { CheckCircle2, Truck, Droplet } from "@/components/shared/Icons";
import { FortifyLogo, ElvioraLogo } from "@/components/ui/marquee";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-brand-navy py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-screen-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects & Partnerships</h1>
          <p className="text-xl text-brand-blue-tint max-w-3xl">
            Highlighting our track record of managing complex supply chain logistics, cross-border clearance, and reliable fuel delivery for international partners.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl space-y-24">
          
          {/* Case Study 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-brand-blue-tint p-8 md:p-12 rounded-3xl relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl group-hover:bg-brand-orange/20 transition-colors" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[300px]">
                 <div className="w-48 h-48 rounded-full border border-brand-navy/10 flex flex-col items-center justify-center p-4 text-center bg-white shadow-xl scale-125">
                    <FortifyLogo className="!grayscale-0 !opacity-100 scale-125" />
                 </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4" /> Delivered Supply & Ex-Depot
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Fortify International FZE</h2>
              <p className="text-lg text-brand-gray">
                HM Elmi Limited entered into a multi-year agreement to supply premium petroleum products (PMS and AGO) to Fortify International FZE. Operating under strict supply chain parameters, we serve as the primary conduit for their regional distribution.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-tint flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg">Cross-Border Delivery</h4>
                    <p className="text-brand-gray">Executing 'Delivered Supply' directly to customer premises in Beni, Democratic Republic of Congo.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-tint flex items-center justify-center shrink-0">
                    <Droplet className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg">Ex-Depot Supply Management</h4>
                    <p className="text-brand-gray">Providing seamless 'Ex Depot' loading services straight from our terminal directly into partner fuel carriers.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full h-px bg-border" />

          {/* Case Study 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4" /> Petroleum Trading
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Elviora International FZE</h2>
              <p className="text-lg text-brand-gray">
                A strategic partnership for the wholesale supply of petroleum products. HM Elmi Limited leverages its integrated logistics model to ensure Elviora International maintains continuous product flow across East and Central Africa without interruption.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-tint flex items-center justify-center shrink-0">
                    <Droplet className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg">Product Consistency</h4>
                    <p className="text-brand-gray">Guaranteed supply allocation of both Premium Motor Spirit (PMS) and Automotive Gas Oil (AGO).</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-tint flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-lg">Dedicated Fleet Utilization</h4>
                    <p className="text-brand-gray">Direct allocation of our ~100-strong tanker fleet to meet required wholesale load volumes.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-brand-orange/5 p-8 md:p-12 rounded-3xl relative overflow-hidden group">
              <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl group-hover:bg-brand-navy/10 transition-colors" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[300px]">
                 <div className="w-48 h-48 rounded-full border border-brand-navy/10 flex flex-col items-center justify-center p-4 text-center bg-white shadow-xl relative overflow-hidden scale-125">
                    <ElvioraLogo className="!grayscale-0 !opacity-100 scale-125" />
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTABanner />
    </div>
  );
}
