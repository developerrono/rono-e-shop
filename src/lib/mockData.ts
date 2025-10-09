import tradingBotImg from '@/assets/trading-bot.jpg';
import perfumeImg from '@/assets/perfume.jpg';
import pantsImg from '@/assets/pants.jpg';
import laptopImg from '@/assets/laptop.jpg';
import aiBotImg from '@/assets/trading-bot.jpg';
import forexBotImg from '@/assets/trading-bot.jpg';
import scalperBotImg from '@/assets/trading-bot.jpg';
import cryptoBotImg from '@/assets/trading-bot.jpg';
import sniperBotImg from '@/assets/trading-bot.jpg';
import arbitrageBotImg from '@/assets/trading-bot.jpg';
import gridBotImg from '@/assets/trading-bot.jpg';
import goldBotImg from '@/assets/trading-bot.jpg';
import mt5BotImg from '@/assets/trading-bot.jpg';
import hpImg from '@/assets/laptops/hp.jpg';
import dellImg from '@/assets/laptops/dell.jpg';
import lenovoImg from '@/assets/laptops/lenovo.jpg';
import acerImg from '@/assets/laptops/acer.jpg';
import appleImg from '@/assets/laptops/apple.jpg';
import asusImg from '@/assets/laptops/asus.jpg';
import microsoftImg from '@/assets/laptops/microsoft.jpg';
import samsungImg from '@/assets/laptops/samsung.jpg';
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

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Pro Trading Bot AI',
    description: 'Advanced AI-powered trading bot with machine learning algorithms for cryptocurrency trading.',
    price: 299.99,
    image: tradingBotImg,
    category: 'Trading Bots',
    badge: 'Trending',
    details: 'Our flagship Pro Trading Bot AI uses cutting-edge machine learning algorithms to analyze market trends and execute trades with precision. Perfect for both beginners and experienced traders.',
    features: [
      'AI-powered market analysis',
      '24/7 automated trading',
      'Real-time portfolio tracking',
      'Risk management tools',
      'Multi-exchange support',
      'Telegram notifications'
    ]
  },
   {
      id: 'bot1',
      name: 'AI Trading Bot',
      category: 'Forex',
      price: 99.99,
      badge: 'Popular',
      image: aiBotImg,
      description:
        'An advanced AI-powered trading bot that automates forex trades and optimizes profits.',
      features: [
        'Smart entry and exit detection',
        '24/7 trading automation',
        'Compatible with MT4 & MT5',
      ],
    },
    {
      id: 'bot2',
      name: 'Crypto Sniper Bot',
      category: 'Crypto',
      price: 149.99,
      badge: 'New',
      image: cryptoBotImg,
      description:
        'A lightning-fast crypto bot that executes trades based on precision price movements.',
      features: [
        'Built for Binance, KuCoin, and Bybit',
        'Auto stop-loss and profit tracking',
        'Customizable trading pairs',
      ],
    },
    {
      id: 'bot3',
      name: 'Forex Scalper Pro',
      category: 'Forex',
      price: 129.99,
      image: scalperBotImg,
      description:
        'Perfect for high-frequency traders who want quick entries and exits with accuracy.',
      features: [
        'Low-spread optimization',
        'Works best with EUR/USD and GBP/USD',
        'News filter integration',
      ],
    },
    {
      id: 'bot4',
      name: 'Gold Master Bot',
      category: 'Metals',
      price: 199.99,
      image: goldBotImg,
      description:
        'Specialized in trading gold (XAU/USD) with smart risk management and profit lock.',
      features: [
        'Smart risk management',
        'Profit lock and trailing stop',
        'Fully automated setup',
      ],
    },
    {
      id: 'bot5',
      name: 'MT5 Auto Trader',
      category: 'Forex',
      price: 89.99,
      image: mt5BotImg,
      description:
        'Automates your trading directly in MT5 with preset and custom strategies.',
      features: [
        'Custom strategy support',
        'Real-time analytics',
        'Easy backtesting system',
      ],
    },
    {
      id: 'bot6',
      name: 'Grid Profit Bot',
      category: 'Crypto',
      price: 119.99,
      image: gridBotImg,
      description:
        'Grid trading bot that automates buy/sell orders to capitalize on market volatility.',
      features: [
        'Supports USDT pairs',
        'Customizable grid size',
        'Risk/reward optimization',
      ],
    },
    {
      id: 'bot7',
      name: 'Arbitrage Hunter',
      category: 'Crypto',
      price: 159.99,
      image: arbitrageBotImg,
      description:
        'Finds and exploits price differences across exchanges for instant profit opportunities.',
      features: [
        'Cross-exchange integration',
        'Real-time monitoring',
        'Profit-based execution logic',
      ],
    },
    {
      id: 'bot8',
      name: 'Smart Trend Bot',
      category: 'Forex',
      price: 109.99,
      image: tradingBotImg,
      description:
        'Follows market trends intelligently and executes trades with trailing optimization.',
      features: [
        'Trend detection algorithm',
        'Multi-timeframe analysis',
        'Auto risk calibration',
      ],
    },
    {
      id: 'bot9',
      name: 'AI Hedge Bot',
      category: 'Hedging',
      price: 179.99,
      image: forexBotImg,
      description:
        'Automatically hedges losing positions and maintains balance between buy/sell orders.',
      features: [
        'Advanced hedging logic',
        'Adjustable exposure settings',
        'Supports multiple pairs',
      ],
    },
    {
      id: 'bot10',
      name: 'Sniper Precision Bot',
      category: 'Scalping',
      price: 139.99,
      image: sniperBotImg,
      description:
        'Precision scalping bot that executes trades with millisecond accuracy for fast gains.',
      features: [
        'Ultra-low latency',
        'High accuracy entries',
        'Real-time order control',
      ],
    },
  {
    id: '2',
    name: 'Crypto Scalper Bot',
    description: 'High-frequency trading bot designed for scalping strategies across multiple exchanges.',
    price: 199.99,
    image: tradingBotImg,
    category: 'Trading Bots',
    details: 'Execute rapid trades with our Crypto Scalper Bot. Built for speed and efficiency, this bot excels at capturing small price movements across multiple cryptocurrencies.',
    features: [
      'High-frequency trading',
      'Multi-pair scalping',
      'Low latency execution',
      'Customizable strategies',
      'Stop-loss protection'
    ]
  },
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
  {
    id: '3',
    name: 'Noir Elegance Perfume',
    description: 'Luxurious unisex fragrance with notes of bergamot, jasmine, and sandalwood.',
    price: 89.99,
    image: perfumeImg,
    category: 'Perfumes',
    badge: 'New',
    details: 'Experience sophistication with Noir Elegance. This premium fragrance combines fresh citrus top notes with warm woody base notes for an unforgettable scent.',
    features: [
      '100ml Eau de Parfum',
      'Long-lasting formula',
      'Premium glass bottle',
      'Unisex fragrance',
      'Cruelty-free'
    ]
  },
  {
    id: '4',
    name: 'Royal Oud Collection',
    description: 'Premium oud-based perfume featuring rare Arabian ingredients and exquisite craftsmanship.',
    price: 149.99,
    image: perfumeImg,
    category: 'Perfumes',
    badge: 'Premium',
    details: 'Indulge in the Royal Oud Collection, crafted with rare Arabian oud and precious ingredients. A masterpiece of perfumery that exudes luxury and refinement.',
    features: [
      '75ml concentrated perfume',
      'Authentic Arabian oud',
      'Handcrafted bottle',
      'Limited edition',
      'Gift packaging included'
    ]
  },
  {
    id: '5',
    name: 'Classic Chino Pants',
    description: 'Premium cotton chino pants with modern fit and versatile style for any occasion.',
    price: 59.99,
    image: pantsImg,
    category: 'Men\'s Pants',
    details: 'Elevate your wardrobe with our Classic Chino Pants. Made from premium cotton with a modern fit that works equally well in the office or on weekends.',
    features: [
      '100% premium cotton',
      'Modern slim fit',
      'Multiple color options',
      'Wrinkle-resistant',
      'Machine washable'
    ]
  },
  {
    id: '6',
    name: 'Executive Dress Trousers',
    description: 'Tailored dress pants perfect for professional settings, featuring wrinkle-resistant fabric.',
    price: 79.99,
    image: pantsImg,
    category: 'Men\'s Pants',
    badge: 'Bestseller',
    details: 'Make a lasting impression with our Executive Dress Trousers. Expertly tailored from premium fabric that resists wrinkles and maintains its shape all day.',
    features: [
      'Wrinkle-resistant fabric',
      'Classic tailored fit',
      'Professional appearance',
      'Comfortable waistband',
      'Dry clean or machine wash'
    ]
  },
  {
      id: 'p1',
      name: 'Relaxed Tailored Pants',
      description: 'A modern relaxed-fit pant combining comfort and timeless tailoring.',
      price: 79.99,
      image: pantsImg,
      category: 'Men’s Pants',
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
      price: 69.99,
      image: pantsImg,
      category: 'Men’s Pants',
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
      price: 89.99,
      image: pantsImg,
      category: 'Men’s Pants',
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
      price: 74.99,
      image: pantsImg,
      category: 'Men’s Pants',
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
      price: 64.99,
      image: pantsImg,
      category: 'Men’s Pants',
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
      price: 84.99,
      image: pantsImg,
      category: 'Men’s Pants',
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
      price: 92.99,
      image: pantsImg,
      category: 'Men’s Pants',
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
      price: 59.99,
      image: pantsImg,
      category: 'Men’s Pants',
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
      price: 79.99,
      image: pantsImg,
      category: 'Men’s Pants',
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
      price: 89.99,
      image: pantsImg,
      category: 'Men’s Pants',
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
  {
    id: '7',
    name: 'UltraBook Pro 15',
    description: 'Powerful laptop with Intel i7 processor, 16GB RAM, and 512GB SSD for professional use.',
    price: 1299.99,
    image: laptopImg,
    category: 'Laptops & Tech',
    badge: 'Popular',
    details: 'The UltraBook Pro 15 delivers exceptional performance for professionals. Featuring a stunning display, powerful processor, and all-day battery life.',
    features: [
      'Intel Core i7 processor',
      '16GB DDR4 RAM',
      '512GB NVMe SSD',
      '15.6" Full HD display',
      '10 hour battery life',
      'Backlit keyboard'
    ]
  },
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
  {
    id: '8',
    name: 'Gaming Beast X1',
    description: 'High-performance gaming laptop with RTX 4060 graphics, RGB keyboard, and 144Hz display.',
    price: 1799.99,
    image: laptopImg,
    category: 'Laptops & Tech',
    badge: 'Gaming',
    details: 'Dominate the competition with the Gaming Beast X1. Packed with cutting-edge hardware and a stunning high-refresh display for the ultimate gaming experience.',
    features: [
      'NVIDIA RTX 4060 GPU',
      'Intel Core i9 processor',
      '32GB DDR5 RAM',
      '1TB NVMe SSD',
      '144Hz QHD display',
      'RGB mechanical keyboard',
      'Advanced cooling system'
    ]
  }
];

export const categories = [
  'Trading Bots',
  'Perfumes',
  'Men\'s Pants',
  'Laptops & Tech'
];
