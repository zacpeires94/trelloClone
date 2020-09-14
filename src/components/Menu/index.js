import React from 'react';
import styled from 'styled-components';
import { CrossSign } from '../Icon';
import { MidSizeText, SmallGreyText } from '../Typography';


const AccountMenuPopUpContainer = styled.div`
width: 304px;
top: 44px;
right: 4px;
background: white;
z-index: 5;
    position: fixed;
    border-radius: 3px;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    box-sizing: border-box;
    ${props => {
        if (!props.showAccountMenu) {
            return`
                display: none;
            `
        }
    }}
`

const Header = styled.header`
border-bottom: 1px solid rgba(9,30,66,.13);
box-sizing: border-box;
text-align: center;
display: flex;
align-items: center;
height: 40px;
position: relative;
padding: 0 12px;
p {
    color: #5e6c84;
    font-size: 14px;
    margin: 0;
    width: 100%;
}
svg {
    fill: rgb(107, 119, 140);
    height: 10px;
    width: 10px;
    position: absolute;
    right: 10px;
    cursor: pointer;
    :hover {
        fill: black;
    }
}
`

    const InitialIcon = styled.div`
font-size: 18px;
min-height: 40px;
min-width: 40px;
line-height: 40px;
background-color: #dfe1e6;
align-items: center;
color: #172b4d;
border-radius: 100%;
font-weight: bold;
`

const GreyContainer = styled.div`
    box-sizing: border-box;
    padding: 12px 12px;
    display: flex;
    border-bottom: 1px solid rgba(9,30,66,.13);
    ${props => {
        if (props.pointer) {
          return`
            cursor: pointer;
          `
        }
      }}
      ${props => {
          if (props.hover) {
              return`
                :hover {
                    background: rgba(9,30,66,.04);
                }  
            `
          }
      }}
`

const VerticalTextContainer = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 8px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
 
`

export const AccountMenuPopUp = ({ getUserInitials, userData, setShowAccountMenu, showAccountMenu }) => {
    return (
        <AccountMenuPopUpContainer showAccountMenu={showAccountMenu}>
            <Header>
                <p>
                    Account
                </p>
                <CrossSign setShowAccountMenu={setShowAccountMenu}/>
            </Header>
            <GreyContainer>
                <InitialIcon>
                    {getUserInitials()}
                </InitialIcon>
                <VerticalTextContainer>
                    <MidSizeText>
                        { userData.fullName}
                    </MidSizeText>
                    <SmallGreyText>
                        {userData.email}
                    </SmallGreyText>
                </VerticalTextContainer>
            </GreyContainer>
            <GreyContainer pointer hover>
                <MidSizeText >
                    Log Out
                </MidSizeText>
            </GreyContainer>
        </AccountMenuPopUpContainer>
    )
}