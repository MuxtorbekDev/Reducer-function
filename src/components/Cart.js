import { useContext } from "react";
import { ShopContext } from "../Context";

export default function Cart() {
  const { order, handleBasketShow = Function.prototype } =
    useContext(ShopContext);
  const quantity = order.length;
  return (
    <div className="cart #00acc1 cyan darken-1" onClick={handleBasketShow}>
      <i className="Medium material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
