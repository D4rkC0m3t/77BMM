
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MobileRepairWidgets from '../components/MobileRepairWidgets';
import ScrollEffects from '../components/ScrollEffects';
import ServicesSection from '../components/ServicesSection';
import BookingSection from '../components/BookingSection';
import ContactSection from '../components/ContactSection';
import Mobile3D from '../components/Mobile3D';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      <Navigation />
      <HeroSection />
      <MobileRepairWidgets />
      <ScrollEffects />
      <ServicesSection />
      <BookingSection />
      <ContactSection />
      
      {/* Floating 3D Mobile Element */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-10 hidden xl:block">
        <Mobile3D />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
