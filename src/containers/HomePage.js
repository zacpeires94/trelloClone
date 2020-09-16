import React, { useState } from 'react';
import styled from 'styled-components';
import { NavbarPrimary } from "../components/Navbar";
import { HomePageContainer } from '../components/Container'

export default ({ userData }) => {
    const [showAccountMenu, setShowAccountMenu] = useState(false);

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
        <HomePageContainer>
            <NavbarPrimary  userData={userData} showAccountMenu={showAccountMenu} getUserInitials={getUserInitials}/>
        </HomePageContainer>
    )
}