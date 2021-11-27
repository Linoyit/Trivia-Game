import styled from "@emotion/styled";

export const H1 = styled.h1`
      font-family: 'Roboto Slab', serif;
`
export const H3 = styled.h3`
padding: 15px;
margin-bottom: 10px;
font-family: 'Roboto Slab', serif;
`

const HOVERED_BTN_COLOR = 'rgb(69, 79, 82)';
const DEFAULT_BTN_COLOR = 'rgb(205, 233, 241)';

export const Button = styled.button`
padding: 10px;
background-color: ${DEFAULT_BTN_COLOR};
border-radius: 10px;
color: black;
font-size: 14px;
font-family: 'Roboto Slab', serif;
margin: 5px;
box-shadow: 1px 3px #888888;
width:80px;
&:hover {
    color: white;
    background-color: ${HOVERED_BTN_COLOR};
}
`

export const Submit = styled.button`
padding: 10px;
background-color: ${DEFAULT_BTN_COLOR};
border-radius: 10px;
color: black;
font-size: 20px;
font-family: 'Roboto Slab', serif;
margin-left: 40px;
box-shadow: 1px 3px #888888;
width:170px;
&:hover {
    color: white;
    background-color: ${HOVERED_BTN_COLOR};
}
`

export const Div = styled.div`
display: flex;
justifyContent: space-around;
padding: 5px;
margin-left: 40px;
`
export const Text = styled.p`
fontFamily: 'Roboto Slab'

`

export const SummaryStyle = styled.div`
    display: flex;
    flexFlow: column wrap;
    alignItems: center;
    alignContent: center;
    justifyContent: center;
    marginTop: 50px
`
