import { createContext } from "react";
export const ShopContext = createContext();
const value = {
  example: "Hello From Context",
};
export const ContextProvider = ({ children }) => {
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
