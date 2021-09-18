import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import "./ContactUs.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Input, makeStyles, Modal } from '@material-ui/core';
import {Bounce, Fade} from "react-awesome-reveal";
import CheckIcon from '@material-ui/icons/Check';


function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      borderRadius: 20,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

function ContactUs() {

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [requirement, setRequirement] = useState("");
    const [recommended, setRecommended] = useState(false); 


    const clearAllHandler=()=>{
        setOpen(false);
        setName("");
        setNumber("");
        setEmail("");
        setRequirement("");
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        setOpen(true); 
    }

    return (
        <div className="contactpage">
            <div className="contactus">
                <div className="contact__text">
                    <div className="contact__textContainer">
                        <Bounce duration="2000">
                            <img className="contact__image" src="../../assets/contact.svg" alt="contact"/>
                        </Bounce>
                        <div className="contact__textContent">
                            <h4>Contact Us</h4>
                            <div className="contact__textPara">
                                <h4>Email:</h4>
                                <Link to="#">Talentd@worldref.co</Link>
                            </div>
                            <div className="contact__textPara">
                                <h4>Contact No.:</h4>
                                <p>+918090304020</p>
                            </div>
                            <div className="contact__textPara">
                                <h4>Talent'd  by WorldRef</h4>
                            </div>
                            <div className="contact__textPlaces">
                                <p>Pune  |  Delhi  |  Singapore  |  Jakarta  |  Hanoi</p>
                            </div>
                            <div className="contact__textIcons">
                                <div className="contact__worldref">
                                    <div className="contact__worldrefContainer">
                                        <h4>Explore</h4>
                                        <a href="https://worldref.co/" target="_blank" rel="noreferrer">WorldRef.co</a>                                 </div>
                                    <div className="contact__icons">
                                        <a href="https://www.linkedin.com/company/talent-d/"
                                        target="_blank"
                                        rel="noreferrer"
                                        >
                                            <LinkedInIcon className="linkedin1"/>
                                        </a>
                                        <a href="https://api.whatsapp.com/send?phone=919673075959"
                                        target="_blank"
                                        rel="noreferrer"
                                        >
                                            <WhatsAppIcon className="whatsapp1"/>
                                        </a>
                                        <a href="https://www.facebook.com/talentdbyworldref"
                                        target="_blank"
                                        rel="noreferrer"
                                        >
                                        <   FacebookIcon className="facebook1"/>
                                        </a>
                                    </div>
                                    <div className="contact__recommend">
                                        <div className="contact__recommendIcon" onClick={()=>setRecommended(!recommended)}>
                                            <Link to="#">
                                                {recommended ? <CheckIcon className="facebook2"/> : <FacebookIcon className="facebook2"/>}
                                                {recommended ? <p>Done</p> : <p>Recommend</p>}
                                            </Link>
                                        </div>
                                        {recommended ? <div className="contact__recommendText">
                                            <p>You recommended</p>
                                            <p>this</p>
                                        </div> : <div className="contact__recommendText">
                                            <p>Be the first of your friends to</p>
                                            <p>recommend this</p>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact__form">
                <div className="contact__formContent">
                    <h1>Talk to Us</h1>
                    <div className="contact__formPara">
                        <p>It all begins with a conversation.  Fill out the form and</p>
                        <p>we’ll contact you to set up a time to chat. One of our</p>
                        <p>team members will contact you and get you started on</p>
                        <p>unleashing the power of your team.</p>
                    </div>
                    <div className="contact__formContainer">
                        <form onSubmit={submitHandler}>
                            <Input
                            placeholder="Name*"
                            className="form__input"
                            type="text"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required
                            />
                            <Input
                            placeholder="Email*"
                            className="form__input"
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                            />
                            <Input
                            placeholder="Phone*"
                            className="form__input"
                            required
                            value={number}
                            onChange={(e)=>setNumber(e.target.value)}
                            />
                            <Input
                            placeholder="Tell Us about your requirement..."
                            className="form__input"
                            type= "text"
                            value={requirement}
                            onChange={(e)=>setRequirement(e.target.value)}
                            />
                            <Fade duration={2000} direction="up">
                                <button className="contact__button">Contact Us</button>
                            </Fade> 
                            <Modal
                            open={open}
                            onClose={clearAllHandler}>
                                <div style={modalStyle} className={classes.paper}>
                                    <div className="information">
                                        <img src="../../assets/logo.png" alt="logo"/>
                                        <h2>Hello {name}, We will get back to you ASAP!!</h2>
                                        <button onClick={clearAllHandler}>Okay</button>
                                    </div>
                                </div>
                            </Modal>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs
