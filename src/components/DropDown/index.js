import React, { useState, useRef, useEffect } from 'react';
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
    min-height: 40px;
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
        } else if (props.paddingBottom) {
            return`
                padding-bottom: 8px
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
    ${props => {
        if (props.grey) {
            return`
                color:#6b778c;
                font-weight: normal;
            `
        }
    }}
`
const WhiteListContainer = styled.div`
    padding: 0;
    margin: 0;
`


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
    cursor: pointer;
    
    ${ props => {
        if (props.newCard) {
            return`
                height: 54px;
                color: #717382;
            `
        }
    }}
`

const PlusSignContainer = styled.div`
    height: 12px;
    width: 12px;
    display: flex;

    svg {
        height: 12px;
        width: 12px;
        fill: #6b778c;
    }
    margin-right: 6px;

`

const PlusSign = ({createNewCard}) => {
    return (
        <PlusSignContainer onClick={createNewCard}>
        <svg height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt" xmlns="http://www.w3.org/2000/svg"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></svg>
          </PlusSignContainer>
    )
 
}

const AddCardButton = styled.button`
background-color: #5aac44;
    box-shadow: none;
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    line-height: 20px;
    margin: 8px 4px 0 0;
    padding: 6px 12px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 3px;
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    :hover {
        background-color: #61bd4f;
    }
`

export const DropDown = () => {
    const taskListArray = [{name: 'Build this project'}, {name: 'Build this project'}, {name: 'Build this project'}]
    const [taskList, setTaskList] = useState(taskListArray)
    const newTextBoxRef = useRef(null)

    const createNewCard = () => {
        console.log(newTextBoxRef.current)
        setTaskList([...taskList, {name: ""}])
        console.log(taskList)
    }

    useEffect(() => {
        if (newTextBoxRef.current) {
            newTextBoxRef.current.focus();
        }
    },[createNewCard])

    return (
        <DropDownContainer>
            <DropDownHeaderAndFooter header>
                <ColumnTitle>
                To do
                </ColumnTitle>
            </DropDownHeaderAndFooter>
            <WhiteListContainer>
                {
                    taskList.map(task => {
                        return (
                            task.name ? (
                                <WhiteListCard>
                                {task.name}
                            </WhiteListCard>
                            ) :
                            (
                                <WhiteListCard newCard ref={newTextBoxRef}>
                                    Enter a title for this card...
                                </WhiteListCard>
                            )
                         
                        )
                    })
              
                }
            </WhiteListContainer>
            {
                taskList[taskList.length - 1].name.length < 1 ? (
                    <DropDownHeaderAndFooter paddingBottom>
                        <AddCardButton>
                            Add Card
                        </AddCardButton>
                    </DropDownHeaderAndFooter>
                ) : (
                    <DropDownHeaderAndFooter onClick={createNewCard} >
                          <PlusSign/>
                    <ColumnTitle grey>
                    Add another card
                    </ColumnTitle>
                </DropDownHeaderAndFooter>
                )
            }
    
        </DropDownContainer>
    )
}
