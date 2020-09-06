import React from 'react';
import styled from 'styled-components';
import { NavbarPrimary, NavbarSecondary } from '../components/Navbar';
import { DropDown } from '../components/DropDown';

const HomePageContainer = styled.div`
    background: pink;
    min-height: 100vh;
`

export default () => {
    return (
        <HomePageContainer>
            <NavbarPrimary />
            <NavbarSecondary />
            <DropDown />
        </HomePageContainer>
    )
}