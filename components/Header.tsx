
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 soft-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-charcoal tracking-tight">
              KUMAR <span className="text-soft-teal">OPTICAL</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-sm font-medium text-charcoal hover:text-soft-teal transition-colors">EYEWEAR</a>
            <a href="#" className="text-sm font-medium text-charcoal hover:text-soft-teal transition-colors">CONTACT LENSES</a>
            <a href="#" className="text-sm font-medium text-charcoal hover:text-soft-teal transition-colors">EYE TEST</a>
            <a href="#" className="text-sm font-medium text-charcoal hover:text-soft-teal transition-colors">STORES</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-soft-teal hover:bg-opacity-90 transition-all shadow-sm">
              Book Free Test
            </button>
            <button className="md:hidden text-charcoal">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
