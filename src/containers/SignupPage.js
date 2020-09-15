import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createUser } from "../api/user";
import { SignupPageForm } from '../components/Form';
import firebase from "firebase";
import history from "../history";

const SignupPageContainer = styled.div`
  background: #f9fafc;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createNewUser = async (event) => {
    event.preventDefault();
    await createUser(email, password, fullName);
        //check to see if email exists already in db - firebase admin sdk
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user, user.email)
      if (user && user.email === email) {
        history.push('/create-first-board')
      }
    });
  };



  return (
    <SignupPageContainer>
      <SignupPageForm
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        createNewUser={createNewUser}
      />
    </SignupPageContainer>
  );
};
