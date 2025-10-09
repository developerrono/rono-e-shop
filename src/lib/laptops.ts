// src/lib/laptops.ts
import hpImg from '@/assets/laptops/hp.jpg';
import dellImg from '@/assets/laptops/dell.jpg';
import lenovoImg from '@/assets/laptops/lenovo.jpg';
import acerImg from '@/assets/laptops/acer.jpg';
import appleImg from '@/assets/laptops/apple.jpg';
import asusImg from '@/assets/laptops/asus.jpg';
import microsoftImg from '@/assets/laptops/microsoft.jpg';
import samsungImg from '@/assets/laptops/samsung.jpg';

export interface Laptop {
  id: number;
  name: string;
  brand: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export const laptops: Laptop[] = [
  {
    id: 1,
    name: 'HP Omen 16',
    brand: 'HP',
    description:
      'High-performance gaming laptop with NVIDIA RTX graphics and a 165Hz display, ideal for gamers and creators.',
    image: hpImg,
    price: 1399,
    category: 'Gaming Laptop',
  },
  {
    id: 2,
    name: 'HP Victus 15',
    brand: 'HP',
    description:
      'Affordable gaming laptop with Intel Core i7 and NVIDIA RTX 3050 for smooth performance.',
    image: hpImg,
    price: 999,
    category: 'Gaming Laptop',
  },
  {
    id: 3,
    name: 'Dell Alienware M16',
    brand: 'Dell',
    description:
      'Premium gaming powerhouse featuring top-tier GPU and advanced cooling for immersive gaming.',
    image: dellImg,
    price: 1899,
    category: 'Gaming Laptop',
  },
  {
    id: 4,
    name: 'Dell G15',
    brand: 'Dell',
    description:
      'Stylish gaming laptop with AMD Ryzen processors and solid performance for its price.',
    image: dellImg,
    price: 1099,
    category: 'Gaming Laptop',
  },
  {
    id: 5,
    name: 'Lenovo Legion 5 Pro',
    brand: 'Lenovo',
    description:
      'Balanced gaming laptop combining performance, cooling, and build quality with a 165Hz QHD display.',
    image: lenovoImg,
    price: 1299,
    category: 'Gaming Laptop',
  },
  {
    id: 6,
    name: 'Acer Predator Helios 16',
    brand: 'Acer',
    description:
      'Aggressive design with high-end hardware for gamers demanding maximum frame rates.',
    image: acerImg,
    price: 1499,
    category: 'Gaming Laptop',
  },
  {
    id: 7,
    name: 'Apple MacBook Pro M3',
    brand: 'Apple',
    description:
      'Ultra-efficient and powerful laptop for creative professionals, featuring the Apple M3 chip.',
    image: appleImg,
    price: 1999,
    category: 'Professional Laptop',
  },
  {
    id: 8,
    name: 'ASUS ROG Zephyrus G14',
    brand: 'ASUS',
    description:
      'Compact gaming laptop with exceptional battery life and top-tier AMD Ryzen performance.',
    image: asusImg,
    price: 1599,
    category: 'Gaming Laptop',
  },
  {
    id: 9,
    name: 'Microsoft Surface Laptop 5',
    brand: 'Microsoft',
    description:
      'Elegant and portable laptop with vibrant touchscreen, great for work and study.',
    image: microsoftImg,
    price: 1199,
    category: 'Ultrabook',
  },
  {
    id: 10,
    name: 'Samsung Galaxy Book3 Pro',
    brand: 'Samsung',
    description:
      'Sleek ultrabook with AMOLED display and great integration with Galaxy devices.',
    image: samsungImg,
    price: 1299,
    category: 'Ultrabook',
  },
];
