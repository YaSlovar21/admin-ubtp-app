
import { CircularProgress } from "@mui/joy";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { login } from "../../services/actions/user";

import logo from '../../images/form-logo.svg';

export default function Login() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(store => store.user.isLoggedIn);
  const isLoginRequest = useSelector(store => store.user.isLoginRequest);
  //управляемые поля
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const org = 'utermo';

  function handleEmailChange(evt) {
    setUserName(evt.target.value);
  }
  function handlePassChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(login(org, userName, password))
  }

  
  return (
    <form className={`form form_hidden ${!isLoggedIn && 'form_block' }`} onSubmit={handleSubmit}>
      <img src={logo} className="w-48 block mx-auto my-20" alt="" />
     
      <input
        className="form__input"
        onChange={handleEmailChange}
        type="text"
        placeholder="username"
        required
      />
      <input 
        className="form__input"
        onChange={handlePassChange}
        type="password"
        placeholder="password"
        required
      />
      <button type="submit" className="form__submit">{!isLoginRequest ? 'Войти' : <><CircularProgress color="success" size="sm" /><span>Заходим...</span></>}</button>
    </form>
  );
}