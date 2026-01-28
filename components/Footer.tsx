
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-charcoal tracking-tight mb-6 block">
              KUMAR <span className="text-soft-teal">OPTICAL</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Providing premium eye care solutions since 1995. We combine modern aesthetics with clinical excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-charcoal uppercase tracking-widest mb-6">Collections</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-soft-teal transition-colors">Optical Frames</a></li>
              <li><a href="#" className="hover:text-soft-teal transition-colors">Sunglasses</a></li>
              <li><a href="#" className="hover:text-soft-teal transition-colors">Digital Protection</a></li>
              <li><a href="#" className="hover:text-soft-teal transition-colors">Sports Eyewear</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-charcoal uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-soft-teal transition-colors">Free Eye Test</a></li>
              <li><a href="#" className="hover:text-soft-teal transition-colors">Lens Consult</a></li>
              <li><a href="#" className="hover:text-soft-teal transition-colors">Frame Repairs</a></li>
              <li><a href="#" className="hover:text-soft-teal transition-colors">Contact Fitting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-charcoal uppercase tracking-widest mb-6">Visit Us</h4>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              123 Vision Avenue, Downtown<br />
              New Delhi, India 110001
            </p>
            <p className="text-sm text-charcoal font-bold">+91 987 654 3210</p>
          </div>
        </div>
        
        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 Kumar Optical. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-charcoal transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-charcoal transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
