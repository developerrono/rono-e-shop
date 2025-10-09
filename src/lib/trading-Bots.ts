import tradingBotImg from '@/assets/pants.jpg';
import aiBotImg from '@/assets/trading-bot.jpg';
import forexBotImg from '@/assets/trading-bot.jpg';
import scalperBotImg from '@/assets/trading-bot.jpg';
import cryptoBotImg from '@/assets/trading-bot.jpg';
import sniperBotImg from '@/assets/trading-bot.jpg';
import arbitrageBotImg from '@/assets/trading-bot.jpg';
import gridBotImg from '@/assets/trading-bot.jpg';
import goldBotImg from '@/assets/trading-bot.jpg';
import mt5BotImg from '@/assets/trading-bot.jpg';


export const tradingBots = [
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
];
