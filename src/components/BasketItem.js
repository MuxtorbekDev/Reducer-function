import { useContext } from "react";
import { ShopContext } from "../Context";

export default function BasketItem(props) {
  const { id, name, price, quantity } = props;
  const { removeFromBasket, incrementQuantity, decremntQuantity } =
    useContext(ShopContext);

  return (
    <li className="collection-item">
      {name} x{quantity} = {price * quantity}
      <b>$</b>
      <span className="secondary-content ">
        <i className="material-icons" onClick={() => incrementQuantity(id)}>
          add_circle
        </i>
        <i className="material-icons" onClick={() => decremntQuantity(id)}>
          do_not_disturb_on
        </i>
        <i className="material-icons" onClick={() => removeFromBasket(id)}>
          delete_forever
        </i>
      </span>
    </li>
  );
}
