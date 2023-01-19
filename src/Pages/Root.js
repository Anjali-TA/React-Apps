import jwt_decode from "jwt-decode";
import React, { Fragment, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/Header/NavBar";
import LoginPage from "../components/Login/LoginPage";

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const [shortenedUrls, setShortenedUrl] = useState([]);
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    var userObj = jwt_decode(response.credential);
    setUser(userObj);
    setIsLogin(true);
  }
  useEffect(() => {
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
  }, [isLogin]);

  const logOutHandler = (event) => {
    setUser({});
    setIsLogin(false);
    navigate("/");
  };


  return (
    <Fragment>
      {!isLogin && <LoginPage />}
      {isLogin && (
        <Fragment>
          <NavBar onLogout={logOutHandler} username={user.name} />
          <Outlet context = {[shortenedUrls, setShortenedUrl]}/>
        </Fragment>
      )}
    </Fragment>
  );
};

export default RootLayout;
