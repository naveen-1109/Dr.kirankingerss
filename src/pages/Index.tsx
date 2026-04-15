import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HealthInsightsSection from "@/components/HealthInsightsSection";
import ChildGutHealthSection from "@/components/ChildGutHealthSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <HealthInsightsSection />
      <ChildGutHealthSection />

      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
