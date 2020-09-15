import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FullPageCentredContainer} from '../components/Container'
import { loginUser } from "../api/user";
import { LoginPageForm } from '../components/Form';
import firebase from "firebase";
import history from "../history";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginExistingUser = async (event) => {
    event.preventDefault();
    await loginUser(email, password);
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user, user.email)
      if (user && user.email === email) {
        history.push('/create-first-board')
      }
    });
  };



  return (
    <FullPageCentredContainer>
      <LoginPageForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loginExistingUser={loginExistingUser}
      />
    </FullPageCentredContainer>
  );
};
