  
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createUser } from '../api/user'

export default ({setShowSignupWidget, showSignupWidget}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const createNewUser = (event) => {
    event.preventDefault();

    createUser(email, password, firstName, lastName)
    setShowSignupWidget(false)
  }

  return (
    <></>
  )
};