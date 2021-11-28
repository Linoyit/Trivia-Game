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
    
    let urlIndex = index;
   
    if (params.id) {
        urlIndex = parseInt(params.id) - 1;
    }
    
    dispatch(setIndex(urlIndex));
    if (!list[index]) {
        return <p>Item {params.id} not found!</p>;
    }  

    const onOptionClick = (text: string) => {
        addUserAnswer(text);
    }

    const addUserAnswer = (text: string) => {
        const question = list[index];
        const answers = question.answers;
        let result = DEFAULT_INDEX;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === text) {
                result = '' + i;
                break;
            }
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

