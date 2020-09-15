import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const SignupFormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 3px;
  padding: 24px 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  form {
    width: 320px;
  }
  a {
    color: rgb(0, 82, 204);
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

const SignupLoginFormText = styled.p`
  text-align: center;
  color: #5e6c84;
  font-size: 16px;
  letter-spacing: -0.01em;
  line-height: 28px;
  margin: 0;
  font-weight: bold;
`;

const SingnupLoginButton = styled.button`
  align-items: baseline;
  box-sizing: border-box;
  display: flex;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100%;
  color: rgb(255, 255, 255);
  height: 40px;
  line-height: 40px;
  border-width: 0px;
  text-decoration: none;
  background: rgb(0, 82, 204);
  border-radius: 3px;
  padding: 0px 8px;
  transition: background 0.1s ease-out 0s,
    box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  outline: none;
  margin-top: 24px;
  font-size: 14px;
`;

const SignupLoginFormInput = styled.input`
  max-width: 400px;
  font-size: 14px;
  background-color: #fafbfc;
  border: 2px solid #dfe1e6;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
  height: 44px;
  padding: 7px;
  font-size: 14px;
  width: 100%;
  margin-top: 24px;
`;

const GreyLine = styled.div`
  height: 1px;
  width: 100%;
  background: rgb(213, 216, 222);
  margin: 24px 0;
`;

export const SignupPageForm = ({fullName, setFullName, email, setEmail, password, setPassword, createNewUser}) => {
    console.log(fullName, email, password)
    return (
    <SignupFormContainer>
      <SignupLoginFormText>Sign up for your account</SignupLoginFormText>
      <form onSubmit={(event) => createNewUser(event)}>
        <SignupLoginFormInput placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value) }/>
        <SignupLoginFormInput placeholder="Enter full name" value={fullName} onChange={event => setFullName(event.target.value)}/>
        <SignupLoginFormInput placeholder="Create password" type="password" value={password} onChange={event => setPassword(event.target.value)}/>
        <SingnupLoginButton type="submit">Sign up</SingnupLoginButton>
      </form>
      <GreyLine />
      <Link to="/login">Already have an account? Log in</Link>
    </SignupFormContainer>
  );
};


export const LoginPageForm = ({ email, setEmail, password, setPassword, loginExistingUser }) => {
  return (
  <SignupFormContainer>
    <SignupLoginFormText>Log in to Trello-Clone</SignupLoginFormText>
    <form onSubmit={(event) => loginExistingUser(event)}>
      <SignupLoginFormInput placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value) }/>
      <SignupLoginFormInput placeholder="Create password" type="password" value={password} onChange={event => setPassword(event.target.value)}/>
      <SingnupLoginButton type="submit">Log in</SingnupLoginButton>
    </form>
    <GreyLine/>
    <Link  to="/sign-up">Can't log in? Sign up for an account</Link>
  </SignupFormContainer>
);
};
