import React from "react";
import styled from "styled-components";

const CreateFirstBoardContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.3);
  }
  @media (max-width: 1024px) {
    height: 252.25px;
    width: 420px;
    border-radius: 4.5px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.3);
  }
  @media (max-width: 768px) {
    height: 330px;
    width: 560px;
    margin: 20px;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.3);
  }
  @media (max-width: 579px) {
    height: 168.5px;
    width: 280px;
    margin: 40px 0 23.5px;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);
  }
`;

const TranslucentBox = styled.div`
  height: 20px;
  width: 150px;
  border-radius: 3.75px;
  margin: 25px 25px 30px 25px;
  background: hsla(0, 0%, 100%, 0.5);
  @media (max-width: 1680px)
    {
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
    letter-spacing: -.4px;
    line-height: 19px;
  }
  @media (max-width: 1024px) {
    height: 15px;
    width: 102px;
    margin: 4px 0 4px 6px;
    font-size: 12px;
    letter-spacing: -.2px;
    line-height: 15px;
}
@media (max-width: 768px) {
    height: 19px;
    width: 136px;
    margin: 6px 0 6px 8px;
    font-size: 16px;
    letter-spacing: -.4px;
    line-height: 19px;
}
@media (max-width: 579px) {
    height: 10px;
    width: 68px;
    margin: 3px 0 3px 4px;
    font-size: 8px;
    letter-spacing: -.13px;
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
    ${props => {
        if (props.larger) {
            return`
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
            `
        }
    }}
`;

const FirstColumn = styled.div`
    width: 60%;
    height: 100vh
    @media (max-width: 768px) {
        order: 2;
      }
`

export default () => {
  return (
    <CreateFirstBoardContainer>
        <FirstColumn>

        </FirstColumn>
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
