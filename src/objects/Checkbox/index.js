import React from "react";
import Input from '../Input'
import Label from '../Label'
import './style.css'


const Checkbox = ({id = '', value = '', content =''}) => (
    <>
        <Input  id={id}  value={value} type="checkbox" content={content}/>
        <Label htmlFor={id} content={content}/>
    </>
);

export default Checkbox