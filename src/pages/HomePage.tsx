import React from 'react';
import { Header } from '../components/Header';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { VideoSection } from '../components/VideoSection';
import { ClientShowcase } from '../components/ClientShowcase';
import { Comparison } from '../components/Comparison';
import { PricingTable } from '../components/PricingTable';
import { PricingBenefits } from '../components/PricingBenefits';
import { OptionalServices } from '../components/OptionalServices';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { AnimatedSection } from '../components/AnimatedSection';
import { FAQ } from '../components/FAQ';
import { EbookPopup } from '../components/EbookPopup';
import { ChevronRight } from 'lucide-react';

export function HomePage() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <EbookPopup />
      
      {/* Attention */}
      <Header />
      
      {/* Interest */}
      <AnimatedSection>
        <Features />
        <div className="container mx-auto px-6 pb-20">
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Your Growth Journey</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <VideoSection />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <HowItWorks />
        <div className="container mx-auto px-6 pb-20">
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Transform Your Content Strategy</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Desire */}
      <AnimatedSection delay={0.4}>
        <ClientShowcase />
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <Testimonials />
        <div className="container mx-auto px-6 pb-20">
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Join Our Success Stories</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <Comparison />
        <div className="container mx-auto px-6 pb-20">
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Choose the Smarter Solution</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Action */}
      <AnimatedSection delay={0.7}>
        <PricingTable />
      </AnimatedSection>

      <AnimatedSection delay={0.8}>
        <PricingBenefits />
        <div className="container mx-auto px-6 pb-20">
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.9}>
        <OptionalServices />
      </AnimatedSection>

      <AnimatedSection delay={1.0}>
        <FAQ />
        <div className="container mx-auto px-6 pb-20">
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Ready to Scale Your Content?</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={1.1}>
        <ContactForm />
      </AnimatedSection>
      
      <Footer />
    </>
  );
}