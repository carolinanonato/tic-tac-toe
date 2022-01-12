import React from 'react';
import './style.css';

const LabelGame = ({ htmlFor, content, onClick }) => (
    <label onClick={onClick} className="label-game" htmlFor={htmlFor}>{content}</label>
);

export default LabelGame;