import React, { useState, useEffect } from "react";
import firebase from 'firebase'
import styled from "styled-components";
import { NavbarSecondary } from "../components/Navbar";
import { firestore } from "../utils/firebase";
import { DropDown } from "../components/DropDown";
import { AccountMenuPopUp } from '../components/Menu';
import history from "../history";
import { AddListButton, EnterListTitle } from "../components/Button";
import { HomePageContainer } from '../components/Container'

const DropDownContainer = styled.div`
  display: flex;
`;

const InternalHomePageContainer = styled.div`
  margin-top: 88px;
  box-sizing: border-box;
  padding-right: 8px;
`

export default ({ user, userData, setShowNavbar  }) => {
  const [userLists, setUserLists] = useState([]);
  const [newListName, setNewListName] = useState("");
  const [boardData, setBoardData] = useState(null);
  const [
    showDropDownForNamingNewList,
    setShowDropDownForNamingNewList,
  ] = useState(false);

  // when user loads board, it should update the document with the name of the board
  // in the field lastUsed
  const boardId = history.location.pathname.split("/")[2];
  // })

  useEffect(() => {
    setShowNavbar(true)

    const getBoardData = async () => {
      let boardLists = []
      console.log(boardId)
      const requestedBoardInfo = await firestore.collection('boards').doc(boardId).get();
      setBoardData(requestedBoardInfo.data())
      console.log(requestedBoardInfo.data())
      await firestore.collection('boards/' + boardId + '/lists').get().then((subCollectionSnapshot) => {
        subCollectionSnapshot.forEach((subDoc) => {
            boardLists[subDoc.data().position] = subDoc.data()
        });
    });

      setUserLists(boardLists)
    };

    getBoardData();
  }, []);


  const AddListToBoard = async () => {
    await firestore.collection('boards').doc(boardId).collection('lists').doc(newListName).set({
      name: newListName,
      owner: user,
      position: userLists.length,
      cards: [],
    })
    setUserLists([...userLists, {name: newListName, cards: []}])

  }


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


  if (boardData === null) {
    return null;
  }



  return (
    <HomePageContainer singlePage background={boardData.background}>
      <NavbarSecondary boardData={boardData} userData={userData} getUserInitials={getUserInitials}/>
      <InternalHomePageContainer>
      <DropDownContainer>
        {
        userLists.length ? 
        userLists.map((list, index) => {
          return <DropDown cards={list.cards} listName={list.name} />;
        })
        : null
      }
        <AddListButton
          showDropDownForNamingNewList={showDropDownForNamingNewList}
          setShowDropDownForNamingNewList={setShowDropDownForNamingNewList}
          AddListToBoard={AddListToBoard}
        >
          <EnterListTitle
            showDropDownForNamingNewList={showDropDownForNamingNewList}
            setShowDropDownForNamingNewList={setShowDropDownForNamingNewList}
            setNewListName={setNewListName}
            newListName={newListName}
            AddListToBoard={AddListToBoard}
          />
        </AddListButton>
      </DropDownContainer>
      </InternalHomePageContainer>
    </HomePageContainer>
  );
};
