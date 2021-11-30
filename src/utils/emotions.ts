import styled from "@emotion/styled";

export const H1 = styled.h1`
  font-family: "Roboto Slab", serif;
  text-align: center;
`;
export const H3 = styled.h3`
  padding: 15px;
  margin-bottom: 10px;
  text-align: center;
  font-family: "Roboto Slab", serif;
`;
const HOVERED_BTN_COLOR = "rgb(69, 79, 82)";
const DEFAULT_BTN_COLOR = "rgb(255 181 46)";

export const Button = styled.button`
  padding: 10px;
  background-color: ${DEFAULT_BTN_COLOR};
  border-radius: 10px;
  color: black;
  font-size: 14px;
  text-align: center;
  font-family: "Roboto Slab", serif;
  margin: 5px;
  box-shadow: 1px 3px #888888;
  width: 80px;
  &:hover {
    color: white;
    background-color: ${HOVERED_BTN_COLOR};
  }
`;

export const Submit = styled.button`
  padding: 10px;
  background-color: ${DEFAULT_BTN_COLOR};
  border-radius: 10px;
  color: black;
  text-align: center;
  font-size: 20px;
  font-family: "Roboto Slab", serif;
  box-shadow: 1px 3px #888888;
  width: 170px;
  text-align: center;
  &:hover {
    color: white;
    background-color: ${HOVERED_BTN_COLOR};
  }
`;

export const listItem = styled.li`
  text-align: center;
`;

export const Div = styled.div`
  text-align: center;
`;
export const Text = styled.p`
  fontfamily: "Roboto Slab";
  text-align: center;
`;

export const SummaryStyle = styled.div`
  display: flex;
  flexflow: column wrap;
  alignitems: center;
  aligncontent: center;
  justifycontent: center;
  margintop: 50px;
`;
