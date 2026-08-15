import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Gallery | HM Elmi Limited",
  description: "View our photo gallery of petroleum transport, cross-border border clearance, and fleet operations across East and Central Africa.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
