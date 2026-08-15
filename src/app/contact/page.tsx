"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { company } from "@/content/company";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(5, { message: "Phone number is required." }),
  enquiryType: z.string().min(1, { message: "Please select an enquiry type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      enquiryType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = `*New Enquiry from Website*\n\n*Name:* ${values.name}\n*Company:* ${values.company || 'N/A'}\n*Email:* ${values.email}\n*Phone:* ${values.phone}\n*Service:* ${values.enquiryType}\n\n*Message:*\n${values.message}`;
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/254719191910?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
    form.reset();
  }

  return (
    <>
      <section className="bg-brand-navy text-white pt-20 pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-brand-blue-tint/90 max-w-2xl mx-auto">
            Get in touch for reliable fuel trading, transport, and logistics solutions across East and Central Africa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-blue-tint/10 -mt-16">
        <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8 bg-white p-8 rounded-2xl shadow-xl relative z-10 border border-border/50 h-fit">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange-tint flex items-center justify-center text-brand-orange flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Call or WhatsApp</h4>
                      {company.phones.map((phone, i) => (
                        <p key={i} className="text-brand-gray text-sm mb-1">
                          <span className="font-medium">{phone.label}:</span> {phone.number}
                        </p>
                      ))}
                      <Button asChild variant="outline" size="sm" className="mt-3 w-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white">
                        <a href={`https://wa.me/254719191910`} target="_blank" rel="noreferrer">
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange-tint flex items-center justify-center text-brand-orange flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Email</h4>
                      <a href={`mailto:${company.email}`} className="text-brand-gray text-sm hover:text-brand-orange transition-colors">
                        {company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange-tint flex items-center justify-center text-brand-orange flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Office Location</h4>
                      <p className="text-brand-gray text-sm">
                        {company.address.line1}<br />
                        {company.address.line2}<br />
                        {company.address.city}, {company.address.country}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-xl relative z-10 border border-border/50">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Send us a message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Logistics" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+254 700 000 000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="enquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enquiry Type</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...field}
                          >
                            <option value="">Select a service...</option>
                            <option value="Fuel Trading/Export">Fuel Trading/Export</option>
                            <option value="Transport Booking">Transport Booking</option>
                            <option value="Cross-Border Clearance">Cross-Border Clearance</option>
                            <option value="Garage/Parts">Garage/Parts</option>
                            <option value="Other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your requirements..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" size="lg" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>
      
      {/* Map Embed */}
      <section className="h-[400px] w-full bg-brand-gray/10 relative">
        {/* Note: This iframe uses a generic Eldoret query as requested to not guess a precise location */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.699708785461!2d35.2575294!3d0.5284055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101a07bb184dd%3A0xc6c4f7be1a80d463!2sUganda%20Rd%2C%20Eldoret!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>
    </>
  );
}
