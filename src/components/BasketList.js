import { useContext } from "react";
import { ShopContext } from "../Context";
import BasketItem from "./BasketItem";

export default function BasketList() {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="bskl">
      <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>
        {order.length ? (
          order.map((item) => {
            return <BasketItem key={item.id} {...item} />;
          })
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active">
          Total Cost: {totalPrice}
          <b>$</b>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </div>
  );
}
