import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem } from "../model/CartItem";

/**
 * We're going to manage the entire cart state from here
 *
 * As you can see, we have (almost) all the functions we need
 * to add items, remove, delete and so on.
 *
 * The context is what we are using to get the entire state from
 * all around our app. From anywhere we'll want we can call
 * some functions to handle the state like in the next examples.
 */

type CartProviderProps = {
  children: ReactNode;
};

/**
 * In here, we tell the context the types we're going to export
 * to our app. If you're going to add more function or variables
 * make sure to add them here as well.
 */
type CartContextType = {
  items: Array<CartItem>;
  updateCart: (id: string) => void;
  deleteItem: (id: string) => void;
  deleteCart: () => void;
  getItemQuantity: (id: string) => number;
  getCartTotal: () => number;
};

/**
 * This is the way to create a context in react.
 * Nothing too hard, just syntax
 */
const CartContext = createContext({} as CartContextType);

/**
 * We want to wrap the entire app with [CartProvider], so we
 * could have access to the state in every component.
 *
 * Please head over to App.tsx to see how I wrapped it.
 *
 * @param props holds the entire app inside.
 * @returns the app itself with all the children inside.
 */
const CartProvider = (props: CartProviderProps): ReactNode => {
  /**
   * This is our state. Notice that we export only the items
   * and not the setItems function!
   */
  const [items, setItems] = useState<Array<CartItem>>([]);

  /**
   * It's easier to get the index of the item in our state than
   * just get the item itself. If the item was found, you can
   * use items[index] to manage his own state.
   *
   * Please notife we DO NOT export this funciton, it's only
   * for our own help in this file.
   *
   * @param id product id
   * @returns the index of the id in our items. In case our
   * item is not found, will return -1
   */
  const _findIndexById = (id: string): number => {
    /* Do something */

    return 0; //!TEMPORAL
  };

  /**
   * updateCart function handles increment, decrement, add
   * and remove from cart. This function will be the largest here
   * so take it easy, start with finding if the item is found
   * and what to do with that.
   *
   * It's easier then you think...
   *
   * @param id product id
   */
  const updateCart = (id: string): void => {
    /* Do something */
  };

  /**
   * In case we want to press a button that will delete
   * a single item, no matter it's quantity, use this function.
   *
   * @param id product id
   */
  const deleteItem = (id: string): void => {
    /* Do something */
  };

  /**
   * Delete all the items from the cart.
   * This function is the easiest.
   */
  const deleteCart = (): void => {
    /* Do something */
  };

  /**
   * Let's say we want to show in the product page
   * the quantity of the product we're viewing, in case
   * the user added it to the cart.
   *
   * @param id product id
   * @returns a quantity
   */
  const getItemQuantity = (id: string): number => {
    /* Do something */

    return 0; //!TEMPORAL
  };

  /**
   * We want to show the total, please think how this function
   * will work. You can use the reduce() method or any other
   * way you know.
   *
   * This function is not simple, but not hard.
   *
   * @returns the total price of ALL the items in cart
   */
  const getCartTotal = (): number => {
    /* Do something */

    return 0; //!TEMPORAL
  };

  /**
   * This is all the functions and state we will use
   * in our app. If you add anything, make sure to export
   * it here ass well.
   */
  const contextValue = {
    items,
    updateCart,
    deleteItem,
    deleteCart,
    getItemQuantity,
    getCartTotal,
  };

  /**
   * Eventually this is how we provide the state,
   * this is what react syntax looks like.
   */
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

/**
 * Please head to Products.tsx in pages directory to see how we use it.
 *
 * @returns a distruction object with everything we'll want.
 */
export const useCart = () => useContext(CartContext);

export default CartProvider;
