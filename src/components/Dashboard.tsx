import Question from './Question';
import Navigate from './Navigate';
import ProgressBar from './ProgressBar';

import { useAppDispatch } from '../store/hooks';
import { calculateScore, setUserAnswer, UserAnswer } from '../store/triviaSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Div, H1 } from '../utils/emotions';
import { useTriviaCollection } from './useTriviaCollection';
import { useStaticVariables } from '../utils/useStaticVariables';

const Dashboard: React.FC = () => {    
    const { list } = useTriviaCollection();
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); 
    const { BUTTON_NEXT, BUTTON_BACK, SUBMIT } = useStaticVariables();
    const DEFAULT_INDEX = '-1';
    const params = useParams();
    const numOfQuestion = params.id? parseInt(params.id) : 1;
    const questionIndex = numOfQuestion - 1;
    const onOptionClick = (text: string) => {
        const question = list[numOfQuestion - 1];
        const answers = question.answers;
        let result = DEFAULT_INDEX;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === text) {
                result = '' + i;
                break;
            }
        }
        const userAnswer: UserAnswer = {
            questionId: questionIndex,
            optionIndex: parseInt(result)
        }
        dispatch(setUserAnswer(userAnswer));
    }

  const onButtonClick = (text: string) => {
    const submitEndpoint = '../../summary'
    const size = list.length;
    let question = numOfQuestion;
    switch(text) {
        case BUTTON_BACK:
            navigate(`../${((questionIndex + size - 1) % size) + 1}`);
            break;
        case BUTTON_NEXT:
            navigate(`../${(question % size) + 1}`);
            break;
        case SUBMIT:
            dispatch(calculateScore());
            navigate(`${submitEndpoint}`);
      }
  }

  return(
    <div>
            <H1 >The Ultimate Trivia Game</H1>
            <Question 
                onOptionClick={onOptionClick} />
            <Navigate 
                onButtonClick={onButtonClick} />
            <ProgressBar />
      </div>
  );
}
export default Dashboard;

