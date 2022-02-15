import { ADD_ITEM, REMOVE_ITEM } from "./cart.actions";

const cartState = {
  products: [],
};

export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        products: [...state.products, action.itemData],
      };
    }
    case REMOVE_ITEM: {
      const newList = state.products.filter(
        (item) => item.id !== action.itemId
      );
      return {
        ...state,
        products: newList,
      };
    }
    default:
      return state;
  }
};
