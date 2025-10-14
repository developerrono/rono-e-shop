import hpImg from '../assets/laptops/hp.jpeg';
import dellImg from '../assets/laptops/dell.jpeg';
import lenovoImg from '../assets/laptops/lenovo.jpeg';
import acerImg from '../assets/laptops/acer.jpeg';
import appleImg from '../assets/laptops/apple.jpeg';
import asusImg from '../assets/laptops/asus.jpeg';
import microsoftImg from '../assets/laptops/microsoft.jpeg';
import samsungImg from '../assets/laptops/samsung.jpeg';
import omenImg from '../assets/laptops/omen.jpeg';
import dellalienwareImg from '../assets/laptops/dellalienware.jpeg';

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
    image: omenImg,
    price: 40500,
    category: 'Laptops & Tech', // FIX: Changed from 'Gaming Laptop'
  },
  {
    id: 2,
    name: 'HP Victus 15',
    brand: 'HP',
    description:
      'Affordable gaming laptop with Intel Core i7 and NVIDIA RTX 3050 for smooth performance.',
    image: hpImg,
    price: 110000,
    category: 'Laptops & Tech', // FIX: Changed from 'Gaming Laptop'
  },
  {
    id: 3,
    name: 'Dell XPS 13 Plus',
    brand: 'Dell',
    description:
      'Premium ultrabook with a modern, seamless design and powerful Intel Evo performance.',
    image: dellImg,
    price: 150000,
    category: 'Laptops & Tech', // FIX: Changed from 'Ultrabook'
  },
  {
    id: 4,
    name: 'Dell Alienware m18',
    brand: 'Dell',
    description:
      'Massive 18-inch gaming laptop with top-of-the-line components for desktop-level performance.',
    image: dellalienwareImg,
    price: 70000,
    category: 'Laptops & Tech', // FIX: Changed from 'Gaming Laptop'
  },
  {
    id: 5,
    name: 'Lenovo Legion 5 Pro',
    brand: 'Lenovo',
    description:
      'Combining performance, cooling, and build quality with a 165Hz QHD display.',
    image: lenovoImg,
    price: 500000,
    category: 'Laptops & Tech', // FIX: Changed from 'Gaming Laptop'
  },
  {
    id: 6,
    name: 'Acer Predator Helios 16',
    brand: 'Acer',
    description:
      'Aggressive design with high-end hardware for gamers demanding maximum frame rates.',
    image: acerImg,
    price: 125000,
    category: 'Laptops & Tech', // FIX: Changed from 'Gaming Laptop'
  },
  {
    id: 7,
    name: 'Apple MacBook Pro M3',
    brand: 'Apple',
    description:
      'Ultra-efficient and powerful laptop for creative professionals, featuring the Apple M3 chip.',
    image: appleImg,
    price: 250000,
    category: 'Laptops & Tech', // FIX: Changed from 'Professional Laptop'
  },
  {
    id: 8,
    name: 'ASUS ROG Zephyrus G14',
    brand: 'ASUS',
    description:
      'Compact gaming laptop with exceptional battery life and top-tier AMD Ryzen performance.',
    image: asusImg,
    price: 140000,
    category: 'Laptops & Tech', // FIX: Changed from 'Gaming Laptop'
  },
  {
    id: 9,
    name: 'Microsoft Surface Laptop 5',
    brand: 'Microsoft',
    description:
      'Elegant and portable laptop with vibrant touchscreen, great for work and study.',
    image: microsoftImg,
    price: 120000,
    category: 'Laptops & Tech', // FIX: Changed from 'Ultrabook'
  },
  {
    id: 10,
    name: 'Samsung Galaxy Book3 Pro',
    brand: 'Samsung',
    description:
      'Sleek ultrabook with AMOLED display and great integration with Galaxy devices.',
    image: samsungImg,
    price: 129999,
    category: 'Laptops & Tech', // FIX: Changed from 'Ultrabook'
  },
];