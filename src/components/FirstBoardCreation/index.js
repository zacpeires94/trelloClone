import React from "react";
import styled from "styled-components";
import { Chevron } from "../Icon";

const SecondColumnContainer = styled.div`
  height: 100%;
  background: pink;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 24px;
  @media (max-width: 768px) {
    order: 1;
    width: 100%;
    height: unset;
    box-sizing: border-box;
    padding: 20px;
  }
`;

const TrelloMockUpContainer = styled.div`
  height: 420px;
  width: 700px;
  border-radius: 7.5px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  background: #4bbf6b;
  @media (max-width: 1680px) {
    height: 336px;
    width: 560px;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 1024px) {
    height: 252.25px;
    width: 420px;
    border-radius: 4.5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    height: 330px;
    width: 560px;
    margin: 20px;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 579px) {
    height: 168.5px;
    width: 280px;
    margin: 40px 0 23.5px;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  }
`;

const TranslucentBox = styled.p`
  height: 20px;
  width: 150px;
  border-radius: 3.75px;
  margin: 25px 25px 30px 25px;
  background: hsla(0, 0%, 100%, 0.5);
  @media (max-width: 1680px) {
    height: 16px;
    width: 120px;
    margin: 24px 0 16px 24px;
    border-radius: 3px;
  }
  @media (max-width: 1024px) {
    height: 12px;
    width: 90px;
    margin: 16px 0 12px 18px;
    border-radius: 2.25px;
  }
  @media (max-width: 768px) {
    height: 16px;
    width: 120px;
    margin: 24px 0 16px 24px;
    border-radius: 3px;
  }
  @media (max-width: 579px) {
    height: 7px;
    width: 54px;
    margin: 8px 0 7px 12px;
    border-radius: 1.5px;
  }
  ${(props) => {
    if (props.boardName.length) {
      return `
            background: transparent;
            color: #fff;
            font-weight: bold;
            font-size: 24px;
            text-align: left;
            @media (max-width: 1680px) {
              font-size: 20px;
              height: unset;
            }
            @media (max-width: 1024px) {
              font-size: 16px;
              height: unset;
            }
            @media (max-width: 768px) {
              font-size: 20px;
              height: unset;
            }
            @media (max-width: 579px) {
              height: unset: 
              font-size: 10px;
              
            }
          `;
    }
  }}
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const GreyUnitOutline = styled.div`
  background-color: #ebecf0;
  border-radius: 3.75px;
  margin-left: 20px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  width: 190px;
  @media (max-width: 1680px) {
    width: 152px;
    margin-left: 16px;
    border-radius: 3px;
  }
  @media (max-width: 1024px) {
    width: 114px;
    margin-left: 12px;
    border-radius: 2.25px;
  }
  @media (max-width: 768px) {
    width: 152px;
    margin-left: 16px;
    border-radius: 3px;
  }
  @media (max-width: 579px) {
    width: 76px;
    margin-left: 8px;
    border-radius: 1.5px;
  }
  ${(props) => {
    if (props.first) {
      return `
        margin-left: 30px;
        @media (max-width: 1680px) {
            margin-left: 24px;
        }
        @media (max-width: 1024px) {
            margin-left: 18px;
        }
        @media (max-width: 768px) {
            margin-left: 24px;
        }
        @media (max-width: 579px) {
            margin-left: 12px;
        }
        `;
    }
  }}
`;

const FirstColumnTitle = styled.p`
  font-size: 24px;
  overflow: unset;
  background: unset;
  margin: 0 0 12px 0;
  width: unset;
  color: black;
  font-weight: bold;
`;

const TitleText = styled.p`
  height: 24px;
  width: 170px;
  margin: 7px 0 7px 10px;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 25px;
  color: #172b4d;
  font-weight: 700;
  background: #ebecf0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
  @media (max-width: 1680px) {
    height: 19px;
    width: 136px;
    margin: 6px 0 6px 8px;
    font-size: 16px;
    letter-spacing: -0.4px;
    line-height: 19px;
  }
  @media (max-width: 1024px) {
    height: 15px;
    width: 102px;
    margin: 4px 0 4px 6px;
    font-size: 12px;
    letter-spacing: -0.2px;
    line-height: 15px;
  }
  @media (max-width: 768px) {
    height: 19px;
    width: 136px;
    margin: 6px 0 6px 8px;
    font-size: 16px;
    letter-spacing: -0.4px;
    line-height: 19px;
  }
  @media (max-width: 579px) {
    height: 10px;
    width: 68px;
    margin: 3px 0 3px 4px;
    font-size: 8px;
    letter-spacing: -0.13px;
    line-height: 10px;
  }
`;

const WhiteSquare = styled.div`
  min-height: 40px;
  width: 170px;
  margin: 10px;
  border-radius: 3.75px;
  box-shadow: inset 0 -1px 0 0 #dfe1e6;
  background-color: #fff;
  p {
    padding: 9px 10px 11px;
    font-size: 16px;
    letter-spacing: -.2px;
    line-height: 20px;
    margin: 0;
    word-break: break-word;
}
  }
  @media (max-width: 1680px) {
    min-height: 32px;
    width: 136px;
    margin: 8px;
  }
  @media (max-width: 1024px) {
    min-height: 24px;
    width: 102px;
    margin: 6px 0 6px 6px;
    border-radius: 2.25px;
  }
  @media (max-width: 768px) {
    min-height: 32px;
    width: 136px;
    margin: 8px;
    border-radius: 3px;
    @media (max-width: 579px) {
      min-height: 16px;
      width: 68px;
      margin: 4px;
      border-radius: 1.5px;
    }
  }
  ${(props) => {
    if (props.larger) {
      return `
            height: 90px;
            @media (max-width: 1680px) {
                height: 72px;
            }
            @media (max-width: 1024px) {
                height: 54px;
            }
            @media (max-width: 768px) {
                height: 72px;
            }
            @media (max-width: 579px) {
                height: 36px;
            }
            `;
    }
  }}
`;

const FirstColumnContainer = styled.div`
  width: 60%;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    order: 2;
    height: 100%;
  }
`;

const FirstColumnTextContainer = styled.div`
  margin: 0 24px;
  max-width: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FirstColumnBodyText = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 24px;
  letter-spacing: -0.45px;
  ${(props) => {
    if (props.noMargin) {
      return `
        margin-bottom: 0;
      `;
    }
  }}}
`;

const BoardNamingInput = styled.input`
  background: #fff;
  border: none;
  border-bottom: 2px solid #7a869a;
  box-shadow: none;
  text-align: center;
  color: #172b4d;
  display: block;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 0;
  max-width: 322px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.45px;
  padding: 6px 8px;
  font-weight: 700;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #b4bac5;
  }
`;

const SubmitBoardNameButton = styled.button`
  background: rgba(9, 30, 66, 0.04);
  color: #fff;
  cursor: not-allowed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 100%;
  margin: 32px auto 16px;
  font-size: 16px;
  box-shadow: none;
  border-radius: 3px;
  padding: 6px 12px;
  text-decoration: none;
  position: relative;
  border: none;
  font-weight: 400;
  svg {
    height: 23px;
    width: 23px;
    fill: #b3bac5;
  }
  ${(props) => {
    if (props.boardName) {
      return `
          background: #0079bf;
          cursor: pointer;
          :hover {
            background: #026aa7;
          }
          svg {
             fill: white; 
          }
          `;
    }
  }}
  ${(props) => {
    if (props.getStarted) {
      return `
      font-weight: 700;
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      `;
    }
  }}
`;

const NameBoard = ({ setWidgetCurrentlyShown, boardName, setBoardName }) => {
  return (
    <FirstColumnContainer>
      <FirstColumnTextContainer>
        <FirstColumnTitle firstColumn>
          Welcome to Trello-Clone!
        </FirstColumnTitle>
        <FirstColumnBodyText>
          You can organize just about anything with a Trello board(that thing
          over there 👉).
        </FirstColumnBodyText>
        <FirstColumnBodyText noMargin>
          Start by naming your board, something related to the project you are
          working on, or what you need to get done.
        </FirstColumnBodyText>
        <BoardNamingInput
          placeholder="e.g. Vacation Planning"
          value={boardName}
          onChange={(event) => setBoardName(event.target.value)}
          maxLength="32"
        />
        <SubmitBoardNameButton
          onClick={() => setWidgetCurrentlyShown("list board")}
          boardName={boardName}
        >
          <Chevron />
        </SubmitBoardNameButton>
      </FirstColumnTextContainer>
    </FirstColumnContainer>
  );
};

const AddLists = ({ setWidgetCurrentlyShown, listNames, setListNames }) => {
  return (
    <FirstColumnContainer>
      <FirstColumnTextContainer>
        <FirstColumnTitle firstColumn>
          Create structure with lists
        </FirstColumnTitle>
        <FirstColumnBodyText>
          A list is a collection of cards. It can be a set of ideas, a group of
          tasks, or a stage in a project. You'll add cards to your list next.
        </FirstColumnBodyText>
        <FirstColumnBodyText noMargin>
          A lot of people like to start with:
        </FirstColumnBodyText>
        <BoardNamingInput
          value={listNames[0]}
          onChange={(event) =>
            setListNames([event.target.value, listNames[1], listNames[2]])
          }
          maxLength="16"
        />
        <BoardNamingInput
          value={listNames[1]}
          onChange={(event) =>
            setListNames([listNames[0], event.target.value, listNames[2]])
          }
          maxLength="16"
        />
        <BoardNamingInput
          value={listNames[2]}
          onChange={(event) =>
            setListNames([listNames[0], listNames[1], event.target.value])
          }
          maxLength="16"
        />
        <SubmitBoardNameButton
          boardName
          onClick={() => setWidgetCurrentlyShown("name cards")}
        >
          <Chevron />
        </SubmitBoardNameButton>
      </FirstColumnTextContainer>
    </FirstColumnContainer>
  );
};

const CreateCards = ({
  cardNames,
  setCardNames,
  listNames,
  setWidgetCurrentlyShown,
  firstListCards,
  setFirstListCards
}) => {

  const createCardEntryWithFullData = (event, index) => {
    if (event.target.value.length) {
      if (firstListCards.length) {
        setFirstListCards([...firstListCards, {
          name: event.target.value,
          position: index
        }])
      } else {
        setFirstListCards([{
          name: event.target.value,
          position: index
        }])
      }

    }
  }

  return (
    <FirstColumnContainer>
      <FirstColumnTextContainer>
        <FirstColumnTitle firstColumn>
          Take a load off with cards
        </FirstColumnTitle>
        <FirstColumnBodyText>
          Make cards for things you need to do, organize, or just get out of
          your head.
        </FirstColumnBodyText>
        <FirstColumnBodyText noMargin>
          Add titles for a few cards in your <b>{listNames[0]}</b> list:
        </FirstColumnBodyText>

        <BoardNamingInput
          value={cardNames[0]}
          onChange={(event) => {
            setCardNames([event.target.value, cardNames[1], cardNames[2]]);
            createCardEntryWithFullData(event, 0) 
          }}
          placeholder="e.g. Book flights"
          maxLength="32"
        />
        <BoardNamingInput
          value={cardNames[1]}
          onChange={(event) => {
            setCardNames([cardNames[0], event.target.value, cardNames[2]]);
            createCardEntryWithFullData(event, 1) 
          }}
          placeholder="e.g. Find a hotel"
          maxLength="32"
        />
        <BoardNamingInput
          value={cardNames[2]}
          onChange={(event) => {
            setCardNames([cardNames[0], cardNames[1], event.target.value]);
            createCardEntryWithFullData(event, 2) 
          }}
          placeholder="e.g. Call dogsitter"
          maxLength="32"
        />

        <SubmitBoardNameButton
          boardName
          onClick={() => setWidgetCurrentlyShown("make board")}
        >
          <Chevron />
        </SubmitBoardNameButton>
      </FirstColumnTextContainer>
    </FirstColumnContainer>
  );
};

const GetStarted = ({ addFirstBoardToUser }) => {
  return (
    <FirstColumnContainer>
      <FirstColumnTextContainer>
        <FirstColumnTitle firstColumn>
          You're ready to get started!
        </FirstColumnTitle>
        <FirstColumnBodyText>
          Now that you understand the basics of boards, lists and cards, you can
          use Trello to fit your needs, whatever they are!
        </FirstColumnBodyText>
        <SubmitBoardNameButton
          boardName
          getStarted
          onClick={addFirstBoardToUser}
        >
          Now you're a pro! Keep building your board
        </SubmitBoardNameButton>
      </FirstColumnTextContainer>
    </FirstColumnContainer>
  );
};

export const FirstColumn = ({
  widgetCurrentlyShown,
  setWidgetCurrentlyShown,
  listNames,
  setListNames,
  boardName,
  setBoardName,
  cardNames,
  setCardNames,
  addFirstBoardToUser,
  firstListCards,
  setFirstListCards
}) => {
  if (widgetCurrentlyShown === "name board") {
    return (
      <NameBoard
        setWidgetCurrentlyShown={setWidgetCurrentlyShown}
        boardName={boardName}
        setBoardName={setBoardName}
      />
    );
  } else if (widgetCurrentlyShown === "list board") {
    return (
      <AddLists
        setWidgetCurrentlyShown={setWidgetCurrentlyShown}
        listNames={listNames}
        setListNames={setListNames}
      />
    );
  } else if (widgetCurrentlyShown === "name cards") {
    return (
      <CreateCards
        setWidgetCurrentlyShown={setWidgetCurrentlyShown}
        cardNames={cardNames}
        setCardNames={setCardNames}
        listNames={listNames}
        setWidgetCurrentlyShown={setWidgetCurrentlyShown}
        firstListCards={firstListCards}
        setFirstListCards={setFirstListCards}
      />
    );
  } else if (widgetCurrentlyShown === "make board") {
    return <GetStarted addFirstBoardToUser={addFirstBoardToUser} />;
  }
};

export const SecondColumn = ({ boardName, cardNames, listNames }) => {
  return (
    <SecondColumnContainer listNames>
      <TrelloMockUpContainer>
        <TranslucentBox boardName={boardName}>{boardName}</TranslucentBox>
        <HorizontalContainer>
          <GreyUnitOutline first>
            <TitleText>{listNames[0]}</TitleText>
            <WhiteSquare>
              <p>{cardNames[0]}</p>
            </WhiteSquare>
            <WhiteSquare>
              <p>{cardNames[1]}</p>
            </WhiteSquare>
            <WhiteSquare>
              <p>{cardNames[2]}</p>
            </WhiteSquare>
          </GreyUnitOutline>
          <GreyUnitOutline>
            <TitleText>{listNames[1]}</TitleText>
            <WhiteSquare larger />
            <WhiteSquare />
            <WhiteSquare larger />
          </GreyUnitOutline>
          <GreyUnitOutline>
            <TitleText>{listNames[2]}</TitleText>
            <WhiteSquare />
            <WhiteSquare larger />
            <WhiteSquare />
          </GreyUnitOutline>
        </HorizontalContainer>
      </TrelloMockUpContainer>
    </SecondColumnContainer>
  );
};
