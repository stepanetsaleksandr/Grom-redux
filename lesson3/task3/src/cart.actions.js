export const ADD_ITEM = "CART/ADD_ITEM";
export const REMOVE_ITEM = "CART/REMOVE_ITEM";

export const addProduct = (itemObj) => ({
  type: ADD_ITEM,
  itemObj,
});

export const removeProduct = (itemId) => ({
  type: REMOVE_ITEM,
  itemId,
});
