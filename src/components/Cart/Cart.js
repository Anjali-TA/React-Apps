import { useContext } from "react";
import { Alert, Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem(item.id, item.size);
  };

  const cartItems = (
    <Row xs={1} md={2} className="g-3">
      {cartCtx.items.map((item) => (
        <Col key={item.id + item.size}>
          <CartItem
            name={item.name}
            amount={item.amount}
            price={item.price}
            size={item.size}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item)}
          ></CartItem>
        </Col>
      ))}
    </Row>
  );

  return (
    <Container className={classes.container}>
      {!hasItems && (
        <Alert>
          Your Cart it is empty. Please add some items to
          <Link to="/"> Your Cart.</Link>. Give it a click if you like.
        </Alert>
      )}
      {hasItems > 0 && cartItems}
      {hasItems > 0 && (
        <>
          <div className={classes.total}>
            <span>Total amount: </span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <Link to="/">
              <button className={classes["button--alt"]}>Shop More</button>
            </Link>
            <button className={classes.button}>Order</button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
