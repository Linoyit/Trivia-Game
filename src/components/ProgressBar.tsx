import React from "react";
import { useParams } from "react-router-dom";
import { Text } from "../utils/emotions";
import { useTriviaCollection } from "./useTriviaCollection";

const ProgressBar: React.FC = () => {
    const params = useParams();
    const numOfQuestion = params.id? parseInt(params.id) : 1;
    const { list } = useTriviaCollection();
    return (
       <div>
           <Text> Question: {numOfQuestion} / {list.length} </Text>
       </div>
    );
}

export default ProgressBar

