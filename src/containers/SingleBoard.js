import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavbarPrimary, NavbarSecondary } from "../components/Navbar";
import { firestore } from "../utils/firebase";
import { DropDown } from "../components/DropDown";
import { AccountMenuPopUp } from '../components/Menu';
import history from "../history";
import { AddListButton, EnterListTitle } from "../components/Button";

const HomePageContainer = styled.div`
  background: #e48a9a;
  min-height: 100vh;
  overflow-y: auto;
  position: relative;
`;

const DropDownContainer = styled.div`
  display: flex;
`;

const InternalHomePageContainer = styled.div`
  margin-top: 88px;
  box-sizing: border-box;
  padding-right: 8px;
`

export default ({ user  }) => {
  const [userLists, setUserLists] = useState([]);
  const [newListName, setNewListName] = useState("");
  const [boardData, setBoardData] = useState(null);
  const [userData, setUserData] = useState(null)
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [
    showDropDownForNamingNewList,
    setShowDropDownForNamingNewList,
  ] = useState(false);

  // when user loads board, it should update the document with the name of the board
  // in the field lastUsed
  const boardId = history.location.pathname.split("/")[2];
  // })

  useEffect(() => {
    const getBoardData = async () => {
      let boardLists = []
      console.log(boardId)
      const requestedBoardInfo = await firestore.collection('boards').doc(boardId).get();
      setBoardData(requestedBoardInfo.data())

      await firestore.collection('boards/' + boardId + '/lists').get().then((subCollectionSnapshot) => {
        subCollectionSnapshot.forEach((subDoc) => {
            boardLists[subDoc.data().position] = subDoc.data()
        });
    });

      setUserLists(boardLists)
    };

    const getUserData = async () =>{
      const requestedUser = await firestore.collection('users').doc(user).get();
      setUserData(requestedUser.data());
    }

    getUserData();
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
      userInitials = `${separatedUserName[0][1].toUpperCase()} ${separatedUserName[1][0].toUpperCase()}`
    } else {
      userInitials = `${separatedUserName[0][0].toUpperCase()}`
    }
    return userInitials
  }


  if (!userLists.length) {
    return null;
  }

  return (
    <HomePageContainer>
      <AccountMenuPopUp getUserInitials={getUserInitials} userData={userData} showAccountMenu={showAccountMenu} setShowAccountMenu={setShowAccountMenu}/>
      <NavbarPrimary userData={userData} getUserInitials={getUserInitials} setShowAccountMenu={setShowAccountMenu}/>
      <NavbarSecondary boardData={boardData} userData={userData} getUserInitials={getUserInitials}/>
      <InternalHomePageContainer>
      <DropDownContainer>
        {userLists.map((list, index) => {
      
          return <DropDown cards={list.cards} listName={list.name} />;
        })}
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
