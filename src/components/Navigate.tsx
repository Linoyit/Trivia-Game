import React from "react";
import { Button, Div, Submit } from '../utils/emotions';

interface IProps {
    onButtonClick: Function
}

const Navigate: React.FC<IProps> = ({onButtonClick}) => {
    
    function handleClick(text: string) {
        onButtonClick(text);
    }
 
    return (
        <>
        <Div>
            <Button onClick={() => handleClick('back')}>Back</Button>
            <Button onClick={() => handleClick('next')}>Next</Button>
        </Div>
        <Submit onClick={() => handleClick('submit')}>Submit</Submit>
        </>
    );
}

export default Navigate

