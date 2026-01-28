
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: 'Men' | 'Women' | 'Kids' | 'Unisex';
  tag?: string;
}

export interface Testimonial {
  id: number;
  author: string;
  text: string;
  rating: number;
}
