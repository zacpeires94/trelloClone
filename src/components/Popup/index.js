import React from "react";
import styled from "styled-components";
import { BlackOverlay } from "../Background";

const AddBoardContainer = styled.div`
  margin-top: 48px;
`;
const AddBoardHorizontalContainer = styled.div`
  display: flex;
`;

const BoardNameForm = styled.form`
  background-color: ${(props) => props.backgroundColour};
  box-sizing: border-box;
  height: 96px;
  margin: 0;
  padding: 10px 10px 10px 16px;
  position: relative;
  width: 296px;
  border-radius: 3px;
  display: flex;
  align-items: flex-start;
`;

const BoardNameInput = styled.input`
  width: calc(100% - 18px - 16px);
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  min-height: 0;
  outline: 0;
  position: relative;
  padding: 2px 8px;
  ::placeholder {
    color: white;
  }
  border-radius: 3px;
  box-shadow: none;
  :hover,
  :focus {
    background: hsla(0, 0%, 100%, 0.15);
  }
`;

const ColourSquareContainer = styled.ul`
  height: 96px;
  padding-left: 8px;
  width: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
`;
const ColouredSquare = styled.li`
  height: 28px;
  width: 28px;
  margin-bottom: 6px;
  background: ${(props) => props.background};
  border-radius: 3px;
  cursor: pointer;
`;

const CreateBoardButton = styled.button`
  background-color: #5aac44;
  box-shadow: none;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  line-height: 20px;
  margin-bottom: 8px;
  padding: 6px 12px;
  margin: 8px 4px 8px 0;
  :hover {
    background-color: #61bd4f;
  }

  ${(props) => {
    if (props.disabled) {
      return `
            box-shadow: none;
            border: none;
            color: #a5adba;
            cursor: not-allowed;
            background-color: #f4f5f7;
            `;
    }
  }}
`;

export const NewBoardInput = ({
  boardBackground,
  setBoardBackground,
  boardTitle,
  setBoardTitle,
}) => {
  console.log(boardBackground);
  return (
    <BlackOverlay>
      <AddBoardContainer>
        <AddBoardHorizontalContainer>
          <BoardNameForm backgroundColour={boardBackground}>
            <BoardNameInput
              placeholder="Add board title"
              value={boardTitle}
              onChange={(event) => setBoardTitle(event.target.value)}
            />
          </BoardNameForm>
          <ColourSquareContainer>
            <ColouredSquare
              background={"rgb(0, 121, 191)"}
              onClick={() => setBoardBackground("rgb(0, 121, 191)")}
            />
            <ColouredSquare
              background={"#D2691E"}
              onClick={() => setBoardBackground("#D2691E")}
            />
            <ColouredSquare
              background={"#2E8B57"}
              onClick={() => setBoardBackground("#2E8B57")}
            />
            <ColouredSquare
              background={"#696969"}
              onClick={() => setBoardBackground("#696969")}
            />
            <ColouredSquare
              background={"#e48a9a"}
              onClick={() => setBoardBackground("#e48a9a")}
            />
            <ColouredSquare
              background={"#800080"}
              onClick={() => setBoardBackground("#800080")}
            />
            <ColouredSquare
              background={"#008080"}
              onClick={() => setBoardBackground("#008080")}
            />
            <ColouredSquare
              background={"#FA8072"}
              onClick={() => setBoardBackground("#FA8072")}
            />
            <ColouredSquare
              background={"#6495ED"}
              onClick={() => setBoardBackground("#6495ED")}
            />
          </ColourSquareContainer>
        </AddBoardHorizontalContainer>
        <AddBoardHorizontalContainer>
          <CreateBoardButton disabled={!boardTitle.length}>
            Create Board
          </CreateBoardButton>
        </AddBoardHorizontalContainer>
      </AddBoardContainer>
    </BlackOverlay>
  );
};
