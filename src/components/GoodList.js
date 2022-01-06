import { useContext } from "react";
import { ShopContext } from "../Context";
import GoodItem from "./GoodItem";

export default function GoodList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothng here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} />
      ))}
    </div>
  );
}
