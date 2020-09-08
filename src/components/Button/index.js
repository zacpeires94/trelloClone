import React, { useEffect, useState } from 'react'
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
  ${props => {
      if (props.newList) {
          return`
            margin: 4px 0 0;
          `
      }
  }}
`;

const FullWidthContainer = styled.div`
  width: 272px;
  margin: 8px;
`

const AddListButtonContainer = styled.div`
background-color: hsla(0,0%,100%,.24);
cursor: pointer;
border-radius: 3px;
width: 272px;
align-items: center;
display: flex;
box-sizing: border-box;
padding-left: 12px;
height: 40px;

:hover {
    background-color: hsla(0,0%,100%,.32);
}
${props => {
    if (props.showDropDownForNamingNewList) {
        return`
            display: none;
        `
    }
}}
`

const EnterListTitleContainer = styled.div`
background-color: #ebecf0;
border-radius: 3px;
width: 100%;
height: 0;
overflow: hidden;
transition: height 85ms;
${props => {
    if (props.showDropDownForNamingNewList) {
        return`
        box-sizing: border-box;
        padding: 4px;
        height: 77px;
        `
    }
}}
`

const EnterListTitleInput = styled.input`
background: #fff;
border: none;
box-shadow: inset 0 0 0 2px #0079bf;
display: block;
margin: 0;
width: 100%;
box-sizing: border-box;
border-radius: 3px;
padding: 8px 12px;
font-size: 14px;
:focus {
    outline: none;
  }
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
`

export const EnterListTitle = ({showDropDownForNamingNewList, setShowDropDownForNamingNewList, userLists, setUserLists, setNewListName, newListName}) => {
    // console.log(props)ds
    console.log(showDropDownForNamingNewList, newListName)
    // can't pass props two levels down. Use React.children in AddListButton, and import EnterListTile into HomePage
    return (
        <EnterListTitleContainer showDropDownForNamingNewList={showDropDownForNamingNewList}>
            <EnterListTitleInput placeholder="Enter list title..." autoComplete="off" value={newListName} onChange={(event) => setNewListName(event.target.value)}/>
             <ButtonContainer onClick={() => {setUserLists([...userLists, {name: newListName, cards: []}]);
            setShowDropDownForNamingNewList(false) }} >
            <AddCardButton newList>
                Add List
            </AddCardButton>
            </ButtonContainer>
        </EnterListTitleContainer>
    )
}

export const AddListButton = ({children, showDropDownForNamingNewList, setShowDropDownForNamingNewList}) => {

    return (
        <FullWidthContainer>
        <AddListButtonContainer onClick={() => setShowDropDownForNamingNewList(true)} showDropDownForNamingNewList={showDropDownForNamingNewList}>
            <PlusSign white/>
            <ColumnTitle white>
            Add another list</ColumnTitle>
        </AddListButtonContainer>
        {
            children
        }
        </ FullWidthContainer>
    )
}

