import React from "react";
import { Link } from "react-router-dom";
import shoppingImage from "../../assets/shopping.webp";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Shopping Cart</h1>
        <Link to="/cart"><HeaderCartButton onClick={props.onShowCart}></HeaderCartButton></Link>
        <button className={classes.logout} onClick={props.onLogout}>
          Logout
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={shoppingImage} alt="A shopping website!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
