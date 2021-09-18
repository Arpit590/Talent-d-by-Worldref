import React, { useEffect } from 'react'
import "./GlobalDeputation.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "aos/dist/aos.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Aos from "aos";
import FormatQuote from '@material-ui/icons/FormatQuote';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';



function GlobalDeputation({open1}) {

    useEffect(()=>{
        Aos.init({duration: 2000})
    })
    return (
        <div className="global__deputation">
            <div className="global__deputationContainer">

                {/* The Global Deputation Section Starts */}
                <div className="global__deputationBox">
                    <div className="global__deputationBoxContent">
                        <div className="global__deputationBoxHeading">
                            <h1>Talent'd Global</h1>
                            <h1>Manpower Deputation</h1>
                            <h1>Services Made Global</h1>
                            <h1>Mobility - Simplified</h1>
                        </div>
                        <div className="global__deputationBoxPara">
                            <p>On Stop Global Platform to Cater to all Global</p>
                            <p>Manpower Deputation Needs.</p>
                        </div>
                        <div className="global__deputationCards">
                            <div className="global__deputationCardRow">
                                <div className="global__deputationCard">
                                    <h1>Flexible Staffing</h1>
                                    <div className="global__deputationCardPara">
                                        <p>Hire Temporary &</p>
                                        <p>Independent Contractors to</p>
                                        <p>Ease your International</p>
                                        <p>Project needs</p>
                                    </div>
                                    <div className="arrow" onClick={open1}>
                                        <ArrowDropDownIcon/>
                                    </div>
                                </div>
                                <div className="global__deputationCard">
                                    <h1>Fast & Quality Manpower</h1>
                                    <div className="global__deputationCardPara">
                                        <p>Well Trained & Experienced</p>
                                        <p>Workforce ready for On-Site</p>
                                        <p>Deputation.</p>
                                    </div>
                                    <div className="arrow" onClick={open1}>
                                        <ArrowDropDownIcon/>
                                    </div> 
                                </div>
                            </div>
                            <div className="global__deputationCardRow">
                                <div className="global__deputationCard">
                                    <h1>Reduce Costs</h1>
                                    <div className="global__deputationCardPara">
                                        <p>Minimise the cost of</p>
                                        <p>International Manpower</p>
                                        <p>Deputations by multiple folds</p>
                                    </div>
                                    <div className="arrow" onClick={open1}>
                                        <ArrowDropDownIcon/>
                                    </div>
                                </div>
                                <div className="global__deputationCard">
                                    <h1>Tailor-Made Solutions</h1>
                                    <div className="global__deputationCardPara">
                                        <p>Short-Term Requirement,</p>
                                        <p>Peak Project Demand or</p>
                                        <p>Unexpected Load Towards</p>
                                        <p>the End, We Cater to All.</p>
                                    </div>
                                    <div className="arrow" onClick={open1}>
                                        <ArrowDropDownIcon/>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="../../assets/deputation.jpg" alt="deputation"/>
                </div>
                {/* The Global Deputation Box Section Ends */}


                {/* The Focus Section Starts */}
                <div className="focus__container">
                    <div className="focus__heading">
                        <h1>Focus on Your Business, Leave Your Global</h1>
                        <h1>Manpower Deputation Worries to Us</h1>
                    </div>
                    <div className="focus__content">
                        <p>Navigate through the complexities of Global Manpower Deputation for</p>
                        <p>your Global Operations and International Projects with Talent'd.</p>
                    </div>
                </div>
                {/* The Focus Section Ends */} 

                {/* The Card Section Starts*/}
                <div className="global__deputationCardSection">
                    <div className="global__deputationCardContainer">
                        <img src="../../assets/deputationCard.png" alt="card"/>
                        <div className="global__deputationCardContent">
                            <h1>Work Permit Services</h1>
                            <div className="global__deputationCardParas">
                                <p>Reliable Work Permit and Business Visa Processing</p>
                                <p>Services across the globe, with no surprises,</p>
                                <p>smooth execution, and Timely Delivery</p>
                            </div>
                            <div className="global__deputationButton" onClick={open1}>
                                <p>Know More</p>
                                <ArrowForwardIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="global__deputationCardContainer">
                        <img src="../../assets/card1.png" alt="card"/>
                        <div className="global__deputationCardContent">
                            <h1>Local Sponsors</h1>
                            <div className="global__deputationCardParas">
                                <p>Business Beyond Border Made Simpler, Better,</p>
                                <p>and Efficient. Get Local Visa Sponsorship</p>
                                <p>Assistance Making International Deputation of</p>
                                <p>Manpower Cost Effective and Fast.</p>
                            </div>
                            <div className="global__deputationButton" onClick={open1}>
                                <p>Know More</p>
                                <ArrowForwardIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="global__deputationCardContainer">
                        <img src="../../assets/card-2.png" alt="card"/>
                        <div className="global__deputationCardContent">
                            <h1>Global Immigration</h1>
                            <h1 style={{marginTop: "-20px"}}>Policies & Compliances</h1>
                            <div className="global__deputationCardParas">
                                <p>Customised Immigration Solution to Reduce</p>
                                <p>Compliance Risk. Avoid Immigration Issues and</p>
                                <p>Stay Compliant with the Host Country Immigration</p>
                                <p>Laws.</p>
                            </div>
                            <div className="global__deputationButton" onClick={open1}>
                                <p>Know More</p>
                                <ArrowForwardIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* The Card Section Ends */}

                {/* The Text Container Starts */}

                <div className="text">
                    <div className="text__container">
                        <div className="text__containerIcon">
                            <FormatQuote/>
                        </div>
                        <div className="text__containerContent">
                            <p>"I have been working with these gentlemen quite long. Understanding of business,</p>
                            <p>complete transparency and their business style is quite impressive"</p>
                        </div>
                        <div className="text__containerText">
                            <h4><strong>Henri Kurli </strong>| PT Bagus Karya, Indonesia</h4>
                        </div>
                        <div className="text__containerImage1" data-aos="flip-up">
                            <img src="../../assets/bagus.png" alt="logo"/>
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
                    </div>
                </div>
                {/* The Cardbox Container Ends */}

                {/* The Image Container Starts */}
                <div className="imageContainer">
                    <div className="imageContainer1">
                        <div className="imageContainer1__image" data-aos="fade-right" style={{backgroundColor: "rgba(0,88,95,1)"}}>
                            <img src="../../assets/image4.png" alt="image4"/>
                        </div>
                        <div className="imageContainer1__content" data-aos="fade-left" style={{borderRadius: "0px"}}>
                            <FormatQuote/>
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
                                    <div className="help__containerContent1Button">
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
                                        <Link to="#">
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

                {/* The Shortage Section Starts */}
                
                <div className="shortage">
                    <div className="shortage__container">
                        <div className="shortage__box" data-aos="fade-right">
                            <h1>GREEN SHOOTS - 21</h1>
                            <div className="shortage__boxContent1">
                                <p>Hiring intentions improve since last quarter in 32</p>
                                <p>markets and remain the same in five: China, Hong</p>
                                <p>Kong, Austria, Hungary, Poland</p>
                            </div>
                            <div className="shortage__boxContent2">
                                <p>Employers in Europe are the least optimistic about a</p>
                                <p>return to pre-pandemic hiring levels with most</p>
                                <p>predicting this will be later than October 2021</p>
                                <p>Strongest hiring intentions in Taiwan, U.S. and</p>
                                <p>Singapore; weakest outlooks in Panama, U.K. and</p>
                                <p>Switzerland</p>
                            </div>
                            <p>Source: Manpower Group Employment Outlook (Global), Q1 2021</p>
                        </div>
                        <img src="../../assets/charles.png" alt="talent"/>
                    </div>
                </div>
                {/* The Shortage Section Ends */}

                {/* The Journey Section Starts */}

                <div className="journey" style={{backgroundColor:"rgba(6,48,48,1)" , flex: "1"}}>
                    <div className="journey__container">
                        <h1>Start Your Globalisation Journey with Talent'd</h1>
                        <div className="journey__containerPara">
                            <p>Connect with the right entity and optimise your International</p>
                            <p>Operations</p>
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

export default GlobalDeputation
