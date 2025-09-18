// src/types.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  material?: string;
  image: string;
  description: string;
  bestseller?: boolean;
  isNew?: boolean;
  rating?: number;
  reviews?: number;
  deity?: string;
  purpose?: string;
}
