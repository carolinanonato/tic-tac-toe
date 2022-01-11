import React from "react";
import InputGame from '../InputGame'
import Label from '../Label'
import './style.css'


const InputCheckbox = ({id = '', value = '', content =''}) => (
    <>
        <InputGame  id={id}  value={value} type="checkbox" content={content}/>
        <Label className="checkbox" htmlFor={id} content={content}/>
    </>
);

export default InputCheckbox