import perfumeImg from '@/assets/perfume.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  details?: string;
  features?: string[];
}

export const perfumesProducts: Product[] = [
  {
    id: 'pf1',
    name: 'Azzaro Wanted by Night',
    description: 'An intense and sensual fragrance for the confident man.',
    price: 89.99,
    image: perfumeImg,
    category: 'Perfumes',
    badge: 'Popular',
    details:
      'A bold fragrance combining cinnamon, tobacco, and cedarwood, designed for men who know how to leave a lasting impression.',
    features: [
      '100ml Eau de Parfum',
      'Warm and spicy notes',
      'Long-lasting scent',
      'Perfect for evening wear',
      'Signature Azzaro bottle design',
    ],
  },
  {
    id: 'pf2',
    name: 'BVLGARI Man in Black',
    description: 'A daring blend of rum, leather, and spices for the modern gentleman.',
    price: 119.99,
    image: perfumeImg,
    category: 'Perfumes',
    badge: 'Luxury',
    details:
      'BVLGARI Man in Black celebrates strength and charisma with bold notes of rum, leather, and tonka bean — refined masculinity in a bottle.',
    features: [
      '100ml Eau de Parfum',
      'Spicy oriental scent',
      'Premium packaging',
      'Long-lasting intensity',
      'Made in Italy',
    ],
  },
  {
    id: 'pf3',
    name: 'BVLGARI Omnia Crystalline',
    description: 'A radiant floral fragrance that embodies elegance and grace.',
    price: 99.99,
    image: perfumeImg,
    category: 'Perfumes',
    details:
      'Omnia Crystalline captures purity with lotus flower, bamboo, and soft musk — perfect for everyday sophistication.',
    features: [
      '65ml Eau de Toilette',
      'Fresh floral notes',
      'Ideal for daytime wear',
      'Elegant glass bottle',
      'Timeless feminine aroma',
    ],
  },
  {
    id: 'pf4',
    name: 'Davidoff Cool Water',
    description: 'A refreshing aquatic fragrance that defines timeless masculinity.',
    price: 69.99,
    image: perfumeImg,
    category: 'Perfumes',
    badge: 'Classic',
    details:
      'A legendary scent blending marine notes with lavender, mint, and amber — the perfect signature for men of calm confidence.',
    features: [
      '125ml Eau de Toilette',
      'Fresh aquatic aroma',
      'Long-lasting freshness',
      'Versatile for daily use',
      'Iconic blue bottle',
    ],
  },
  {
    id: 'pf5',
    name: 'Davidoff Cool Water Woman',
    description: 'A crisp, ocean-inspired fragrance for the modern woman.',
    price: 64.99,
    image: perfumeImg,
    category: 'Perfumes',
    details:
      'Inspired by the serenity of the sea, this scent combines pineapple, lily, and sandalwood for a refreshing feminine touch.',
    features: [
      '100ml Eau de Toilette',
      'Fruity-floral notes',
      'Ideal for warm weather',
      'Elegant aquatic essence',
      'Light and refreshing finish',
    ],
  },
  {
    id: 'pf6',
    name: 'Dunhill Icon',
    description: 'A sophisticated scent capturing timeless British elegance.',
    price: 105.99,
    image: perfumeImg,
    category: 'Perfumes',
    badge: 'Signature',
    details:
      'Dunhill Icon blends neroli, black pepper, and vetiver — a fragrance for men who appreciate refinement and confidence.',
    features: [
      '100ml Eau de Parfum',
      'Woody aromatic scent',
      'Masculine and classy',
      'Heavy metal packaging',
      'Made in the UK',
    ],
  },
  {
    id: 'pf7',
    name: 'Giorgio Armani Acqua di Gio',
    description: 'A legendary fragrance symbolizing freedom and freshness.',
    price: 119.99,
    image: perfumeImg,
    category: 'Perfumes',
    badge: 'Bestseller',
    details:
      'Acqua di Gio is an iconic blend of marine, citrus, and woody notes — perfect for the man who embodies calm strength.',
    features: [
      '100ml Eau de Toilette',
      'Fresh aquatic notes',
      'Long-lasting wear',
      'Ideal for all occasions',
      'Iconic Armani classic',
    ],
  },
  {
    id: 'pf8',
    name: 'Giorgio Armani Si',
    description: 'A bold and elegant feminine fragrance celebrating strength and grace.',
    price: 139.99,
    image: perfumeImg,
    category: 'Perfumes',
    details:
      'Si by Giorgio Armani combines blackcurrant nectar, rose, and vanilla — sensual, powerful, and unmistakably modern.',
    features: [
      '100ml Eau de Parfum',
      'Feminine floral scent',
      'Long-lasting aroma',
      'Elegant bottle design',
      'Perfect for special occasions',
    ],
  },
  {
    id: 'pf9',
    name: 'Hermès Terre d’Hermès',
    description: 'A sophisticated woody fragrance rooted in nature and elegance.',
    price: 145.99,
    image: perfumeImg,
    category: 'Perfumes',
    badge: 'Elite',
    details:
      'A refined balance of orange, vetiver, and cedar — Terre d’Hermès captures the harmony between earth and sky.',
    features: [
      '100ml Eau de Toilette',
      'Citrus woody scent',
      'Premium French craftsmanship',
      'Refillable glass bottle',
      'Award-winning formula',
    ],
  },
  {
    id: 'pf10',
    name: 'Issey Miyake L’Eau d’Issey Pour Homme',
    description: 'A timeless fragrance celebrating water, purity, and energy.',
    price: 109.99,
    image: perfumeImg,
    category: 'Perfumes',
    details:
      'Clean, balanced, and invigorating — this fragrance blends yuzu, sandalwood, and musk for a fresh, lasting impression.',
    features: [
      '125ml Eau de Toilette',
      'Fresh woody scent',
      'Long-lasting formula',
      'Minimalist Japanese design',
      'Perfect for daily wear',
    ],
  },
  {
    id: 'pf11',
    name: 'Paco Rabanne 1 Million',
    description: 'A bold, seductive fragrance for men who love to stand out.',
    price: 129.99,
    image: perfumeImg,
    category: 'Perfumes',
    badge: 'Iconic',
    details:
      '1 Million is a blend of amber, leather, and cinnamon — packaged in its signature gold bar bottle to symbolize success and charisma.',
    features: [
      '100ml Eau de Toilette',
      'Spicy amber notes',
      'Luxury gold packaging',
      'Long-lasting projection',
      'Perfect for night events',
    ],
  },
];

export const perfumesCategories = ['Perfumes'];
