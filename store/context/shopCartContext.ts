import { createContext } from "react";

export interface ShopCartInterface {
  name: string,
  price?: number,
  total?: number,
  quantity?: number
}

export const ShopCartContext = createContext<{items: ShopCartInterface[], addItemToCart: () => void}>({
  items: [],
  addItemToCart: () => {}
});