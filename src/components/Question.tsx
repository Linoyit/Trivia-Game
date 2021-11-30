import React from 'react';
import Option from './Option'
import { H3, SummaryStyle } from '../utils/emotions';
import { useTriviaCollection } from './useTriviaCollection';
import { useParams } from 'react-router';

interface IProps {
    onOptionClick: Function
}

const Question: React.FC<IProps> = ({onOptionClick}) => {
    const { list } = useTriviaCollection();    
    const params = useParams();
    const numOfQuestion = params.id? parseInt(params.id) : 1;
    const currentQuestion = list.find(p => p.id === '' + (numOfQuestion - 1));
    if (!currentQuestion) {
        return <SummaryStyle>Item {params.id} not found!</SummaryStyle>;
    }
    const answers = currentQuestion.answers;

    return (
        <div >
            <H3>{currentQuestion.question}</H3>
            <ul style={{listStyle: 'none'}}>
                { answers.map((answer) =>
                    <Option
                        numOfQuestion={numOfQuestion - 1}
                        text={answer} 
                        onOptionClick={onOptionClick} />)
                }
            </ul>
        </div>
    );
}
export default Question;