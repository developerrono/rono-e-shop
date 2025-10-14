// src/lib/trading-Bots.ts

import tradingBotImg from '@/assets/trading-bot.jpg';
import aiBotImg from '@/assets/bots/aibot.jpeg';
import forexBotImg from '@/assets/bots/forexbot.jpeg';
import scalperBotImg from '@/assets/bots/scalperbot.jpeg';
import cryptoBotImg from '@/assets/bots/cryptobot.jpeg';
import sniperBotImg from '@/assets/bots/sniperbot.jpeg';
import arbitrageBotImg from '@/assets/bots/arbitragebot.jpeg';
import gridBotImg from '@/assets/bots/gridbot.jpeg';
import goldBotImg from '@/assets/bots/goldbot.jpeg';
import mt5BotImg from '@/assets/bots/mt5bot.jpeg';


// FIX 1: Renamed export to match import (tradingBots)
export const tradingBots = [
  {
    id: 'bot1',
    name: 'AI Trading Bot',
    category: 'Trading Bots', // FIX 2: Changed from 'Trading-Bots' to 'Trading Bots'
    price: 9999,
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
    category: 'Trading Bots', // FIX 2: Changed from 'Trading-Bots' to 'Trading Bots'
    price: 14999,
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
    category: 'Trading Bots', // FIX 2: Changed from 'Trading-Bot' to 'Trading Bots'
    price: 12999,
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
    category: 'Trading Bots', // FIX 2: Changed from 'Trading-Bot' to 'Trading Bots'
    price: 19999,
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
    category: 'Trading Bots', // FIX 2: Changed from 'Trading-Bot' to 'Trading Bots'
    price: 8999,
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
    category: 'Trading Bots', // FIX 2: Changed from 'Trading-Bot' to 'Trading Bots'
    price: 11999,
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
    category: 'Trading Bots', // FIX 2: Changed from 'Trading-Bot' to 'Trading Bots'
    price: 15999,
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
    id: 'bot9',
    name: 'AI Hedge Bot',
    category: 'Trading Bots', // FIX 2: Changed from 'Trading-Bot' to 'Trading Bots'
    price: 17999,
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
    category: 'Trading Bots', // FIX 2: Changed from 'Trading-Bot' to 'Trading Bots'
    price: 13999,
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