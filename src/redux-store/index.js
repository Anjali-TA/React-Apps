import { createStore } from "redux";

const defaultState = { items: [], totalAmount: 0 };

const itemReducer = (state = defaultState, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id && item.size === action.item.size
    );
    const existingItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    let updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id && item.size === action.size
    );
    const existingItem = state.items[existingCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(
        (item) =>
          (item.id !== action.id && item.size !== action.size) ||
          (item.id === action.id && item.size !== action.size) ||
          (item.id !== action.id && item.size === action.size)
      );
    }else{
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = {...existingItem, amount: existingItem.amount -1};
    }
    return{
      items: updatedItems,
      totalAmount: updateTotalAmount
    }
  }
  return state;
};
const store = createStore(itemReducer);

export default store;
