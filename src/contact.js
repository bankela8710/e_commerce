import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import {FaGlobeEurope} from 'react-icons/fa';



const Contact = ()=>{
return(
    <div>
        <h4>contact info</h4>
        <p><FaGlobeEurope />19 Nova,Kosjeric</p>
        <p><FaPhone />+ 1 234 567</p>
        <p><FaEnvelope />mail@gmail.com</p>
    </div>
)

}

export default Contact;