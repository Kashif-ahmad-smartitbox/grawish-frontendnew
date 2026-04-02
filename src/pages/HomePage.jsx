import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseGrawish from '../components/WhyChooseGrawish';
import GrawishImpact from '../components/GrawishImpact';
import AIEcosystem from '../components/AIEcosystem';
import ProvenResults from '../components/ProvenResults';
import GrawishCore from '../components/GrawishCore';
import Services from '../components/Services';
import EventManagement from '../components/EventManagement';
import GiftingMerchandise from '../components/GiftingMerchandise';
import HowItWorks from '../components/HowItWorks';
import StartGrowing from '../components/StartGrowing';
import WhyGrawish from '../components/WhyGrawish';
import Comparison from '../components/Comparison';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

const HomePage = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  return (
    <div className="min-h-screen bg-white" data-testid="homepage">
      <Navbar onContactClick={openContact} />
      <Hero onContactClick={openContact} />
      <WhyChooseGrawish />
      <GrawishImpact />
      <AIEcosystem />
      <ProvenResults />
      <GrawishCore />
      <Services />
      <EventManagement onContactClick={openContact} />
      <GiftingMerchandise onContactClick={openContact} />
      <HowItWorks />
      <StartGrowing onContactClick={openContact} />
      <WhyGrawish />
      <Comparison />
      <Footer onContactClick={openContact} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default HomePage;
