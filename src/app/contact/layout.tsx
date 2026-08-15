import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | HM Elmi Limited",
  description: "Get in touch with HM Elmi Limited for petroleum trading, fleet transport, and cross-border logistics inquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
