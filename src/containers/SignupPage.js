import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createUser } from "../api/user";
import { SignupPageForm } from "../components/Form";
import firebase from "firebase";
import history from "../history";

const SignupPageContainer = styled.div`
  background: #f9fafc;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ({ user }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createNewUser = (event) => {
    event.preventDefault();
    createUser(email, password, fullName);
    firebase.auth().onAuthStateChanged((user) => {
      if (user.email === email) {
        history.push("/");
      }
    });
    setFullName("");
    setEmail("");
    setPassword("");
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
