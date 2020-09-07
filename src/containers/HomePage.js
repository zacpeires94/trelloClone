import React from "react";
import styled from "styled-components";
import { NavbarPrimary, NavbarSecondary } from "../components/Navbar";
import { DropDown } from "../components/DropDown";
import { AddListButton } from "../components/Button";

const HomePageContainer = styled.div`
  background: #e48a9a;
  min-height: 100vh;
`;

const DropDownContainer = styled.div`
  display: flex;
`;

export default () => {
  return (
    <HomePageContainer>
      <NavbarPrimary />
      <NavbarSecondary />
      <DropDownContainer>
        <DropDown />
        <AddListButton />
      </DropDownContainer>
    </HomePageContainer>
  );
};
