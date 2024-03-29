import { useContext } from "react";
import { ShopContext } from "../Context";

export default function GoodItem(props) {
  const { id, name, description, price, full_background } = props;

  const { addToBasket } = useContext(ShopContext);
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <span className="card-title">{name}</span>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({ id, name, price })}
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price}$
        </span>
      </div>
    </div>
  );
}
