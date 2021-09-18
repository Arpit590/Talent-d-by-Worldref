import React, { useEffect } from 'react'
import "./GlobalManpower.css";
import {Reveal, Fade} from "react-awesome-reveal"
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import SettingsVoiceOutlinedIcon from '@material-ui/icons/SettingsVoiceOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Aos from "aos";
import "aos/dist/aos.css";
import FormatQuote from '@material-ui/icons/FormatQuote';
import HelpingCard from '../components/HelpingCard';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";


function GlobalManpower({open1, open}) {

    useEffect(()=>{
        Aos.init({duration: 2000})
    })

    return (
        <div className="global__manpower">
            <div className="global__manpower">

                {/* The Global Manpower Section Starts */}
                <div className="global__manpowerContainer">
                    <div className="global__manpowerContainerLeft">
                        <div className="global__manpowerText">
                            <Reveal delay={500}>
                                <h1 className="global__manpowerText">GLOBAL MANPOWER</h1>
                            </Reveal>
                            <Reveal delay={1000}>
                                <h1 className="global__manpowerText">CONTRACTING</h1>
                            </Reveal>
                            <Reveal delay={1500}>
                                <h1 className="global__manpowerText">SERVICES</h1>
                            </Reveal>
                        </div>
                        <div className="global__manpowerPara">
                            <p>Talent'd Global Manpower Contracting</p>
                            <p> Services Helps You in Cheaper and Faster</p>
                            <p>Mobilisation of Your Global Manpower for</p>
                            <p>your International Projects Need and</p>
                            <p>Business Operations.</p>
                        </div>
                        <Fade delay={2000}>
                            <div className="global__manpowerButton">
                                <button className="Button" onClick={open}>Get Talent'd</button>
                            </div>
                        </Fade>
                    </div>
                    <div className="global__manpowerContainerRight">
                        <img src="../assets/mask.png" alt=""/>
                    </div>
                </div>
                {/* The Global Manpower Section Ends */}

                {/* The Path Section Starts */}

                <div className="path">
                    <div className="path__container">
                        <div className="path__heading">
                            <h1>Smoothest Path to Globalisation</h1>
                        </div>
                        <div className="path__cardContainer">
                            <div className="path__card">
                                <div className="path__cardHeadingContainer">
                                    <EmojiObjectsOutlinedIcon/>
                                    <div className="path__cardHeading">
                                        <h1>Global</h1>
                                        <h1>Localisation</h1>
                                    </div>
                                </div>
                                <div className="path__cardContent">
                                    <p>Build flexibility in execution</p>
                                    <p>of your international</p>
                                    <p>projects with local</p>
                                    <p>manpower contractors in</p>
                                    <p>the vicinity of your project.</p>
                                </div>
                            </div>
                            <div className="path__card">
                                <div className="path__cardHeadingContainer">
                                    <SettingsVoiceOutlinedIcon/>
                                    <div className="path__cardHeading">
                                        <h1>Verified</h1>
                                        <h1>Contractors</h1>
                                    </div>
                                </div>
                                <div className="path__cardContent">
                                    <p>Discover 1000s of duly</p>
                                    <p>verified Manpower</p>
                                    <p>Contractors from More Than</p>
                                    <p>20 Countries across Asia</p>
                                    <p>Pacific Region.</p>
                                </div>
                            </div>
                            <div className="path__card">
                                <div className="path__cardHeadingContainer">
                                    <CreateOutlinedIcon/>
                                    <div className="path__cardHeading">
                                        <h1>360 Degree</h1>
                                        <h1>Support</h1>
                                    </div>
                                </div>
                                <div className="path__cardContent">
                                    <p>Talent'd provides complete</p>
                                    <p>Manpower support from</p>
                                    <p>Commencement to</p>
                                    <p>Completion of your</p>
                                    <p>International Projects.</p>
                                </div>
                            </div>
                            <div className="path__card">
                                <div className="path__cardHeadingContainer">
                                    <SmsOutlinedIcon/>
                                    <div className="path__cardHeading">
                                        <h1>Wide Range of</h1>
                                        <h1>Solutions</h1>
                                    </div>
                                </div>
                                <div className="path__cardContent">
                                    <p>Comprehensive Solutions for</p>
                                    <p>Temporary and Permanent</p>
                                    <p>Staffing of Manpower for</p>
                                    <p>International Projects &</p>
                                    <p>Businesses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* The Path Section Ends */}

                {/* The Construction Section Starts */}
                <div className="construction">
                    <div className="construction__container">
                        <img src="../../assets/construction.jpg" alt="construction"/>
                        <div className="construction__content">
                            <h1>FLEXIBLE CONTRACTS</h1>
                            <div className="construction__container1">
                                <div className="construction__heading1">
                                    <h1>Temporary & Contractual</h1>
                                    <h1>Manpower Solutions</h1>
                                </div>
                                <div className="construction__content1">
                                    <p>Scalable and flexible 3rd party global manpower</p>
                                    <p>contracting services for your international projects.</p>
                                </div>
                            </div>
                            <div className="construction__container2">
                                <div className="construction__heading2">
                                    <h1>Skilled & Semi-Skilled</h1>
                                    <h1>Manpower</h1>
                                </div>
                                <div className="construction__content2">
                                    <div className="construction__lists1">
                                        <div className="construction__list1">
                                            <ul>
                                                <li>Welders</li>
                                                <li>Millwright Fitters</li>
                                                <li>Insulation Installers</li>
                                                <li>Industrial Electricians</li>                                           
                                            </ul>
                                        </div>
                                        <div className="construction__list2">
                                            <ul>
                                                <li>Plumbers</li>
                                                <li>Carpenters</li>
                                                <li>Mechanics</li>
                                                <li>Technicians</li>                                           
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="construction__container3">
                                <h1>Machinery Operators</h1>
                                <div className="construction__lists2">
                                    <div className="construction__list1">
                                        <ul>
                                            <li>Maintenance Professional</li>
                                            <li>Specialised Technicians</li>
                                            <li>Machinery & Plant Operators</li>                                          
                                        </ul>
                                    </div>
                                    <div className="construction__list2">
                                        <ul>
                                            <li>IT Engineers</li>
                                            <li>Equipment Drivers</li>                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="construction__container4">
                                <h1>General Labour</h1>
                                <div className="construction__lists3">
                                    <div className="construction__list1">
                                        <ul>
                                            <li>Construction Workers</li>
                                            <li>Industrial Housekeeping</li>
                                            <li>Security Personnel</li>                                          
                                        </ul>
                                    </div>
                                    <div className="construction__list2">
                                        <ul>
                                            <li>Contract Labour</li>
                                            <li>Storekeepers</li>
                                            <li>Groundworkers</li>                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* The Construction Section Ends */}

                {/* The Professional Section Starts */}
                <div className="professional">
                    <div className="professional__container">
                        <div className="professional__content">
                            <div className="professional__heading">
                                <h1>Managerial Level</h1>
                                <h1>Professionals</h1>
                            </div>
                            <div className="professional__para">
                                <p>Hire experienced engineering and management</p>
                                <p>contractual employment for your International</p>
                                <p>projects and business operations.</p>
                            </div>
                            <div className="professional__lists">
                                <div className="professional__list1">
                                    <ul>
                                        <li>Project Managers</li>
                                        <li>Foreman</li>
                                        <li>Surveyors</li>
                                        <li>Project Superintendents</li>
                                        <li>Quality Inspectors</li>
                                        <li>Construction Area Managers</li>
                                        <li>Administrative Officers</li>
                                        <li>General Contractor Managers</li>
                                    </ul>
                                </div>
                                <div className="professional__list2">
                                    <ul>
                                        <li>Engineers</li>
                                        <li>Safety Officers</li>
                                        <li>Supervisors</li>
                                        <li>Team Leaders</li>
                                        <li>Site In-charge</li>
                                        <li>Line Inspectors</li>
                                        <li>Office Manager</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="professional__button" onClick={open1}>
                                <p>Know More</p>
                                <ArrowForwardIcon/>
                            </div>
                        </div>
                        <img src="../../assets/professionals.png" alt="professionals"/>
                    </div>
                </div>

                {/* The Professional Section Ends */}

                {/* The Text Container Starts */}

                <div className="text">
                    <div className="text__container">
                        <div className="text__containerIcon">
                            <FormatQuote/>
                        </div>
                        <div className="text__containerContent">
                            <p>"I have worked with WorldRef in Manpower domain, their efforts and business dealing is</p>
                            <p>quite professional."</p>
                        </div>
                        <div className="text__containerText">
                            <h4><strong>Mohamad Noer </strong>| PT Haman Energy, Indonesia</h4>
                        </div>
                        <div className="text__containerImage1" data-aos="flip-up">
                            <img src="../../assets/Logo-1.png" alt="logo"/>
                        </div>
                    </div>
                </div>
                {/* The Text Container Ends */}

                {/* The Unique Section Starts */}
                <div className="unique">
                    <div className="unique__container">
                        <img src="../../assets/unique.png" alt="unique"/>
                        <div className="unique__content">
                            <h1>A UNIQUE PLATFORM</h1>
                            <div className="unique__heading">
                                <h1>One Partner, Infinite</h1>
                                <h1>Possibilities</h1>
                            </div>
                            <div className="unique__cards">
                                <div className="unique__cardsRow1">
                                    <div className="unique__card">
                                        <div className="unique__cardHeading">
                                            <h1>C - Suite</h1>
                                            <h1>Executives</h1>
                                        </div>
                                        <div className="unique__cardContent">
                                            <p>Talent'd offer a perfect</p>
                                            <p>solution to identify people</p>
                                            <p>whose drive & ambition</p>
                                            <p>can help transform</p>
                                            <p>International Market</p>
                                        </div>
                                    </div>
                                    <div className="unique__card">
                                        <div className="unique__cardHeading">
                                            <h1>Opportunities for</h1>
                                            <h1>Job Seekers</h1>
                                        </div>
                                        <div className="unique__cardContent">
                                            <p>Search Job positions that</p>
                                            <p>match your skillsets and</p>
                                            <p>grab your next</p>
                                            <p>opportunity with Talent'd.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="unique__cardsRow2">
                                    <div className="unique__card">
                                        <div className="unique__cardHeading">
                                            <h1>HR process</h1>
                                            <h1>outsourcing</h1>
                                        </div>
                                        <div className="unique__cardContent">
                                            <p>Improve retention,</p>
                                            <p>enhance workforce</p>
                                            <p>productivity, and reduce</p>
                                            <p>costs through customised</p>
                                            <p>HRO solutions.</p>
                                        </div>
                                    </div>
                                    <div className="unique__card">
                                        <div className="unique__cardHeading">
                                            <h1>Training &</h1>
                                            <h1>Development</h1>
                                        </div>
                                        <div className="unique__cardContent">
                                            <p>Chisel your skills and learn</p>
                                            <p>with more Than 2,700</p>
                                            <p>global trainers from more</p>
                                            <p>than 25 industries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                {/* The Unique Section Ends */}

                {/* The Shortage Section Starts */}
                
                <div className="shortage">
                    <div className="shortage__container">
                        <div className="shortage__box" data-aos="fade-right">
                            <h1>TALENT SHORTAGE</h1>
                            <div className="shortage__boxContent1">
                                <p>Manpower giants such as China, India, Eastern</p>
                                <p>Europe, and parts of South America are also</p>
                                <p>grappling with critical talent shortages. Russia</p>
                                <p>alone faces an estimated reduction of appx. 20</p>
                                <p>million working age people by 2030.3</p>
                            </div>
                            <div className="shortage__boxContent2">
                                <p>The UN anticipates that China’s working-age</p>
                                <p>population (those aged 15-59) will fall behind</p>
                                <p>Vietnam’s in 2020 and lag behind India and Brazil</p>
                                <p>in 2025.</p>
                            </div>
                            <p>Source: PwC’s 23rd Annual Global CEO Survey 2020</p>
                        </div>
                        <img src="../../assets/talent.png" alt="talent"/>
                    </div>
                </div>
                {/* The Shortage Section Ends */}

                {/* The Intro Section Starts */}

                <div className="intro">
                    <div className="intro__container">
                        <img src="../../assets/Intro.png" alt="intro"/>
                        <div className="intro__content">
                            <FormatQuote/>
                            <div className="intro__contentPara">
                                <p>WorldRef Team has got an excellent</p>
                                <p>Associate network across the globe. I</p>
                                <p>strongly recommend working with such</p>
                                <p>a dynamic team. As a Sales person,</p>
                                <p>WorldRef has proved to be an</p>
                                <p>indispensable tool for me</p>
                            </div>
                            <p>Tedi Susanto, PT Sanki Cranes, Indonesia</p>
                        </div>
                    </div>
                </div>

                {/* The Intro Section Ends */}

                {/* The Helping Cards Section Starts */}

                <div className="helping__cards">
                    <div className="helping__heading">
                        <h1>Helping you focus on just the right things</h1>
                    </div>
                    <div className="helping__cardContainer">
                        <HelpingCard
                        title1="International Manpower"
                        title2="Deployment"
                        imgSrc="../../assets/Image-2.png"
                        />
                        <HelpingCard
                        title1="Global Industrial"
                        title2="Manpower Contracting"
                        imgSrc="../../assets/Image-1.png"
                        />
                        <HelpingCard
                        title1="Training & Development"
                        title2="Solutions"
                        imgSrc="../../assets/Image-3.png"
                        />
                        <HelpingCard
                        title1="HR Process"
                        title2="Outsourcing"
                        imgSrc="../../assets/Image-4.jpg"
                        />
                    </div>
                </div>
                {/* The Helping Cards Section Ends */}

                {/* The Journey Section Starts */}

                <div className="journey">
                    <div className="journey__container">
                        <h1>Need Help with Global Manpower Contracting Services?</h1>
                        <div className="journey__containerPara">
                            <p>Get the right contractual employment to Globalise your Business</p>
                            <p>Operations and international projects</p>
                        </div>
                        <Link onClick={open1} to="#" data-aos="flip-up">
                            Get Talent'd
                        </Link>
                    </div>
                </div>
                {/* The Journey Section Ends */}
            </div>
            <Footer/>
        </div>
    )
}

export default GlobalManpower
