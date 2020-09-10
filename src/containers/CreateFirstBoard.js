import React, { useState } from "react";
import styled from "styled-components";
import { firestore } from "../utils/firebase";
import { FirstColumn, SecondColumn } from "../components/FirstBoardCreation";

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

export default ({ user }) => {
  const [boardName, setBoardName] = useState("");
  const [listNames, setListNames] = useState(["Things To Do", "Doing", "Done"]);
  const [cardNames, setCardNames] = useState(["", "", ""]);
  const [widgetCurrentlyShown, setWidgetCurrentlyShown] = useState(
    "name board"
  );

  let hasBoardBeenCreated = false;

  const createLists = async (index) => {
    if (index === 0) {
      await firestore
        .collection("boards")
        .doc(boardName)
        .collection("lists")
        .doc(listNames[0])
        .set({
          name: listNames[0],
          owner: user,
          position: index,
          cards: [
            {
              name: cardNames[0],
              description: "",
            },
            {
              name: cardNames[1],
              description: "",
            },
            {
              name: cardNames[2],
              description: "",
            },
          ],
        });
    } else {
      await firestore
        .collection("boards")
        .doc(boardName)
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
    if (!hasBoardBeenCreated) {
      await firestore
        .collection("boards")
        .doc(boardName)
        .set({
          name: boardName,
          dateCreated: new Date().toISOString().slice(0, 10),
          owner: user
        });
      await firestore
        .collection("users")
        .doc(user)
        .set(
          {
            projects: {
              name: boardName,
              dateCreated: new Date().toISOString().slice(0, 10),
            },
          },
          {
            merge: true,
          }
        );
    }

    listNames.map(async (name, index) => {
      return await createLists(index);
    });
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
      />
      <SecondColumn
        boardName={boardName}
        cardNames={cardNames}
        listNames={listNames}
      />
    </CreateFirstBoardContainer>
  );
};
