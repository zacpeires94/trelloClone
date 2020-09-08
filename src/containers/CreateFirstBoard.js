import React from "react";
import styled from "styled-components";

const CreateFirstBoardContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const SecondColumn = styled.div`
  height: 100%;
  background: pink;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 24px;
`;

const TrelloMockUpContainer = styled.div`
  height: 420px;
  width: 700px;
  border-radius: 7.5px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  background: #4bbf6b;
`;

const TranslucentBox = styled.div`
  height: 20px;
  width: 150px;
  border-radius: 3.75px;
  margin: 25px 25px 30px 25px;
  background: hsla(0, 0%, 100%, 0.5);
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
  ${(props) => {
    if (props.first) {
      return `
        margin-left: 30px;
        `;
    }
  }}
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
`;

const WhiteSquare = styled.div`
    min-height: 40px;
    width: 170px;
    margin: 10px;
    border-radius: 3.75px;
    box-shadow: inset 0 -1px 0 0 #dfe1e6;
    background-color: #fff;
    ${props => {
        if (props.larger) {
            return`
            height: 90px;
            `
        }
    }}
`;

export default () => {
  return (
    <CreateFirstBoardContainer>
      <SecondColumn>
        <TrelloMockUpContainer>
          <TranslucentBox />
          <HorizontalContainer>
            <GreyUnitOutline first>
                <TitleText>
                Things To Do
                </TitleText>
                <WhiteSquare />
                <WhiteSquare />
                <WhiteSquare />
            </GreyUnitOutline>
            <GreyUnitOutline>
            <TitleText>
                Doing
                </TitleText>
                <WhiteSquare larger/>
                <WhiteSquare />
                <WhiteSquare larger/>
            </GreyUnitOutline>
            <GreyUnitOutline>
            <TitleText>
                Done
                </TitleText>
                <WhiteSquare />
                <WhiteSquare larger/>
                <WhiteSquare />
            </GreyUnitOutline>
          </HorizontalContainer>
        </TrelloMockUpContainer>
      </SecondColumn>
    </CreateFirstBoardContainer>
  );
};
