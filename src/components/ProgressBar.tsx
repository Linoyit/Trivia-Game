import React from "react";
import { useAppSelector } from "../store/hooks";
import { Text } from "../utils/emotions";

const ProgressBar: React.FC = () => {
    const length = useAppSelector((state) => state.trivia.items.length);
    const count = useAppSelector((state) => state.trivia.count);
    
    return (
       <div>
           <Text> Question: {count} / {length} </Text>
       </div>
    );
}

export default ProgressBar

