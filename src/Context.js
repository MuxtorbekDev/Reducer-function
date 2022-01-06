import { createContext, useReducer } from "react";
import { reducer } from "./Reduce";
export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  value.incrementQuantity = (itemId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: itemId } });
  };

  value.decremntQuantity = (itemId) => {
    dispatch({ type: "DICREMENT_QUANTITY", payload: { id: itemId } });
  };
  value.handleBasketShow = () => {
    dispatch({ type: "TOGLE_BASKET" });
  };
  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_BASKET_SHOW", payload: { id: itemId } });
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
