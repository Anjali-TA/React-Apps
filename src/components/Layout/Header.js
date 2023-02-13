import React from "react";
import clothsImage from "../../assets/cloths.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Shopping Cart</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        <button className={classes.logout} onClick={props.onLogout}>Logout</button>
      </header>
      <div className={classes['main-image']}>
        <img src={clothsImage} alt="A shopping website!"/>
      </div>
    </React.Fragment>
  );
};

export default Header;
