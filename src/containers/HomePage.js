import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavbarPrimary } from "../components/Navbar";
import { HomePageContainer } from '../components/Container';

const HorizontallyCentredContainer = styled.div`
    display: flex;
    justify-content: center;
`

export default ({ userData, setShowNavbar }) => {
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    useEffect(() => {
        setShowNavbar(true);
    })

    const getUserInitials = () => {
        let userInitials;
        let separatedUserName = userData.fullName.split(" ")
        if (separatedUserName.length === 2) {
          userInitials = `${separatedUserName[0][0].toUpperCase()}${separatedUserName[1][0].toUpperCase()}`
        } else {
          userInitials = `${separatedUserName[0][0].toUpperCase()}`
        }
        return userInitials
      }
    

    return (
        <HomePageContainer homePage>
            <HorizontallyCentredContainer>

            </HorizontallyCentredContainer>
        </HomePageContainer>
    )
}