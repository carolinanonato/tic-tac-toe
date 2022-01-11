import React from "react";
import InputGame from '../InputGame'
import LabelGame from '../LabelGame'
import './style.css'


const InputCheckbox = ({id = '', value = '', content =''}) => (
    <>
        <InputGame  id={id}  value={value} type="checkbox" content={content}/>
        <LabelGame className="checkbox" htmlFor={id} content={content}/>
    </>
);

export default InputCheckbox