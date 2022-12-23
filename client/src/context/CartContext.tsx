import { Context, createContext, ReactNode, useContext, useState } from 'react';
import { CartItem } from '../model/CartItem';

type CartProviderProps = {
  children: ReactNode;
};

type CartContextType = {
  items: Array<CartItem>;
  updateCart: (id: string) => void;
  deleteItem: (id: string) => void;
  deleteCart: () => void;
  getItemQuantity: (id: string) => number;
  getCartTotal: () => number;
};

const CartContext = createContext({} as CartContextType);

const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<Array<CartItem>>([]);

  const _findIndexById = (id: string): number => {
    /* Do something */

    return 0; //!TEMPORAL
  };

  const updateCart = (id: string): void => {
    /* Do something */
  };

  const deleteItem = (id: string): void => {
    /* Do something */
  };

  const deleteCart = (): void => {
    /* Do something */
  };

  const getItemQuantity = (id: string): number => {
    /* Do something */

    return 0; //!TEMPORAL
  };

  const getCartTotal = (): number => {
    /* Do something */

    return 0; //!TEMPORAL
  };

  const contextValue = {
    items,
    updateCart,
    deleteItem,
    deleteCart,
    getItemQuantity,
    getCartTotal,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
