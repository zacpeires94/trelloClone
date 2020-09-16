import React from "react";
import styled from "styled-components";
import { HouseIcon, BoardIcon } from '../Icon';
import { AccountMenuPopUp } from '../Menu';
import history from '../../history';

const NavbarContainer = styled.nav`
  background-color: rgba(0, 0, 0, 0.32);
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  padding: 4px;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  z-index: 10;
  ${props => {
    if (props.fixedColour) {
      return`
        background: #016aa7;
      `
    }
  }}
  ${(props) => {
    if (props.secondaryNav) {
      return `
            padding: 8px 4px 8px 8px;
            background: rgba(0,0,0,.24);
            top: 40px;
          `;
    }
  }}
  span {
    display: flex;
    ${(props) => {
      if (props.secondaryNav) {
        return `
                max-height: 32px;
            `;
      }
    }}
  }
`;

const SecondaryNavInnerContainer = styled.span``;

const BoardNameTitleBox = styled.div`
  padding-right: 4px;
  height: 32px;
  display: flex;
  align-items: center;
  p {
    font-size: 18px;
    font-weight: 700;
    padding: 0 12px;
    margin: 0;
    color: white;
  }
`;

const NavbarButton = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 3px;
  margin-right: 4px;
  background-color: hsla(0, 0%, 100%, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 20px;
    width: 20px;
    fill: white;
  }
  p {
    font-size: 14px;
    margin: 0;
    color: white;
  }
  ${(props) => {
    if (props.showBoards) {
      return `
                width: 90px;
                font-weight: bold;
                p {
                  margin-left: 6px;
                  line-height: 14px;
                }
            `;
    } else if (props.searchBar) {
      return `
                width: 180px;
                border-radius: 3px;
                border: none;
                box-shadow: none;
                box-sizing: border-box;
                padding-right: 30px;
            `;
    } else if (props.round) {
      return `
                border-radius: 100%;
                background: #dfe1e6;
                font-weight: 700;
                display: flex;
                justify-content: center;
                p {
                    color: black;
                    font-size: 14px;
                }
            `;
    } else if (props.projectName) {
      return `
            padding: 0 12px;
            width: unset;
        `;
    } else if (props.invite) {
      return `
            width: unset;
            padding: 0 12px;
            font-size: 14px;
            margin-left: 4px;
        `;
    }
  }}

  ${(props) => {
    if (props.projectMember) {
      return `
            height: 28px;
            width: 28px;
            :hover {
                background-color: #c1c7d0;
            }
        `;
    }
  }}
`;

const Divider = styled.span`
  dislay: block;
  float: left;
  border-left: 1px solid hsla(0, 0%, 100%, 0.24);
  height: 16px;
  margin: 8px 8px 12px 4px;
`;

export const NavbarPrimary = ({ userData, getUserInitials, setShowAccountMenu, showAccountMenu, setShowNavbar }) => {
  if (!userData) {
    return null
  }

  return (
    <NavbarContainer fixedColour={history.location.pathname === "/"}>
      <span>
        <NavbarButton>
          <HouseIcon />
        </NavbarButton>
        <NavbarButton showBoards>
          <BoardIcon />
          <p>
          Boards
          </p>
     
        </NavbarButton>
        <NavbarButton searchBar />
      </span>
      <span>
        <NavbarButton />
        <NavbarButton />
        <NavbarButton onClick={() => setShowAccountMenu(true)} round>{getUserInitials()}</NavbarButton>
      </span>
      <AccountMenuPopUp setShowNavbar={setShowNavbar} getUserInitials={getUserInitials} userData={userData} showAccountMenu={showAccountMenu} setShowAccountMenu={setShowAccountMenu}/>
    </NavbarContainer>
  );
};

const ProjectMemberContainers = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarSecondary = ({ boardData, getUserInitials }) => {
  return (
    <NavbarContainer secondaryNav>
      <SecondaryNavInnerContainer secondaryNav>
        <BoardNameTitleBox>
          <p>{boardData.name}</p>
        </BoardNameTitleBox>
        <NavbarButton />
        <Divider />
        <NavbarButton projectName>
          <p>Project Name</p>
        </NavbarButton>
        <Divider />
        <ProjectMemberContainers>
          <NavbarButton round projectMember>
            <p>{getUserInitials()}</p>
          </NavbarButton>
        </ProjectMemberContainers>
        <NavbarButton invite>
          <p>Invite</p>
        </NavbarButton>
      </SecondaryNavInnerContainer>
    </NavbarContainer>
  );
};
