import React  from 'react';
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faInstagram,faTwitter,faFacebook,faLinkedin} from "@fortawesome/free-brands-svg-icons"

export default function Contact() {
    
    return (
        <div className = "contact" id = "contact">
         <div className = "footer-content">
             <h3>LITERAL<span>BASE</span></h3>
             <p>Contact us on our social media platforms or use the whatsapp call to action button</p>
             <ul className = "socials">
                 <li><a href = "https://web.facebook.com/LIteralbase-110244101348634"><FontAwesomeIcon icon={faFacebook} size ="2x" /></a></li>
                 <li><a href = "https://www.instagram.com/literalreact/"><FontAwesomeIcon icon={faInstagram} size ="2x"/></a></li>
                 <li><a href = "#c"><FontAwesomeIcon icon={faTwitter} size ="2x"/></a></li>
                 <li><a href = "https://github.com/literalbase"><FontAwesomeIcon icon={faGithub}size ="2x" /></a></li>
                 <li> <a href = "https://www.linkedin.com/in/babalola-blessing-ebun-75a4a5213/"><FontAwesomeIcon icon={faLinkedin} size = "2x" /></a></li>
             </ul>
         </div>
         <div className = "footer-bottom">
             <p>
                 copyright &copy;2021 Literalbase </p>
         </div>
        </div>
    )
}
