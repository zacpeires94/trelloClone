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
    const response = await loginUser(email, password)
    // a response could be 'The password is invalid or the user does not have a password.'
    // use for password validation / error message
    console.log(response)
    if (response.operationType === 'signIn') {
      history.push('/')
    }
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
