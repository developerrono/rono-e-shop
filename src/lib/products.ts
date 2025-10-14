// src/lib/products.ts

import { Product } from "@/components/ProductCard";

// FIX: Added .ts extension to fix Vite import error
import { perfumeProducts } from "./perfume.ts";
import { tradingBots } from "./trading-Bots.ts";
import { pantsProducts } from "./pants.ts";
import { laptops } from "./laptops.ts";

// Combine all product arrays into a single master list
export const ALL_PRODUCTS: Product[] = [
  ...perfumeProducts,
  ...tradingBots,
  ...pantsProducts,
  // ensure laptop ids are strings to match Product.id type
  ...laptops.map((l) => ({ ...l, id: String(l.id) })),
];