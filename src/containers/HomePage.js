import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavbarPrimary, NavbarSecondary } from "../components/Navbar";
import { DropDown } from "../components/DropDown";
import { AddListButton, EnterListTitle } from "../components/Button";

const HomePageContainer = styled.div`
  background: #e48a9a;
  min-height: 100vh;
`;

const DropDownContainer = styled.div`
  display: flex;
`;

export default () => {
    const [userLists, setUserLists] = useState([]);
    const [newListName, setNewListName] = useState("")
    const [showDropDownForNamingNewList, setShowDropDownForNamingNewList] = useState(false);

    useEffect(() => {
        setUserLists(
            [{name: 'To do', cards: [{ name: "Build this project" },
            { name: "Build this project" },
            { name: "Build this project" }]}]
        )
        console.log(userLists)
    }, [setUserLists])

    if (!userLists.length) {
        return null;
    }

    console.log(showDropDownForNamingNewList, userLists)

  return (
    <HomePageContainer>
      <NavbarPrimary />
      <NavbarSecondary />
      <DropDownContainer>
          {
              userLists.map((list, index) => {
                  console.log(list)
                  return (
                      <DropDown cards={list.cards} listName={list.name}/>
                  )
              })
          }
        <AddListButton  showDropDownForNamingNewList={showDropDownForNamingNewList} setShowDropDownForNamingNewList={setShowDropDownForNamingNewList}>
            <EnterListTitle  showDropDownForNamingNewList={showDropDownForNamingNewList} setShowDropDownForNamingNewList={setShowDropDownForNamingNewList} setUserLists={setUserLists} userLists={userLists} setNewListName={setNewListName} newListName={newListName}/>
        </AddListButton>
      </DropDownContainer>
    </HomePageContainer>
  );
};

 