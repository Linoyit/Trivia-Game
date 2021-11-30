import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { resetUserAnswers } from "../store/triviaSlice";
import { Submit } from "../utils/emotions";
import { useTriviaCollection } from "./useTriviaCollection";

const Summary: React.FC = () => {
    const dispatch = useAppDispatch();
    const { userSelections, list } = useTriviaCollection();
    const navigate = useNavigate(); 
    let count = 0;
    
    (function calculateScore() {
        let i = 0;
        list.forEach((item) => {
          if (userSelections[i++] === item.answerIndex) {
            count += 1;
          }
        });
    })();

    function handleClick() {
        dispatch(resetUserAnswers());
        navigate(`../trivia`);
    }
    
    const style = {
        // display: 'flex',
        // flexFlow: 'column wrap',
        // alignItems: 'center',
        // alignContent: 'center',
        // justifyContent: 'center',
        // marginTop: '50px'
    }

    return (
        <div style={style}>
            <h1>Congratulations!!</h1>
            <p>You answered correctly on {count} / {list.length} Questions</p>
            <Submit onClick={handleClick}>Play again</Submit>
        </div>
    );
}

export default Summary

