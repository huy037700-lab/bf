import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.name === item.name);
      if (found) {
        return prev.map((i) =>
          i.name === item.name
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const increase = (name) => {
    setCart((prev) =>
      prev.map((i) =>
        i.name === name ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  const decrease = (name) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.name === name ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (name) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increase,
        decrease,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
