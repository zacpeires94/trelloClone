import React, { useState, useRef, useEffect } from "react";
import { ColumnTitle } from '../Typography';
import { AddCardButton } from '../Button';
import { PlusSign, CloseCardEntry } from '../Icon';
import styled from "styled-components";

const DropDownContainer = styled.div`
  min-width: 272px;
  width: 272px;
  margin-top: 8px;
  margin-left: 8px;
  box-sizing: border-box;
  padding: 0 8px;
  background-color: #ebecf0;
  border-radius: 3px;
  height: max-content;
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
                padding-bottom: 8px;
                svg {
                  height: 17px;
                  width: 17px;
                  margin-top: 8px;
                  margin-left: 8px;
                  fill:  #6b778c;
                }
            `;
    }
  }}
  ${props => {
    if (props.noCardsInList) {
      return`
      padding-bottom: 12px;
      `
    }
  }}
  ${props => {
    if (props.footer) {
      return`
        min-height: 38px;
      `
    }
  }}
`;

const WhiteListContainer = styled.div`
  padding: 0;
  margin: 0;
`;

const WhiteListCard = styled.div`
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
    if (props.index === 0) {
        return`
            margin-top: 0;
        `
    }
  }}
`;

const WhiteListCardTextArea = styled.textarea`
  box-sizing: border-box;
  padding: 8px;
  background: white;
  overflow: hidden;
  resize: vertical;
  overflow-wrap: break-word;
  resize: none;
  width: 100%;
  border: none;
  font-style: unset;
  margin: 8px 0 0 0;
  border-radius: 3px;
  text-align: left;
  font-size: 14px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  cursor: pointer;
  :focus {
    outline: none;
  }
                min-height: 66px;
                color: #717382;
            
`;


export const DropDown = ({cards, listName}) => {
  const [taskList, setTaskList] = useState(cards);
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


  const closeAddCardEntry = () => {
  setTaskList(taskList.slice(0, taskList.length - 1))
  }


  const Footer = ({ taskList, createNewCard, addCard }) => {
    return (
      <>
          {taskList.length && taskList[taskList.length - 1].name.length < 1 ? (
        <DropDownHeaderAndFooter paddingBottom>
          <AddCardButton onClick={addCard}>Add Card</AddCardButton>
          <CloseCardEntry closeAddCardEntry={closeAddCardEntry} />
        </DropDownHeaderAndFooter>
      ) : (
        <DropDownHeaderAndFooter onClick={createNewCard} footer noCardsInList={taskList.length === 0 ? true : false}>
          <PlusSign />
          <ColumnTitle grey>Add a card</ColumnTitle>
        </DropDownHeaderAndFooter>
      )}
      </>
    )
  }
  

  return (
    <DropDownContainer>
      <DropDownHeaderAndFooter>
        <ColumnTitle>{listName}</ColumnTitle>
      </DropDownHeaderAndFooter>
      <WhiteListContainer>
        {taskList.map((task, index) => {
          return task.name ? (
            <WhiteListCard key={index} index={index} disabled>{task.name}</WhiteListCard>
          ) : (
            <WhiteListCardTextArea
              placeholder="Enter a title for this card..."
              ref={newTextBoxRef}
              value={newCardTitle}
              onChange={(event) => enterTitle(event)}
            >
              {newCardTitle}
            </WhiteListCardTextArea>
          );
        })}
      </WhiteListContainer>
      <Footer taskList={taskList} createNewCard={createNewCard} addCard={addCard}/>
    </DropDownContainer>
  );
};