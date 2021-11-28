import React from "react";
import styled from '@emotion/styled'
import { useAppSelector } from "../store/hooks";

interface IProps {
    text: string
    onOptionClick: Function
}

const Option: React.FC<IProps> = ({text, onOptionClick}) => {
    const index = useAppSelector((state) => state.trivia.index);
    const question = useAppSelector((state) => state.trivia.items[index]);
    const userSelections = useAppSelector((state) => state.trivia.userSelections);
    const userSelection = userSelections[index];

    const DEFAULT_BTN_COLOR = 'rgb(101, 101, 185)';
    const CLICKED_BTN_COLOR = 'rgb(96, 188, 216)';
    const HOVERED_BTN_COLOR = 'rgb(69, 79, 82)';

    const getClickedOption = () => {
        return question.answers[userSelection];
    }

    let color = getClickedOption() === text? CLICKED_BTN_COLOR : DEFAULT_BTN_COLOR;
    
    const ButtonStyle = styled.button`
    padding: 10px;
    background-color: ${color};
    border-radius: 10px;
    color: black;
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
    margin-bottom: 5px;
    width:150px;
    &:hover {
        color: white;
        background-color: ${HOVERED_BTN_COLOR};
    }
    `
    function handleClick() {
        onOptionClick(text);
    }
    
    return (
        <li onClick={handleClick} >
            <ButtonStyle>{text}</ButtonStyle>
        </li>
    );
}

export default Option

