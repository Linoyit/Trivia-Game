import React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {

    const style = {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
    }

    const listStyle = {
        paddingLeft: '10px',
        paddingRight: '10px',
        fontSize: '20px',
        

    }

    const navStyle = {
        color: 'rgb(216, 158, 0)',
        textDecoration: 'none'
    }

    return (
        <nav>
        <ul style={style}>
            <li style={listStyle}>
            <NavLink style={navStyle} to="/trivia/1">Q1</NavLink>
            </li>
            {' '}|{' '}
            <li style={listStyle}>
            <NavLink style={navStyle} to="/trivia/2">Q2</NavLink>
            </li>
            {' '}|{' '}
            <li style={listStyle}>
            <NavLink style={navStyle} to="/trivia/3">Q3</NavLink>
            </li>
            {' '}|{' '}
            <li style={listStyle}>
            <NavLink style={navStyle} to="/trivia/4">Q4</NavLink>
            </li>
            {' '}|{' '}
            <li style={listStyle}>
            <NavLink style={navStyle} to="/trivia/5">Q5</NavLink>
            </li>
        </ul>
        </nav>
    );
}

export default NavBar


