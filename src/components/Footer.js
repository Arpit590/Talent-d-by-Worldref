import React, { useEffect } from 'react'
import "./Footer.css";
import {Link} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Aos from "aos"
import "aos/dist/aos.css";

function Footer() {

    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (
        <div className="footer__container">
            <div className="footer">
                <div className="footer__main">
                    <div className="footer__image" data-aos="fade-right">
                        <img src="../../assets/Logo.png" alt="logo"/>
                    </div>
                    <div className="footer__cards">
                        <div className="footer__card">
                            <h3>About</h3>
                            <Link to="/">About Talent'd</Link>
                            <a href="https://worldref.co/know-us" target="_blank" rel="noreferrer">About Worldref</a>
                            <Link to="/industries">Industries</Link>
                        </div>
                        <div className="footer__card">
                            <h3>Services</h3>
                            <Link to="/global-recruitment-services">Global Recruitment</Link>
                            <Link to="/global-manpower-contracting-service">International Contracting</Link>
                            <Link to="/global-manpower-deputation">International Deputation</Link>
                            <Link to="#">HR Process Outsourcing</Link>
                            <Link to="#">Training & Development</Link>
                        </div>
                        <div className="footer__card">
                            <h3>Contact</h3>
                            <Link to="/contact-us">Contact Us</Link>
                            <Link to="/jobs">Job Opportunities</Link>
                        </div>
                    </div>
                    <div className="footer__svgs">
                        <img src="../../assets/svg3.svg" alt="svg" data-aos="fade-left"/>
                        <div className="footer__icons">
                            <a href="https://www.linkedin.com/company/talent-d/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className="linkedin"/>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=918090304020" target="_blank" rel="noreferrer">
                                <WhatsAppIcon className="whatsapp"/>
                            </a>
                            <a href="https://www.facebook.com/talentdbyworldref" target="_blank" rel="noreferrer">
                                <FacebookIcon className="facebook"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__text">
                    <h1>PART OF WORLDREF FAMILY</h1>
                    <a href="https://worldref.co/know-us/" target="_blank" rel="noreferrer">
                        <img src="../../assets/worldref.png" alt="logo" data-aos="fade-up"/>
                    </a>
                </div>
            </div>
            
            <div className="footer__box">
                <p>©2016-21 WorldRef Technologies. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
