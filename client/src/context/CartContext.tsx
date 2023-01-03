import { createContext, ReactNode, useContext, useState } from 'react';
import { CartItem } from '../model/CartItem';

type CartProviderProps = {
  children: ReactNode;
};

type CartContextType = {
  items: Array<CartItem>;
  updateCart: (id: string, increment: boolean) => void;
  deleteItem: (id: string) => void;
  deleteCart: () => void;
  getItemQuantity: (id: string) => number;
  getCartTotal: () => number;
};

const CartContext = createContext({} as CartContextType);

const CartProvider = (props: CartProviderProps): JSX.Element => {
  const [items, setItems] = useState<Array<CartItem>>([
    {
      id: 'item01',
      quantity: 5,
    },

    {
      id: 'item02',
      quantity: 3,
    },
    {
      id: 'item03',
      quantity: 10,
    },
  ]);

  const _findIndexById = (id: string): number => {
    const index = items.findIndex((item) => item.id === id);
    return index;
  };

  const updateCart = (id: string, increment: boolean): void => {
    const i: number = _findIndexById(id);

    setItems((preValue) => {
      /// If no item found
      if (i === -1) {
        if (!increment) return preValue;
        else preValue.push({ id, quantity: 1 });
      }

      /// Item found
      else {
        if (increment) preValue[i].quantity++;
        else if (preValue[i].quantity === 1) preValue.splice(i, 1);
        else preValue[i].quantity--;
      }
      return preValue.map((a) => a);
    });
  };

  const deleteItem = (id: string): void => {
    const i: number = _findIndexById(id);
    if (i === -1) return;
    setItems((preValue) => {
      preValue.splice(i, 1);
      return preValue.map((a) => a);
    });
  };

  const deleteCart = (): void => {
    setItems([]);
  };

  const getItemQuantity = (id: string): number => {
    const i: number = _findIndexById(id);

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

  return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
