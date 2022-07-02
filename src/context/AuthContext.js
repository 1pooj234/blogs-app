import React, { useState } from "react";

export const AuthCtx = React.createContext({
  isLoggedIn: false,
  login() {},
  logout() {},
});

const AuthProvider = (props) => {
  let initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token;
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const values = {
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return <AuthCtx.Provider value={values}>{props.children}</AuthCtx.Provider>;
};

export default AuthProvider;
