import React from 'react';
import Option from './Option'
import { H3, SummaryStyle, Ul } from '../utils/emotions';
import { useTriviaCollection } from './useTriviaCollection';
import { useParams } from 'react-router';
import { question } from '../store/triviaSlice';

interface IProps {
    onOptionClick: Function
}

// const getParams = (list: question[], params) => {
    
//     // const params = useParams();
//     const numOfQuestion = params.id? parseInt(params.id) : 1;
//     const currentQuestion = list.find(p => p.id === '' + (numOfQuestion - 1));
//     return {numOfQuestion, currentQuestion};
// }

const Question: React.FC<IProps> = ({onOptionClick}) => {
    const { list } = useTriviaCollection();
    // const params = useParams();    
    const params = useParams();
    const numOfQuestion = params.id? parseInt(params.id) : 1;
    const currentQuestion = list.find(p => p.id === '' + (numOfQuestion - 1));
    // const {numOfQuestion, currentQuestion} = getParams(list, params);
    if (!currentQuestion) {
        return <SummaryStyle>Item {numOfQuestion} not found!</SummaryStyle>;
    }
    const answers = currentQuestion.answers;

    return (
        <div >
            <H3>{currentQuestion.question}</H3>
            <Ul>
                { answers.map((answer) =>
                    <Option
                        numOfQuestion={numOfQuestion - 1}
                        text={answer} 
                        onOptionClick={onOptionClick} 
                    />)
                }
            </Ul>
        </div>
    );
}
export default Question;