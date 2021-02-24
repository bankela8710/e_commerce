import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import SocilIcons from './SocialIcons';


const HeaderSocial = () => {
    return (
        <div className="social-wrapper">
            <div className="contact">
                <div><FaPhone />+1 111 222</div>
                <div className="social-line"></div> 
                 <div><FaEnvelope />infocompany@gmail.com</div> 
            </div>
            <SocilIcons />
        </div>
    )
};

export default HeaderSocial;