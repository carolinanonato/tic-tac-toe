import React from "react";
import './style.css'

const Profile = ({children, className=''})=> (
     <article className={`profile ${className}`}>{children}</article>
);

export default Profile