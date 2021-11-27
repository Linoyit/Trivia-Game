import React from "react";
import { useAppSelector } from "../store/hooks";
import { Text } from "../utils/emotions";

const ProgressBar: React.FC = () => {
    const length = useAppSelector((state) => state.trivia.items.length);
    const index = useAppSelector((state) => state.trivia.index);
    
    return (
       <div>
           <Text> Question: {index + 1} / {length} </Text>
       </div>
    );
}

export default ProgressBar

