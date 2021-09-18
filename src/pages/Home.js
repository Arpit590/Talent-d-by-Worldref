import React, { useEffect} from 'react'
import "./Home.css";
import {Reveal, Fade} from "react-awesome-reveal";
import LanguageIcon from '@material-ui/icons/Language';
import BarChartIcon from '@material-ui/icons/BarChart';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import Aos from "aos";
import "aos/dist/aos.css";
import Card from '../components/Card';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home({open, open1}) {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <div className="home">
            
            {/* The Hero Section Starts */}
            <div className="hero__container">
                <div className="hero__containerLeft">
                    <div className="hero__text">
                        <Reveal delay={500}>
                            <h1 className="hero__text1">The easiest way to</h1>
                        </Reveal>
                        <Reveal delay={1000}>
                            <h1 className="hero__text2">manage your global</h1>
                        </Reveal>
                        <Reveal delay={1500}>
                            <h1 className="hero__text3">manpower</h1>
                        </Reveal>
                    </div>
                    <div className="hero__para">
                        <p>WorldRef brings you a unique platform that</p>
                        <p> makes it easy and simple to manage all</p>
                        <p> business aspects related to global manpower.</p>
                    </div>
                    <Fade delay={2000}>
                        <div className="hero__button">
                            <button className="button" onClick={open}>Get Talent'd</button>
                        </div>
                    </Fade>
                </div>
                <div className="hero__containerRight">
                    <img src="../assets/background.png" alt=""/>
                </div>
            </div>
            {/* The Hero Section Ends */}


            {/* The Container Starts */}
            <div className="container">
                <div className="container__heading">
                    <h1>Take The Best Way Forward</h1>
                </div>
                <div className="container__cards">
                    <div className="card">
                        <div className="card__heading">
                            <LanguageIcon/>
                            <h2>Global Localisation</h2>
                        </div>
                        <div className="card__content">
                            <p>Globalization made simpler with localised</p>
                            <p>manpower solutions delivered in more than 20</p>
                            <p>countries.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__heading">
                            <BarChartIcon/>
                            <h2>Flexible Scalability</h2>
                        </div>
                        <div className="card__content">
                            <p>Build the flexibility and resilience in</p>
                            <p>your international business by outsourcing</p>
                            <p>your global manpower solutions to experts at</p>
                            <p>Talent'd.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__heading">
                            <HourglassFullIcon/>
                            <h2>Customised Solutions</h2>
                        </div>
                        <div className="card__content">
                            <p>Get customized manpower solutions for more than</p>
                            <p>40 industries delivered across 20 leading economies</p>
                            <p>across the world.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__heading">
                            <FlightTakeoffIcon/>
                            <h2>Super Fast & Efficient</h2>
                        </div>
                        <div className="card__content">
                            <p>Make your business a global superstar with</p>
                             <p>predictable expenditures combined with highly</p>
                            <p>efficient and punctual services by Talent'd.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* The Container Ends */}

            {/* The Grow Section Starts */}
            <div data-aos="fade-right" className="grow__container">
                <div className="grow__heading">
                    <h1>Grow your global business, </h1>
                    <h1>without the growing pains</h1>
                </div>
                <div className="grow__content">
                    <p>Hire the best workforce for your international business or projects.</p>
                    <p>Customized global manpower services delivered through a global</p>
                    <p>network of leading manpower agencies and contractor partners.</p>
                </div>
            </div>
            {/* The Grow Section Ends */}

            {/* The InfoCards Section Starts */}

            <div className="info__cards">
                <div className="info__cardsContainer">
                    <Card
                    imgSrc="../../assets/earth.svg"
                    heading1="Global Talent"
                    heading2="Recruitment"
                    contentline1="Optimize Your International Hiring, and"
                    contentline2="Recruit the Best & Brightest Talents With"
                    contentline3="Global Talent Acquisition Service Solutions."
                    bgColor="lightblue"
                    link="/global-recruitment-services"
                    />

                    <Card
                    imgSrc="../../assets/construction.svg"
                    heading1="Global Manpower"
                    heading2="Contracting Solutions"
                    contentline1="Don’t Let the Industry’s Ups and Downs Bother Your"
                    contentline2="Workforce. Hire Experienced and Productive"
                    contentline3="Professionals to Create a Dynamic Team."
                    bgColor="lightcyan"
                    link="/global-manpower-contracting-service"
                    />

                    <Card
                    imgSrc="../../assets/svg1.png"
                    heading1="Global Deputation"
                    heading2="Services"
                    contentline1="Wide Range of Global Deputation Services for"
                    contentline2="Manpower to Make Global Operations Cost-"
                    contentline3="Effective, Fast and Reliable"
                    bgColor="lightpink"
                    link="/global-manpower-deputation"
                    />
                </div>
            </div>

            {/* The Info Container Ends */}

            {/* The Text Container Starts */}

            <div className="text">
                <div className="text__container">
                    <div className="text__containerIcon">
                        <FormatQuoteIcon/>
                    </div>
                    <div className="text__containerContent">
                        <p>"Syntek and WorldRef share a very good business relationship in electrical & testing</p>
                        <p>domain. How to keep the friendliness and professionalism alive in business, WorldRef is</p>
                        <p>a good example of that"</p>
                    </div>
                    <div className="text__containerText">
                        <h4><strong>Rizky Habibie </strong>| PT Krakatau Daya Listrik, Indonesia</h4>
                    </div>
                    <div className="text__containerImage" data-aos="flip-left">
                        <img src="../../assets/krakatau.png" alt="logo"/>
                    </div>
                </div>
            </div>
            {/* The Text Container Ends */}

            {/* The Card Box Container Starts */}

            <div className="card__box">
                <div className="card__boxContainer">
                    <div className="card__box1">
                        <h1>Helping you focus on just the right things</h1>
                        <div className="card__box1Container">
                            <div className="card__box1Content">
                                <h1>Global Training &</h1>
                                <h1 style={{marginBottom:"20px"}}> Development Services</h1>
                                <p>No generation has had the opportunity, as we now</p>
                                <p> have, to build a global economy that leaves no-one</p>
                                <p>behind. It is a wonderful opportunity, and we bring</p>
                                <p> you a platform that democratises global learning.</p>
                                <p>Learn with more Than 2,700 global trainers from</p>
                                <p> more than 25 industries</p>
                                <div className="card__box1Link">
                                    <Link to="#" onClick={open1}>
                                        Know More
                                        <ArrowForwardIcon/>
                                    </Link>
                                </div>
                            </div>
                            <div className="card__box1Image">
                                <img src="../../assets/image2.png" alt="backgroundImage"/>
                            </div>
                        </div>
                    </div>
                    <div className="card__box2">
                        <div className="card__box2Container">
                            <div className="card__box2Content">
                                <div className="card__box2Heading">
                                    <h1>Empowering business</h1>
                                    <h1>globalisation everywhere</h1>
                                </div>
                                <div className="card__box2Para">
                                    <p>Over 8,000 businesses in 150 countries</p>
                                    <p>around the world have generated over $300</p>
                                    <p>million USD in business opportunities</p>
                                    <p>using WorldRef.</p>
                                </div>
                                <div className="card__box2Button" data-aos="zoom-in">
                                    <a href="https://worldref.co/"target="_blank" rel="noreferrer">
                                        Explore WorldRef
                                    </a>
                                </div>
                            </div>
                            <div className="card__box2Image">
                                <img src="../../assets/image3.png" alt="backgroundimage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* The Cardbox Container Ends */}

            {/* The Image Container Starts */}
            <div className="imageContainer">
                <div className="imageContainer1">
                    <div className="imageContainer1__image" data-aos="fade-right">
                        <img src="../../assets/image4.png" alt="image4"/>
                    </div>
                    <div className="imageContainer1__content" data-aos="fade-left">
                        <FormatQuoteIcon/>
                        <div className="imageContainer1__contentHeading">
                            <h1>"WorldRef has</h1>
                            <h1>supported us in getting</h1>
                            <h1>the right local partners,</h1>
                            <h1>we look forward to</h1>
                            <h1>continue working with</h1>
                            <h1>them"</h1>
                        </div>
                        <div className="imageContainer1__contentPara">
                            <p>Sanjit John, VA Tech Wabag Limited,</p>
                            <p>Indonesia</p>
                        </div>
                    </div>
                </div>
                <div className="imageContainer2">
                    <div className="imageContainer2__container">
                        <img src="../../assets/avatar1.png" alt="avatar" data-aos="flip-left"/>
                        <img src="../../assets/avatar2.png" alt="avatar" data-aos="flip-left"/>
                        <img src="../../assets/avatar3.png" alt="avatar" data-aos="flip-right"/>
                        <img src="../../assets/avatar4.png" alt="avatar" data-aos="flip-right"/>
                    </div>
                </div>
            </div>
            {/* The Image Container Section Ends */}

            {/* The Help Container Section Starts */}

            <div className="help">
                <div className="help__container">
                    <div className="help__containerContents">
                        <div className="help__containerHeading">
                            <h1>Get the help you need,</h1>
                            <h1>every step of the way.</h1>
                        </div>
                        <div className="help__containerContent">
                            <div className="help__containerContent1">
                                <div className="help__containerContent1Heading">
                                    <h1>HR process</h1>
                                    <h1>outsourcing</h1>
                                </div>
                                <div className="help__containerContent1Para">
                                    <p>Improve retention, enhance</p>
                                    <p>workforce productivity, and</p>
                                    <p>reduce costs through</p>
                                    <p>customised HRO solutions.</p>
                                </div>
                                <div className="help__containerContent1Button" onClick={open1}>
                                    <Link to="#">
                                        Know More
                                        <ArrowForwardIcon/>
                                    </Link>
                                </div>
                            </div>
                            <div className="help__containerContent2">
                                <div className="help__containerContent2Heading">
                                    <h1>Opportunities</h1>
                                    <h1>for job seekers</h1>
                                </div>
                                <div className="help__containerContent2Para">
                                    <p>Search Job positions that</p>
                                    <p>match your skillsets and grab</p>
                                    <p>your next opportunity with</p>
                                    <p>Talent'd.</p>
                                </div>
                                <div className="help__containerContent2Button">
                                    <Link to="/jobs">
                                        Know More
                                        <ArrowForwardIcon/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="help__containerImage">
                        <img src="../../assets/image5.png" alt="image5" />
                    </div>
                </div>
            </div>

            {/* The Help Container Section Ends */}

            {/* The Talent Section Starts */}

            <div className="talent">
                <div className="talent__container">
                    <img src="../../assets/image6.png" alt="image6"/>
                    <div className="talent__containerBox" data-aos="fade-left">
                        <h1>TALENT SHORTAGE</h1>
                        <div className="talent__containerPara">
                            <p>Manpower giants such as China, India, Eastern</p>
                            <p>Europe, and parts of South America are also</p>
                            <p>grappling with critical talent shortages. Russia</p>
                            <p>alone faces an estimated reduction of appx. 20</p>
                            <p>million working age people by 2030.3</p>
                            <br/><br/>
                            <p>The UN anticipates that China’s working-age</p>
                            <p>population (those aged 15-59) will fall behind</p>
                            <p>Vietnam’s in 2020 and lag behind India and Brazil</p>
                            <p>in 2025.</p>
                            <br/><br/>
                            <h4>Source: PwC’s 23rd Annual Global CEO Survey 2020</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Talent Section Ends */}

            {/* The Journey Section Starts */}

            <div className="journey">
                <div className="journey__container">
                    <h1>Start Your Globalisation Journey with Talent'd</h1>
                    <div className="journey__containerPara">
                        <p>Join more than 8,000 users who have trusted Talent'd & WorldRef with</p>
                        <p>their globalisation initiatives.</p>
                    </div>
                    <Link onClick={open} to="#" data-aos="flip-up">
                        Get Talent'd
                    </Link>
                </div>
            </div>
            {/* The Journey Section Ends */}
            <Footer/>
        </div>
    )
}

export default Home
