import styled from "@emotion/styled";
import { colors } from "./useStaticVariables";

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

export const getButtonStyle = (color: string, hover: string) => {
  return styled.button`
    padding: 10px;
    background-color: ${color};
    border-radius: 10px;
    color: black;
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
    margin-bottom: 5px;
    margin-left: 5px;
    width:150px;
    &:hover {
        color: white;
        background-color: ${hover};
    }
  `
}

export const Submit = styled.button`
  padding: 10px;
  background-color: ${colors.default};
  border-radius: 10px;
  color: black;
  font-size: 20px;
  font-family: "Roboto Slab", serif;
  box-shadow: 1px 3px #888888;
  width: 170px;
  text-align: center;
  &:hover {
    color: white;
    background-color: ${colors.hover};
  }
`;

export const listItem = styled.li`
  text-align: center;
`;

export const Div = styled.div`
  text-align: center;
`;

export const Text = styled.p`
  font-family: "Roboto Slab";
  text-align: center;
  font-size: 20px;
`;

export const Ul = styled.ul`
  padding: 0;
  text-align: center;
  list-style: none;
`;

export const SummaryStyle = styled.div`

  text-align: center;
  margin-top: 50px;
`;
