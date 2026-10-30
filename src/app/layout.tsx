import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/replica/Header";
import Footer from "@/components/replica/Footer";

export const viewport: Viewport = {
  themeColor: "#c4333b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Welcome to Torque Auto Advisor",
  description:
    "At Torque Auto Advisor, we understand the intricacies of vehicle management and insurance, and we are dedicated to providing you with a seamless and hassle-free experience. Our expert team is committed to ensuring that your vehicle remains roadworthy, insured, and legally compliant at all times.",
  keywords: [
    "Torque Auto Advisor",
    "Driving License Assistance",
    "Vehicle Fitness and Compliance",
    "Insurance Solutions",
    "RTO Consultant Morbi",
    "Vehicle Name Transfer Gujarat",
    "HSRP Number Plate Morbi",
    "CNG Cylinder Re-Testing Morbi"
  ],
  authors: [{ name: "Torque Auto Advisor" }],
  creator: "Torque Auto Advisor",
  publisher: "Torque Auto Advisor",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://torqueautoadvisor.com",
    title: "Torque Auto Advisor | Your trusted partner in comprehensive vehicle services.",
    description:
      "Torque Auto Advisor, Driving License Assistance, Vehicle Fitness and Compliance, Insurance Solutions",
    siteName: "Torque Auto Advisor",
    images: [
      {
        url: "https://torqueautoadvisor.com/img/meta_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Torque Auto Advisor"
      }
    ]
  },
  icons: {
    icon: [
      { url: "/assets/images/materials/favicon.png", sizes: "32x32" },
      { url: "/assets/images/materials/favicon.png", sizes: "16x16" }
    ],
    apple: "/assets/images/materials/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap"
          rel="stylesheet"
        />

        {/* Original Template CSS from Assets */}
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap-select/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/insuba-icons/style.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/insuba.css" />
      </head>
      <body>
        <div className="page-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
