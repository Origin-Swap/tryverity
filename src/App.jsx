import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Features from './components/Features';
import ProcessFlow from './components/ProcessFlow';
import TokenSection from './components/TokenSection';
import WhyUs from './components/WhyUs';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueProps />
      <Features />
      <ProcessFlow />
      <TokenSection />
      <WhyUs />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
