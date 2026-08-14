import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/services";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/sections/CTABanner";
import { CheckCircle2, Fuel, Truck, MapPinned, Wrench, ArrowLeft } from "@/components/shared/Icons";

// For static generation if desired
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const iconMap: Record<string, React.ReactNode> = {
  Fuel: <Fuel className="w-12 h-12" />,
  Truck: <Truck className="w-12 h-12" />,
  MapPinned: <MapPinned className="w-12 h-12" />,
  Wrench: <Wrench className="w-12 h-12" />,
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-brand-navy text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/generated/hero_background.png')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-screen-xl">
          <Link href="/services" className="inline-flex items-center text-brand-orange hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="p-4 bg-brand-blue-tint/10 rounded-2xl text-brand-orange">
              {iconMap[service.iconName]}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{service.title}</h1>
              <div className="h-1 w-24 bg-brand-orange rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white -mt-16 relative z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-8">
              <div className="prose prose-lg text-brand-gray">
                <p className="text-xl leading-relaxed text-brand-navy font-medium">
                  {service.longDescription}
                </p>
              </div>

              <div className="bg-brand-blue-tint/20 p-8 rounded-2xl border border-brand-blue-tint">
                <h3 className="text-2xl font-bold text-brand-navy mb-6">Service Highlights</h3>
                <ul className="space-y-4">
                  {service.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-brand-gray font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Button size="lg" asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full">
                  <Link href="/contact">Enquire about this service</Link>
                </Button>
              </div>
            </div>

          <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
            {/* Dynamic AI images based on service */}
            <Image 
              src={
                params.slug === "trading-export" ? "/images/photos/storage-terminal.jpg" :
                params.slug === "transport-logistics" ? "/images/photos/fuel-convoy.jpg" :
                params.slug === "cross-border-clearance" ? "/images/photos/cross-border.jpg" :
                "/images/photos/garage-maintenance.jpg"
              } 
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
          </div>
        </div>
        </div>
      </section>
      
      <CTABanner />
    </>
  );
}
