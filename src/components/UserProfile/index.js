import React from 'react';
import './style.css'
import Avatar from '../../objects/Avatar';
import Pic from '../../img/avatar.png'
import Github from '../../img/Github.png'
import Linkedin from '../../img/Linkedin.png'
import Twitter from '../../img/Twitter.png'
import Instagram from '../../img/Instagram.png'
import IconSocial from '../../objects/IconSocial';

const UserProfile = () => (
    <dl className='user-profile'>
        <dd className='avatar'>
        <Avatar src={Pic} alt="Carolinas pic"/>
        </dd>
        <dt className="title">Carolina Nonato</dt>
        <dd className="description">
           Former journalist in love with frontend development. 
        </dd>
        <dd className='social'>
            <IconSocial action="https://github.com/carolinanonato" src={Github} alt="github logo"/>
            <IconSocial action="https://www.linkedin.com/in/carolina-nonato/"src={Linkedin} alt="likedin logo"/>
            <IconSocial action="https://www.instagram.com/csnonato/"src={Instagram} alt="twitter logo"/>
            <IconSocial action="https://twitter.com/Carolthedev" src={Twitter} alt="instagram logo"/>
        </dd>
    </dl>

);

export default UserProfile;
