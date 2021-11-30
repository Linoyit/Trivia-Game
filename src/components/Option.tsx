import React from "react";
import styled from '@emotion/styled'
import { useAppSelector } from "../store/hooks";
import { useTriviaCollection } from "./useTriviaCollection";
import { useStaticVariables } from "../utils/useStaticVariables";

interface IProps {
    numOfQuestion: number;
    text: string
    onOptionClick: Function
}

const Option: React.FC<IProps> = ({numOfQuestion, text, onOptionClick}) => {
    const { list, userSelections } = useTriviaCollection();
    const question = list[numOfQuestion];
    const userSelection = userSelections[numOfQuestion];
    const { DEFAULT_BTN_COLOR, CLICKED_BTN_COLOR, HOVERED_BTN_COLOR } = useStaticVariables();

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
        <li style={{textAlign: 'center'}} onClick={handleClick} >
            <ButtonStyle>{text}</ButtonStyle>
        </li>
    );
}

export default Option

