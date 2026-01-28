
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import OfferBanner from './components/OfferBanner';
import ProductGallery from './components/ProductGallery';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Main Hero Section */}
        <Hero />

        {/* Clinical/Trust Value Props */}
        <TrustSection />

        {/* Featured Product Collections */}
        <ProductGallery />

        {/* Special Promotion Banner */}
        <OfferBanner />

        {/* Additional Clinical Info / Location Section */}
        <section className="py-24 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-8">
                  The Clinical <span className="italic">Edge</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-soft-teal">
                      <span className="font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-charcoal mb-2">Automated Phoropters</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Faster, more comfortable, and incredibly precise digital refraction technology.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-soft-teal">
                      <span className="font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-charcoal mb-2">Retinal Imaging</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">High-definition scans to detect early signs of eye conditions with 99.9% accuracy.</p>
                    </div>
                  </div>
                </div>
                <button className="mt-12 self-start px-8 py-4 bg-charcoal text-white font-bold rounded-xl hover:bg-black transition-all">
                  Learn About Technology
                </button>
              </div>
              <div className="lg:w-1/2 relative min-h-[400px]">
                <img 
                  src="https://picsum.photos/id/238/1000/1000" 
                  alt="Optical clinic technology" 
                  className="w-full h-full object-cover grayscale-[30%] opacity-90"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Persistent AI Support */}
      <AIAssistant />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default App;
