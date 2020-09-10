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

  console.log(history.location.pathname.split("/")[2]);

  useEffect(() => {
    const getBoardData = async () => {
      const pathName = history.location.pathname.split("/")[2];
      await firestore
        .collection("boards")
        .where("owner", "==", user)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            // setState
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    };

    // stubbed data
    setUserLists([
      {
        name: "To do",
        cards: [
          { name: "Build this project" },
          { name: "Build this project" },
          { name: "Build this project" },
        ],
      },
    ]);

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
          console.log(list);
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
