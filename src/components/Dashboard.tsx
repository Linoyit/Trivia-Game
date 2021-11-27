import Question from './Question';
import Navigate from './Navigate';
import ProgressBar from './ProgressBar';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { calculateScore, setIndex, setUserAnswer } from '../store/triviaSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { H1 } from '../utils/emotions';

const Dashboard: React.FC = () => {    
    
    const list = useAppSelector((state) => state.trivia.items);
    const index = useAppSelector((state) => state.trivia.index);
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); 
    const params = useParams();
    const BUTTON_NEXT = 'next';
    const BUTTON_BACK = 'back';
    const SUBMIT = 'submit';
    const DEFAULT_INDEX = '-1';
    const FIRST_ANS_INDEX = '1';
    const SECOND_ANS_INDEX = '2';
    const THIRD_ANS_INDEX = '3';
    const FORTH_ANS_INDEX = '4';

    const checkUrl = () => {
        let urlIndex = index;
   
        if (params.id) {
            urlIndex = parseInt(params.id) - 1;
        }
        
        dispatch(setIndex(urlIndex));
        if (!list[index]) {
            return <p>Item {params.id} not found!</p>;
        }   
    }
    checkUrl();

    const onOptionClick = (text: string) => {
        addUserAnswer(text);
    }

    const addUserAnswer = (text: string) => {
        const question = list[index];
        let result = DEFAULT_INDEX;
        switch(text) {
            case question.first:
                result = FIRST_ANS_INDEX;
                break;
            case question.second:
                result = SECOND_ANS_INDEX;
                break;
            case question.third:
                result = THIRD_ANS_INDEX;
                break;
            case question.forth:
                result = FORTH_ANS_INDEX;
                break;
        }
        dispatch(setUserAnswer(result));
    }

  const onButtonClick = (text: string) => {
    const summaryUrl = '../../summary'
    const size = list.length;
    let question = index + 1;
    switch(text) {
        case BUTTON_BACK:
            navigate(`../${((index + size - 1) % size) + 1}`);
            break;
        case BUTTON_NEXT:
            navigate(`../${(question % size) + 1}`);
            break;
        case SUBMIT:
            dispatch(calculateScore());
            navigate(`${summaryUrl}`);
      }
  }

  return(
    <div className='container'>
            <H1>The Ultimate Trivia Game</H1>
            <Question 
                onOptionClick={onOptionClick} />
            <Navigate 
                onButtonClick={onButtonClick} />
            <ProgressBar />
      </div>
  );
}
export default Dashboard;

