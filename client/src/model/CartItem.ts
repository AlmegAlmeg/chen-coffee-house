/**
 * Our cart will be an array of CartItem.
 *
 * Notice how we don't need anything more than
 * an id and quantity.
 */
export type CartItem = {
  id: string;
  quantity: number;
};
