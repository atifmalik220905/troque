import MainSlider from "@/components/replica/MainSlider";
import Marquee from "@/components/replica/Marquee";
import AboutSection from "@/components/replica/AboutSection";
import FunfactSection from "@/components/replica/FunfactSection";
import ServicesCarousel from "@/components/replica/ServicesCarousel";
import TestimonialsCarousel from "@/components/replica/TestimonialsCarousel";
import FaqSection from "@/components/replica/FaqSection";
import NeedContact from "@/components/replica/NeedContact";
import NewsBlogs from "@/components/replica/NewsBlogs";

export default function Home() {
  return (
    <>
      <MainSlider />
      <Marquee />
      <AboutSection />
      <FunfactSection />
      <ServicesCarousel />
      <TestimonialsCarousel />
      <FaqSection />
      <NeedContact />
      <NewsBlogs />
    </>
  );
}
