import pantsImg from '../assets/pants.jpg';
import chinoImg from '../assets/pants/chino.jpeg';
import tailoredImg from '../assets/pants/tailored.jpeg';
import croppedImg from '../assets/pants/cropped.jpeg';
import denimImg from '../assets/pants/darkjeans.jpeg';
import hybridImg from '../assets/pants/hybrid.jpeg';
import patteredImg from '../assets/pants/pattered.jpeg';
import pleatedImg from '../assets/pants/pleated.jpeg';
import techflexImg from '../assets/pants/techflex.jpeg';
import earthtoneImg from '../assets/pants/earthtone.jpeg';
import slimdenimImg from '../assets/pants/slimdenim.jpeg';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "Men's Pants";
  badge?: string;
  details?: string;
  features?: string[];
}

export const pantsProducts: Product[] = [
  {
    id: 'p1',
    name: 'Relaxed Tailored Pants',
    description: 'A modern relaxed-fit pant combining comfort and timeless tailoring.',
    price: 2500,
    image: tailoredImg,
    category: 'Men\'s Pants',
    badge: 'New Arrival',
    details:
      'Comfort meets class with our Relaxed Tailored Pants — crafted with soft, breathable fabric that moves with you while maintaining a refined silhouette.',
    features: [
      'Relaxed modern fit',
      'Soft stretch fabric',
      'Wrinkle-resistant design',
      'Belt loops and side pockets',
      'Machine washable',
    ],
  },
  {
    id: 'p2',
    name: 'Earth Tone Cotton Chinos',
    description: 'Classic chinos in rich earthy and neutral tones for everyday style.',
    price: 2000,
    image: earthtoneImg,
    category: "Men's Pants",
    details:
      'Inspired by nature, our Earth Tone Cotton Chinos are the go-to pair for versatile styling — perfect for work or weekend wear.',
    features: [
      '100% premium cotton',
      'Slim tapered fit',
      'Earthy and neutral palette',
      'Durable stitching',
      'Button closure and zip fly',
    ],
  },
  {
    id: 'p3',
    name: 'TechFlex Performance Trousers',
    description: 'Moisture-wicking, stretchable tech-fabric trousers for active professionals.',
    price: 1800,
    image: techflexImg,
    category: "Men's Pants",
    badge: 'Bestseller',
    details:
      'The TechFlex Performance Trousers deliver movement freedom, breathability, and modern polish — ideal for travel and long workdays.',
    features: [
      '4-way stretch tech fabric',
      'Water and wrinkle resistant',
      'Quick-dry properties',
      'Hidden elastic waistband',
      'Lightweight comfort',
    ],
  },
  {
    id: 'p4',
    name: 'Hybrid Drawstring Chinos',
    description: 'Smart-casual chinos featuring a drawstring waistband and sleek tailoring.',
    price: 1200,
    image: hybridImg,
    category: "Men's Pants",
    details:
      'Blending comfort with sophistication, these drawstring chinos provide a modern take on office and lounge wear.',
    features: [
      'Hybrid drawstring waistband',
      'Soft twill fabric',
      'Tapered ankle design',
      'Front pleats for structure',
      'Hidden back pockets',
    ],
  },
  {
    id: 'p5',
    name: 'Cropped Smart Pants',
    description: 'Trendy cropped pants offering breathable style for warm seasons.',
    price: 1500,
    image: croppedImg,
    category: "Men's Pants",
    details:
      'These cropped ankle-length pants are perfect for showing off sneakers or loafers while keeping a refined look.',
    features: [
      'Ankle-length cut',
      'Relaxed slim fit',
      'Lightweight cotton blend',
      'Minimalist side pockets',
      'Versatile summer wear',
    ],
  },
  {
    id: 'p6',
    name: 'Pleated Heritage Pants',
    description: 'Classic pleated trousers reimagined for today’s fashion-forward men.',
    price: 1000,
    image: pleatedImg,
    category: "Men's Pants",
    badge: 'Trending',
    details:
      'Pleats are back — and better. The Pleated Heritage Pants merge vintage charm with modern comfort.',
    features: [
      'Double front pleats',
      'High-rise waist',
      'Relaxed fit through the thigh',
      'Classic belt loops',
      'Structured cotton-linen fabric',
    ],
  },
  {
    id: 'p7',
    name: 'Patterned Textured Pants',
    description: 'Subtle patterned pants with a refined feel for casual elegance.',
    price: 1000,
    image: patteredImg,
    category: "Men's Pants",
    details:
      'Make a quiet statement with these textured pants featuring woven patterns that add sophistication without flash.',
    features: [
      'Premium woven texture',
      'Soft-touch cotton',
      'Slim tailored cut',
      'Subtle pattern detailing',
      'Wrinkle-resistant',
    ],
  },
  {
    id: 'p8',
    name: 'Classic Chino Pants',
    description: 'Timeless chinos for everyday versatility and comfort.',
    price: 1600,
    image: chinoImg,
    category: "Men's Pants",
    details:
      'Our Classic Chino Pants are wardrobe essentials — clean, minimal, and endlessly adaptable for any occasion.',
    features: [
      'Straight leg fit',
      'Mid-rise waist',
      'Durable cotton twill',
      'Multiple color options',
      'Machine washable',
    ],
  },
  {
    id: 'p9',
    name: 'Regular Fit Denim Jeans',
    description: 'Everyday jeans offering a classic look with durable comfort.',
    price: 1300,
    image: denimImg,
    category: "Men's Pants",
    badge: 'Popular',
    details:
      'Built for comfort and longevity, these regular-fit jeans offer a timeless look with a perfect blend of structure and softness.',
    features: [
      'Mid-weight denim',
      'Classic 5-pocket design',
      'Regular fit through seat and thigh',
      'Reinforced stitching',
      'Fades beautifully with wear',
    ],
  },
  {
    id: 'p10',
    name: 'Slim-Fit Dark Wash Jeans',
    description: 'Modern slim-fit jeans with a rich dark wash finish.',
    price: 1400,
    image: slimdenimImg,
    category: "Men's Pants",
    details:
      'These dark-wash jeans are your go-to for polished casual outfits — sleek, comfortable, and built to last.',
    features: [
      'Slim-tapered fit',
      'Dark indigo wash',
      'Minimal distressing',
      'Stretch denim blend',
      'Matte hardware finish',
    ],
  },
];

export const pantsCategories = ['Men’s Pants'];
