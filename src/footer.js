import React from 'react';
import './footer.css'
import Account from './account';
import Contact from './contact';
import Help from './help';
import Information from './information';
import SocialIcons from './SocialIcons';



const Footer = () => {
    return (
        <div className="container">
            <section className="footer-container">
            <div className="footer">
                <div className="footer-social">
                    <div><p>We're confident we've provided all the best for you.Stay contact with us</p></div>
                    <div><SocialIcons /></div>
                </div>
                <div className="footer-wrapper">
                    <Information />
                    <Account />
                    <Help />
                    <Contact />
                </div>
            </div>
            </section>
        </div>
    )
}

export default Footer;