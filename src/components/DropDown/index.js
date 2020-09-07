import React, { useState, useRef, useEffect } from "react";
import { ColumnTitle } from '../Typography';
import { AddCardButton } from '../Button';
import { PlusSign } from '../Icon';
import styled from "styled-components";

const DropDownContainer = styled.div`
  width: 272px;
  margin-top: 8px;
  margin-left: 8px;
  box-sizing: border-box;
  padding: 0 8px;
  background-color: #ebecf0;
  border-radius: 3px;
`;

const DropDownHeaderAndFooter = styled.div`
  box-sizing: border-box;
  padding: 0 4px;
  min-height: 40px;
  background-color: #ebecf0;
  align-items: center;
  display: flex;
  cursor: pointer;
  ${(props) => {
     if (props.paddingBottom) {
      return `
                padding-bottom: 8px
            `;
    }
  }}
`;

const WhiteListContainer = styled.div`
  padding: 0;
  margin: 0;
`;

const WhiteListCard = styled.textarea`
  box-sizing: border-box;
  padding: 8px;
  background: white;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  width: 100%;
  border: none;
  font-style: unset;
  margin: 8px 0 0 0;
  border-radius: 3px;
  min-height: 20px;
  text-align: left;
  font-size: 14px;

  box-shadow: 0 1px 0 rgba(9,30,66,.25);

  cursor: pointer;
  :focus {
    outline: none;
  }
  ${(props) => {
    if (props.newCard) {
      return `
                height: 54px;
                color: #717382;
            `;
    } else if (props.index === 0) {
        return`
            margin-top: 0;
        `
    }
  }}
`;


export const DropDown = () => {
  const taskListArray = [
    { name: "Build this project" },
    { name: "Build this project" },
    { name: "Build this project" },
  ];
  const [taskList, setTaskList] = useState(taskListArray);
  const [newCardTitle, setNewCardTitle] = useState("");
  const newTextBoxRef = useRef(null);

  const createNewCard = () => {
    console.log(newTextBoxRef.current);
    setTaskList([...taskList, { name: "" }]);
  };

  useEffect(() => {
    if (newTextBoxRef.current) {
      newTextBoxRef.current.focus();
    }
  }, [createNewCard]);

  const enterTitle = (event) => {
    setNewCardTitle(event.target.value);
  };

  const addCard = () => {
    const newTaskList = taskList.slice(0, taskList.length - 1);
    setTaskList([...newTaskList, { name: newCardTitle }]);
    setNewCardTitle("");
  };

  return (
    <DropDownContainer>
      <DropDownHeaderAndFooter>
        <ColumnTitle>To do</ColumnTitle>
      </DropDownHeaderAndFooter>
      <WhiteListContainer>
        {taskList.map((task, index) => {
          return task.name ? (
            <WhiteListCard index={index}>{task.name}</WhiteListCard>
          ) : (
            <WhiteListCard
              newCard
              placeholder="Enter a title for this card..."
              ref={newTextBoxRef}
              value={newCardTitle}
              onChange={(event) => enterTitle(event)}
            >
              {newCardTitle}
            </WhiteListCard>
          );
        })}
      </WhiteListContainer>
      {taskList[taskList.length - 1].name.length < 1 ? (
        <DropDownHeaderAndFooter paddingBottom>
          <AddCardButton onClick={addCard}>Add Card</AddCardButton>
        </DropDownHeaderAndFooter>
      ) : (
        <DropDownHeaderAndFooter onClick={createNewCard}>
          <PlusSign />
          <ColumnTitle grey>Add another card</ColumnTitle>
        </DropDownHeaderAndFooter>
      )}
    </DropDownContainer>
  );
};