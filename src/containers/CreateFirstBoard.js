import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { firestore } from "../utils/firebase";
import { FirstColumn, SecondColumn } from "../components/FirstBoardCreation";
import history from "../history";

const CreateFirstBoardContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default ({ user, setShowNavbar }) => {
  const [boardName, setBoardName] = useState("");
  const [listNames, setListNames] = useState(["Things To Do", "Doing", "Done"]);
  const [cardNames, setCardNames] = useState(["", "", ""]);
  const [firstListCards, setFirstListCards] = useState([])
  const [widgetCurrentlyShown, setWidgetCurrentlyShown] = useState(
    "name board"
  );

  let hasBoardBeenCreated = false;

  const createLists = async (index, boardId) => {
    // dynamically check card names and render appropriately - "" is not a name and shouldn't be treated as such
    if (index === 0 && cardNames.length) {
      await firestore
      .collection("boards")
      .doc(boardId)
      .collection("lists")
      .doc(listNames[0])
      .set({
        name: listNames[0],
        owner: user,
        position: index,
        cards: firstListCards
      });
      
    } else {
      await firestore
        .collection("boards")
        .doc(boardId)
        .collection("lists")
        .doc(listNames[index])
        .set({
          name: listNames[index],
          owner: user,
          position: index,
          cards: [],
        });
    }
  };

  const addFirstBoardToUser = async () => {
    let boardId;

    if (!hasBoardBeenCreated) {
    const newlyCreatedBoard = await firestore
        .collection("boards")
        // .doc(boardName)
        .add({
          name: boardName,
          dateCreated: new Date().toISOString().slice(0, 10),
          owner: user
        });
      boardId = newlyCreatedBoard.id;
      await firestore
        .collection("users")
        .doc(user)
        .set(
          {
            projects: {
              name: boardName,
              dateCreated: new Date().toISOString().slice(0, 10),
              uid: boardId
            },
          },
          {
            merge: true,
          }
        );
    }

    setShowNavbar(true)

    listNames.map(async (name, index) => {
      await createLists(index, boardId);
    });

    history.push(`boards/${boardId}`)
  };

  return (
    <CreateFirstBoardContainer>
      <FirstColumn
        widgetCurrentlyShown={widgetCurrentlyShown}
        setWidgetCurrentlyShown={setWidgetCurrentlyShown}
        boardName={boardName}
        setBoardName={setBoardName}
        listNames={listNames}
        setListNames={setListNames}
        cardNames={cardNames}
        setCardNames={setCardNames}
        addFirstBoardToUser={addFirstBoardToUser}
        firstListCards={firstListCards}
        setFirstListCards={setFirstListCards}
      />
      <SecondColumn
        boardName={boardName}
        cardNames={cardNames}
        listNames={listNames}
      />
    </CreateFirstBoardContainer>
  );
};
