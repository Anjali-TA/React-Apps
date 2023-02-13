import jwt_decode from "jwt-decode";
import React, { Fragment, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Header from "../components/Layout/Header";
import LoginPage from "../components/Login/LoginPage";
import CartProvider from "../store/CartProvider";

const RootLayout = () => {
  //const [isLogin, setIsLogin] = useState(false);
  let data = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(data ? (data.exp * 1000 - Date.now()) > 0 ? data : [] : []);
  const diff = user ? (user.exp - Math.floor(Date.now()/1000)) : 0;
  const expirationDuration = diff > 0 ? diff : 0;

  const [cartIsShown, setCartIsShown] = useState(false);
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    var userObj = jwt_decode(response.credential);
    console.log(userObj);
    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
    //setIsLogin(true);
  }

  useEffect(() => {
    if (user.length === 0) {
      /* global google */
      google.accounts.id.initialize({
        client_id:
          "709380805594-nvtnc6tvb097n8ppds5j53i7g2l85bal.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
      });
    }
    setTimeout(() => {
      console.log("in time out");
      //console.log(expirationDuration);
      localStorage.removeItem("user");
      navigate("/");
    }, expirationDuration);
  }, [user,expirationDuration,navigate]);

  const logOutHandler = () => {
    setUser([]);
    localStorage.removeItem("user");
    // setIsLogin(false);
    navigate("/");
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  return (
    <Fragment>
      {user.length === 0 && <LoginPage />}
      {user.length !== 0 && (
        <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} onLogout={logOutHandler} />
          <Outlet />
        </CartProvider>
      )}
    </Fragment>
  );
};

export default RootLayout;
