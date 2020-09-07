import React from 'react'
import styled from 'styled-components';
import { ColumnTitle } from '../Typography';
import { PlusSign } from '../Icon';

export const AddCardButton = styled.button`
  background-color: #5aac44;
  box-shadow: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  line-height: 20px;
  margin: 8px 4px 0 0;
  padding: 6px 12px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 3px;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  font-size: 15px;
  :hover {
    background-color: #61bd4f;
  }
`;

const AddListButtonContainer = styled.div`
background-color: hsla(0,0%,100%,.24);
cursor: pointer;
border-radius: 3px;
width: 272px;
display: flex;
align-items: center;
box-sizing: border-box;
padding-left: 12px;
height: 40px;
margin: 8px;
`

export const AddListButton = () => {
    return (
        <AddListButtonContainer>
            <PlusSign white/>
            <ColumnTitle white>
            Add another list</ColumnTitle>
        </AddListButtonContainer>
    )
}