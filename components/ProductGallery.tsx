
import React from 'react';
import { Product } from '../types';

const products: Product[] = [
  { id: '1', name: 'Scandi Minimalist', brand: 'Ørgreen', price: 299, image: 'https://picsum.photos/id/160/400/400', category: 'Unisex', tag: 'Bestseller' },
  { id: '2', name: 'Vintage Tortoise', brand: 'Ray-Ban', price: 185, image: 'https://picsum.photos/id/201/400/400', category: 'Men' },
  { id: '3', name: 'Azure Crystal', brand: 'Prada', price: 420, image: 'https://picsum.photos/id/249/400/400', category: 'Women', tag: 'New' },
  { id: '4', name: 'Titanium Flex', brand: 'Lindberg', price: 550, image: 'https://picsum.photos/id/175/400/400', category: 'Unisex' },
];

const ProductGallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Curated Collection</h2>
            <p className="text-gray-400 font-light">Explore our seasonal selection of premium frames selected by our stylists.</p>
          </div>
          <button className="mt-8 md:mt-0 text-soft-teal font-bold border-b-2 border-soft-teal hover:text-charcoal hover:border-charcoal transition-all pb-1">
            View All Eyewear
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="neumorphic-card p-4 group cursor-pointer transition-all hover:scale-[1.02]">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-off-white mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-premium-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="px-2 pb-2">
                <p className="text-[10px] font-bold text-soft-teal uppercase tracking-widest mb-1">{product.brand}</p>
                <h3 className="text-lg font-bold text-charcoal mb-4">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-light text-charcoal">${product.price}</span>
                  <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
