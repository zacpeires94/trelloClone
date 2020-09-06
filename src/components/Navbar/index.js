import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: rgba(0, 0, 0, 0.32);
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  padding: 4px;
  justify-content: space-between;
  ${(props) => {
    if (props.secondaryNav) {
      return `
            padding: 8px 4px 8px 8px;
            position: relative;
            background: rgba(0,0,0,.24);
          `;
    }
  }}
  span {
    display: flex;
    ${props => {
        if (props.secondaryNav) {
            return`
                max-height: 32px;
            `
        }
    }}
  }
`;

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
  p {
    font-size: 14px;
    margin: 0;
  }
  ${(props) => {
    if (props.showBoards) {
      return `
                width: 90px;
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
            p {
                font-size: 12px;

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

export const NavbarPrimary = () => {
  return (
    <NavbarContainer>
      <span>
        <NavbarButton />
        <NavbarButton />
        <NavbarButton showBoards />
        <NavbarButton searchBar />
      </span>
      <span>
        <NavbarButton />
        <NavbarButton />
        <NavbarButton round />
      </span>
    </NavbarContainer>
  );
};

const ProjectMemberContainers = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarSecondary = () => {
  return (
    <NavbarContainer secondaryNav>
      <span secondaryNav>
        <BoardNameTitleBox>
          <p>Board Name</p>
        </BoardNameTitleBox>
        <NavbarButton />
        <Divider />
        <NavbarButton projectName>
          <p>Project Name</p>
        </NavbarButton>
        <Divider />
        <ProjectMemberContainers>
          <NavbarButton round projectMember>
            <p>ZP</p>
          </NavbarButton>
        </ProjectMemberContainers>
        <NavbarButton invite>Invite</NavbarButton>
      </span>
    </NavbarContainer>
  );
};
