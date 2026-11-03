import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery || Torque Auto Advisor",
  description:
    "Explore photo albums and work highlights from Torque Auto Advisor in Morbi, Gujarat: vehicle documentation, RTO compliance, and client services.",
  alternates: {
    canonical: "/photo-gallery",
  },
  openGraph: {
    title: "Photo Gallery || Torque Auto Advisor",
    description:
      "Explore photo albums and work highlights from Torque Auto Advisor in Morbi, Gujarat.",
    url: "/photo-gallery",
    type: "website",
  },
};

export default function PhotoGalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

