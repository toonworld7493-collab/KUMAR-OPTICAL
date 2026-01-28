
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden border-b border-gray-50">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Left Side: Image */}
        <div className="md:w-1/2 relative bg-off-white">
          <img 
            src="https://picsum.photos/id/64/1200/1200" 
            alt="Person with stylish eyewear" 
            className="w-full h-full object-cover grayscale-[20%] brightness-110 contrast-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>

        {/* Right Side: Content */}
        <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 md:py-0">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-soft-teal uppercase bg-teal-50 rounded-full mb-6">
              Precision Meets Elegance
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-[1.1] mb-8">
              Seeing the World <br /> 
              <span className="italic">Differently.</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 font-light">
              Experience the fusion of advanced optical technology and timeless Scandinavian design. 
              Kumar Optical provides clinical precision with a touch of premium luxury.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-soft-teal text-white font-bold rounded-lg shadow-lg shadow-teal-100 hover:transform hover:-translate-y-1 transition-all">
                Get Free Eye Test
              </button>
              <button className="px-8 py-4 border-2 border-soft-teal text-soft-teal font-bold rounded-lg hover:bg-teal-50 transition-all">
                Claim 20% Off
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src={`https://picsum.photos/id/${i+20}/100/100`} alt="customer" />
                ))}
              </div>
              <p className="text-sm text-gray-400 font-medium">
                Join <span className="text-charcoal font-bold">12,000+</span> happy eyes in our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
