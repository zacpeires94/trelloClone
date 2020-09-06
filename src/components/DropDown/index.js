import React from 'react';
import styled from 'styled-components';

const DropDownContainer = styled.div`
width: 272px;
margin-top: 8px;
margin-left: 8px;
box-sizing: border-box;
padding: 0 8px;
background-color: #ebecf0;
border-radius: 3px;
`

const DropDownHeaderAndFooter = styled.div`
    box-sizing: border-box;
    padding: 0 4px;
    height: 40px;
    background-color: #ebecf0;
    align-items: center;
    display: flex;
    cursor: pointer;
    ${props => {
        if (props.header) {
            return`
                height: 32px;
                padding-top: 8px;
            `
        }
    }}

`
const ColumnTitle = styled.p`
    margin: 0;
    width: max-content;
    color: #172b4d;
    font-size: 14px;
    font-weight: bold;
`
const WhiteListContainer = styled.ul`
    padding: 0;
    margin: 0;
`


const WhiteListCard = styled.li`
    box-sizing: border-box;
    padding: 8px;
    background: white;
    list-style-type: none;
    margin: 8px 0 0 0;
    border-radius: 3px;
    min-height: 20px;
    text-align: left;
    font-size: 14px;
    cursor: pointer;
`


export const DropDown = () => {
    return (
        <DropDownContainer>
            <DropDownHeaderAndFooter header>
                <ColumnTitle>
                To do
                </ColumnTitle>
            </DropDownHeaderAndFooter>
            <WhiteListContainer>
                <WhiteListCard>
                    Build this project
                </WhiteListCard>
                <WhiteListCard>
                    Build this project
                </WhiteListCard>
                <WhiteListCard>
                    Build this project
                </WhiteListCard>
            </WhiteListContainer>
            <DropDownHeaderAndFooter>
                <ColumnTitle>
                Add another card
                </ColumnTitle>
            </DropDownHeaderAndFooter>
        </DropDownContainer>
    )
}