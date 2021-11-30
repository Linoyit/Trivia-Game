import React from "react";
import { useParams } from "react-router-dom";
import { Div, getButtonStyle, Submit } from "../utils/emotions";
import { colors } from "../utils/useStaticVariables";
import { useTriviaCollection } from "./useTriviaCollection";

interface IProps {
  onButtonClick: Function;
}

const Navigate: React.FC<IProps> = ({ onButtonClick }) => {
  const { list } = useTriviaCollection();
  const params = useParams();
  const numOfQuestion = params.id ? parseInt(params.id) : 1;
  const nextBtnDisabled = numOfQuestion === list.length;
  const backBtnDisabled = numOfQuestion === 1;

  const handleClick = (text: string) => {
    onButtonClick(text);
  };

  const Button = getButtonStyle(colors.default, colors.hover);

  return (
    <div>
      <Div>
        <Button disabled={backBtnDisabled} onClick={() => handleClick("back")}>
          Back
        </Button>
        <Button disabled={nextBtnDisabled} onClick={() => handleClick("next")}>
          Next
        </Button>
      </Div>
      <Div>
        <Submit onClick={() => handleClick("submit")}>Submit</Submit>
      </Div>
    </div>
  );
};

export default Navigate;
