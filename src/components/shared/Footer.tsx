import Link from "next/link";
import Image from "next/image";
import { company } from "@/content/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white border-t border-brand-navy">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="bg-white p-2 inline-block rounded-md">
              <Image 
                src="/images/logo/hm-elmi-logo.jpg" 
                alt={`${company.name} Logo`} 
                width={120} 
                height={45} 
                className="object-contain"
              />
            </div>
            <p className="text-brand-blue-tint/80 text-sm">{company.tagline}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-orange">Quick Links</h3>
            <ul className="space-y-2 text-sm text-brand-blue-tint/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/fleet-compliance" className="hover:text-white transition-colors">Fleet & Compliance</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-orange">Contact</h3>
            <ul className="space-y-2 text-sm text-brand-blue-tint/80">
              {company.phones.map((phone, i) => (
                <li key={i}>{phone.label}: {phone.number}</li>
              ))}
              <li>{company.email}</li>
              <li className="pt-2">{company.address.line1}<br />{company.address.line2}<br />{company.address.city}, {company.address.country}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-orange">Regions Served</h3>
            <ul className="space-y-2 text-sm text-brand-blue-tint/80">
              {company.regions.map((region, i) => (
                <li key={i}>{region}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-blue-tint/60">
          <p>© {currentYear} {company.name}. All rights reserved.</p>
          <Link href="/admin" className="hover:text-white transition-colors mt-2 md:mt-0">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
