import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us || Torque Auto Advisor",
  description:
    "Get in touch with Torque Auto Advisor in Morbi, Gujarat. Contact us for vehicle insurance, driving licenses, passing, and RTO advisory support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us || Torque Auto Advisor",
    description:
      "Get in touch with Torque Auto Advisor in Morbi, Gujarat. Contact us for vehicle insurance, driving licenses, passing, and RTO advisory support.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

