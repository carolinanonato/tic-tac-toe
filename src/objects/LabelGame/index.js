import React from 'react';
import './style.css';

const LabelGame = ({ htmlFor, content }) => (
    <label className="label-game" htmlFor={htmlFor}>{content}</label>
);

export default LabelGame;