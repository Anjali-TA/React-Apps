import { useContext } from "react";
import Card from "react-bootstrap/Card";
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
      size: formData.size,
    });
  };
  return (
    <Card key={props.key} className={classes.card} >
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div className={classes.price}>{price}</div>
        {props.isFreeShipping && (
          <div className={classes["free-shipping"]}>Free Shipping</div>
        )}
      </Card.Body>
      <Card.Footer>
        <ItemForm
          id={props.id}
          availableSizes={props.availableSizes}
          onAddToCart={AddToCartHandler}
        />
      </Card.Footer>
    </Card>
  );
};

export default Item;
