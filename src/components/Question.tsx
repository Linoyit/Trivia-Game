import React from 'react';
import { useAppSelector } from '../store/hooks';
import Option from './Option'
import { H3 } from '../utils/emotions';

interface IProps {
    onOptionClick: Function
}

const Question: React.FC<IProps> = ({onOptionClick}) => {
    const list = useAppSelector((state) => state.trivia.items);
    const index = useAppSelector((state) => state.trivia.index);
    const triviaQuestion = list[index];
    const answers = triviaQuestion.answers;

    return (
        <div>
            <H3>{triviaQuestion.question}</H3>
            <ul style={{listStyle: 'none'}}>
                {
                    answers.map((answer) =>
                    <Option
                        text={answer} 
                        onOptionClick={onOptionClick} />)
                }
                {/* <Option
                        text={answers[0]} 
                        onOptionClick={onOptionClick} />
                <Option 
                        text={triviaQuestion.second} 
                        onOptionClick={onOptionClick} />
                <Option 
                        text={triviaQuestion.third} 
                        onOptionClick={onOptionClick} />
                <Option 
                        text={triviaQuestion.forth} 
                        onOptionClick={onOptionClick} /> */}
            </ul>
        </div>
    );
}
export default Question;