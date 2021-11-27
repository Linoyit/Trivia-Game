import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetUserAnswers, setCount, setIndex } from "../store/triviaSlice";

const Summary: React.FC = () => {
    const dispatch = useAppDispatch();
    const length = useAppSelector((state) => state.trivia.items.length);
    const count = useAppSelector((state) => state.trivia.count);
    console.log("count", count);
    const navigate = useNavigate(); 

    function handleClick() {
        dispatch(setCount(0));
        dispatch(setIndex(0));
        dispatch(resetUserAnswers());
        navigate(`../trivia`);
    }
    
    const style = {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: '50px'
    }

    return (
        <div style={style}>
            <h1>Congratulations!!</h1>
            <p>You answered correctly on {count} / {length} Questions</p>
            <button onClick={handleClick}>Play again</button>
        </div>
    );
}

export default Summary

