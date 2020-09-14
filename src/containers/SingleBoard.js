import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavbarPrimary, NavbarSecondary } from "../components/Navbar";
import { firestore } from "../utils/firebase";
import { DropDown } from "../components/DropDown";
import history from "../history";
import { AddListButton, EnterListTitle } from "../components/Button";

const HomePageContainer = styled.div`
  background: #e48a9a;
  min-height: 100vh;
`;

const DropDownContainer = styled.div`
  display: flex;
`;

export default ({ user }) => {
  const [userLists, setUserLists] = useState([]);
  const [newListName, setNewListName] = useState("");
  const [
    showDropDownForNamingNewList,
    setShowDropDownForNamingNewList,
  ] = useState(false);

  // when user loads board, it should update the document with the name of the board
  // in the field lastUsed

  useEffect(() => {
    const getBoardData = async () => {
      let boardLists = []

      const boardId = history.location.pathname.split("/")[2];
      console.log(boardId)

      await firestore.collection('boards/' + boardId + '/lists').get().then((subCollectionSnapshot) => {
        subCollectionSnapshot.forEach((subDoc) => {
            console.log(subDoc.data());
            boardLists[subDoc.data().position] = subDoc.data()
        });
    });

    console.log(boardLists)
      setUserLists(boardLists)
    };

    getBoardData();
  }, []);

  if (!userLists.length) {
    return null;
  }

  return (
    <HomePageContainer>
      <NavbarPrimary />
      <NavbarSecondary />
      <DropDownContainer>
        {userLists.map((list, index) => {
      
          return <DropDown cards={list.cards} listName={list.name} />;
        })}
        <AddListButton
          showDropDownForNamingNewList={showDropDownForNamingNewList}
          setShowDropDownForNamingNewList={setShowDropDownForNamingNewList}
        >
          <EnterListTitle
            showDropDownForNamingNewList={showDropDownForNamingNewList}
            setShowDropDownForNamingNewList={setShowDropDownForNamingNewList}
            setUserLists={setUserLists}
            userLists={userLists}
            setNewListName={setNewListName}
            newListName={newListName}
          />
        </AddListButton>
      </DropDownContainer>
    </HomePageContainer>
  );
};
