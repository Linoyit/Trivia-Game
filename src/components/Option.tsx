import React from "react";
import { useTriviaCollection } from "./useTriviaCollection";
import { colors } from "../utils/useStaticVariables";
import { getButtonStyle } from "../utils/emotions";

interface IProps {
    numOfQuestion: number;
    text: string
    onOptionClick: Function
}

const Option: React.FC<IProps> = ({numOfQuestion, text, onOptionClick}) => {
    const { list, userSelections } = useTriviaCollection();
    const question = list[numOfQuestion];
    const userSelection = userSelections[numOfQuestion];

    const getClickedOption = () => {
        return question.answers[userSelection];
    }

    let color = getClickedOption() === text? colors.clicked : colors.default;
    const ButtonStyle = getButtonStyle(color, colors.hover);

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

