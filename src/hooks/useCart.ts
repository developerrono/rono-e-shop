// src/hooks/useCart.ts

// 1. Import the actual hook from your context file.
//    '../context/CartContext' assumes CartContext.tsx is in src/context/
import { useCart } from '../pages/CartContext'; 

// 2. Re-export the hook.
// This allows you to import the hook cleanly from the 'hooks' directory
// in any component, like: import { useCart } from '@/hooks/useCart';
export { useCart };