
import React from 'react';

const OfferBanner: React.FC = () => {
  return (
    <div className="bg-off-white py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white border border-premium-gold/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-premium-gold/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-soft-teal/5 rounded-full blur-2xl"></div>

        <div className="mb-8 md:mb-0 relative z-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Summer Vision Savings</h2>
          <p className="text-gray-500 text-lg">
            Enjoy <span className="text-soft-teal font-bold">20% off</span> your first complete pair of glasses.
          </p>
        </div>
        
        <button className="relative z-10 bg-charcoal text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-colors shadow-lg">
          Claim My Discount
        </button>
      </div>
    </div>
  );
};

export default OfferBanner;
