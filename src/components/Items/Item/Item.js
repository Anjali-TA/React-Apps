import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./Item.module.css";
import ItemForm from "./ItemForm";

const Item = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const AddToCartHandler = (formData) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: formData.amount,
      price: props.price,
      size: formData.size
    });
  };
  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        {props.isFreeShipping && <div className={classes['free-shipping']}>Free Shipping</div> }
      </div>
      <div>
        <ItemForm id={props.id} availableSizes={props.availableSizes} onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
};

export default Item;
