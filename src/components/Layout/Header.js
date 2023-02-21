import React from "react";
import { Link } from "react-router-dom";
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
    </React.Fragment>
  );
};
export default Header;
