import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createUser } from "../api/user";
import { FullPageCentredContainer } from '../components/Container'
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
    const response = await createUser(email, password, fullName);

    if (typeof response === 'string')
        history.push('/create-first-board')
  };



  return (
    <FullPageCentredContainer>
      <SignupPageForm
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        createNewUser={createNewUser}
      />
    </FullPageCentredContainer>
  );
};
