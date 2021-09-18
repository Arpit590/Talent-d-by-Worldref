import React from 'react'
import "./BottomLinks.css";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

function BottomLinks() {
    return (
        <div className="bottom__links">
            <a href="" target="_blank" rel="noreferrer">
                <EmailIcon className="bottom__email"/>
            </a>
            <a href="https://www.facebook.com/talentdbyworldref" target="_blank" rel="noreferrer">
                <FacebookIcon className="bottom__facebook"/>
            </a>
            <a href="https://www.linkedin.com/company/talent-d/" target="_blank" rel="noreferrer">
                <LinkedInIcon className="bottom__linkedin"/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=918090304020" target="_blank" rel="noreferrer">
                <WhatsAppIcon className="bottom__whatsapp"/>
            </a>
        </div>
    )
}

export default BottomLinks
