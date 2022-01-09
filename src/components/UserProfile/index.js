import React from 'react';
import './style.css'
import Avatar from '../../objects/Avatar';
import Pic from '../../img/avatar.png'

const UserProfile = () => (
    <dl>
        <dd>
        <Avatar src={Pic} alt="Carolinas pic"/>
        </dd>
        <dt>Carolina Nonato</dt>
        <dd>
           Former journalist in love with frontend development. 
        </dd>
    </dl>

);

export default UserProfile;
