import React from 'react';
import './style.css'
import Avatar from '../../objects/Avatar';
import Pic from '../../img/avatar.png'

const UserProfile = () => (
    <dl className='user-profile'>
        <dd className='avatar'>
        <Avatar src={Pic} alt="Carolinas pic"/>
        </dd>
        <dt className="title">Carolina Nonato</dt>
        <dd className="description">
           Former journalist in love with frontend development. 
        </dd>
    </dl>

);

export default UserProfile;
