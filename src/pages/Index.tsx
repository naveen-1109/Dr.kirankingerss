import React, { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy loading sections for performance
const TrustSection = lazy(() => import("@/components/TrustSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const HealthInsightsSection = lazy(() => import("@/components/HealthInsightsSection"));
const ChildGutHealthSection = lazy(() => import("@/components/ChildGutHealthSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingFallback = () => <div className="h-20 w-full animate-pulse bg-muted/20 rounded-xl" />;

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      
      <Suspense fallback={<LoadingFallback />}>
        <TrustSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <WhyChooseUs />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <HealthInsightsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <ChildGutHealthSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <GallerySection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
