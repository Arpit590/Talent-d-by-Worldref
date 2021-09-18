import React, { useEffect} from 'react'
import "./GlobalRecruitment.css";
import {Fade} from "react-awesome-reveal";
import GlobalCard from '../components/GlobalCard';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "aos/dist/aos.css"
import Aos from "aos";
import { Avatar, IconButton } from '@material-ui/core';
import HelpingCard from '../components/HelpingCard';
import Footer from '../components/Footer';


function GlobalRecruitmentPage({open, open1}) {

    useEffect(()=>{
        Aos.init({duration:2000})
    })

    return (
        <div className="global">
            <div className="global__container">

                {/* The Global Box Container Starts */}
                <div className="global__BoxContainer">
                    <div className="global__Box">
                        <div className="global__BoxHeading">
                            <h1>Global recruitment</h1>
                            <h1>made easy</h1>
                        </div>
                        <div className="global__BoxContent">
                            <p>Simpler, Cheaper & Faster to acquire talent across 20</p>
                            <p>leading economies across Asia. Give your</p>
                            <p>international a boost with Talent'd global</p>
                            <p>recruitment services.</p>
                        </div>
                        <Fade duration={3000}>
                        <button className="global__BoxButton" onClick={open}>Get Talent'd</button>
                        </Fade>
                    </div>
                </div>
                {/* The Global Box Container Ends */}
                
                {/* The Global Heading Section Starts */}
                <div className="global__HeadingContainer">
                    <div className="global__Heading">
                        <h1>You focus on your business</h1>
                        <h1>expansion, while we handle</h1>
                        <h1>global recruitment for you.</h1>
                    </div>
                    <div className="global__Content">
                        <p>while focusing on your business as well as looking for talented</p>
                        <p>manpower recruitment to grow your teams in new markets globally can</p>
                        <p>be a challenge, that’s where <b>Talent'd</b> help.</p>
                        <p>Using our network in <b>45+ countries</b>, our global talent acquisition</p>
                        <p>experts can help you hire the right talent at right time.</p>
                    </div>
                </div>
                {/* The Global Heading Section Ends */}

                {/* The Global Cards Section Starts */}
                <div className="global__cards">
                    <GlobalCard
                    title1="Globally Localised"
                    title2="Recruitment"
                    list1="Customised recruitment services for your"
                    list2="international business or projects, delivered"
                    list3="through a global network of local & reliable"
                    list4="manpower agencies"
                    imgSrc="../../assets/SVG2.svg"
                    />
                    <GlobalCard
                    title1="C-Suite Executive"
                    title2="Hiring"
                    list1="Our C-Suite executive recruiters are true"
                    list2="headhunters who operate confidentially "
                    list3="with a focus on finding top-tier candidates"
                    list4=" with the drive, knowledge & ambition to lead the organisation to a better tomorrow."
                    imgSrc="../../assets/SVG1.svg"
                    />
                    <GlobalCard
                    title1="Flexible Staffing"
                    title2="Solutions"
                    list1="Talent'd specialise in providing tailored"
                    list2=" solutions for International Businesses in"
                    list3=" recruitment and retaining the brightest"
                    list4="minds across the globe"
                    imgSrc="../../assets/SVG3.svg"
                    />
                </div>

                {/* The Global Cards Container Ends */}

                {/* The Global Quote Section Starts */}
                <div className="global__quote">
                    <div className="global__quoteContainer">
                        <div className="global__quoteIcon">
                            <FormatQuoteIcon/>
                        </div>
                        <div className="global__quoteContent">
                            <p>"WorldRef Team has always helped me out with the urgent requirements.</p>
                            <p>The team understands the 'Internationally-local' business requirements"</p>
                        </div>
                        <p>Shailesh Bade | Metito Pollution Control India Private Limited, India</p>
                        <img src="../../assets/metito.png" alt="logo"/>
                    </div>
                </div>
                {/* The Global Quote Section Ends */}

                {/* The Global Help Section Starts */}
                <div className="global__help">
                    <div className="global__helpContainer">
                        <div className="global__helpContent">
                            <div className="global__helpHeading">
                                <h1>Get The Help You Need,</h1>
                                <h1>Every Step of The Way.</h1>
                            </div>
                            <div className="global__helpContentContainer">
                                <div className="global__helpContent1">
                                    <div className="global__helpContent1Heading">
                                        <h1>C - Suite</h1>
                                        <h1>Executives</h1>
                                    </div>
                                    <div className="global__helpContent1Para">
                                        <p>Talent'd offers a perfect</p>
                                        <p>solution to identify people</p>
                                        <p>whose drive & ambition can</p>
                                        <p>help transform International</p>
                                        <p>Market</p>
                                    </div>
                                    <div className="global__helpButton" onClick={open1}>
                                        <p>Know More</p>
                                        <ArrowForwardIcon/>
                                    </div>
                                </div>
                                <div className="global__helpContent1">
                                    <div className="global__helpContent1Heading">
                                        <h1>Opportunities</h1>
                                        <h1>for job seekers</h1>
                                    </div>
                                    <div className="global__helpContent1Para">
                                        <p>Search Job positions that</p>
                                        <p>match your skillsets and</p>
                                        <p>grab your next opportunity</p>
                                        <p>with Talent'd.</p>
                                        <p style={{color: "transparent"}}>.</p>
                                    </div>
                                    <Link to="/jobs" className="global__helpButton">
                                        <p>Jobs</p>
                                        <ArrowForwardIcon/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="global__helpImage">
                            <img src="../../assets/Image1.png" alt="Image1"/>
                        </div>
                    </div>
                </div>
                {/* The Global Help Section Ends */}

                {/* The Talent Global Box Section Starts */}
                <div className="talent__globalBox">
                    <div className="talent__globalBoxContainer">
                        <div className="talent__globalBoxHeadingContainer">
                            <h1>Talent'd Global Recruitment Process</h1>
                            <div className="talent__globalBoxPara">
                                <p>An optimized recruitment process, you will enjoy reduced employee</p>
                                <p>turnover and lower costs associated with hiring and on-boarding while</p>
                                <p>building the foundation that is necessary for your organization’s success.</p>
                            </div>
                        </div>
                        <div className="talent__globalBoxChart">
                            <div className="talent__globalBoxChartHeadingContainer">
                                <div className="talent__globalBoxChartHeading">
                                    <div className="talent__globalh4">
                                        <h4>Technical &</h4>
                                        <h4>Cultural Discovery</h4>
                                    </div>
                                    <ArrowForwardIosIcon/>
                                </div>
                                <div className="talent__globalBoxChartHeading">
                                    <div className="talent__globalh4">
                                        <h4>Candidate</h4>
                                        <h4>Sourcing</h4>
                                    </div>
                                    <ArrowForwardIosIcon/>
                                </div>
                                <div className="talent__globalBoxChartHeading">
                                    <div className="talent__globalh4">
                                        <h4>Candidate</h4>
                                        <h4>Screening</h4>
                                    </div>
                                    <ArrowForwardIosIcon/>
                                </div>
                                <div className="talent__globalBoxChartHeading">
                                    <div className="talent__globalh4">
                                        <h4>Final Interview</h4>
                                        <h4>& Placement</h4>
                                    </div>
                                    <ArrowForwardIosIcon/>
                                </div>
                                <div className="talent__globalBoxChartHeading">
                                    <div className="talent__globalh4">
                                        <h4>30-60-90 Day</h4>
                                        <h4>Review</h4>
                                    </div>
                                    <ArrowForwardIosIcon/>
                                </div>
                            </div>
                            <div className="talent__globalFlowChart">
                                <div className="talent__globalFlowChartContainer">
                                    <div className="talent__globalFlowChartContent">
                                        <p>Understanding you</p>
                                        <p>needs, goals and</p>
                                        <p>technical</p>
                                        <p>challenges.</p>
                                    </div>
                                    <div className="talent__globalFlowChartContent">
                                        <p>Source suitable</p>
                                        <p>candidates from a</p>
                                        <p>number of diverse</p>
                                        <p>platforms.</p>
                                    </div>
                                    <div className="talent__globalFlowChartContent">
                                        <p>Candidates are</p>
                                        <p>screened by our</p>
                                        <p>recruiters vide face to</p>
                                        <p>face interviews or</p>
                                        <p>video conferencing.</p>
                                    </div>
                                    <div className="talent__globalFlowChartContent">
                                        <p>Talent'd coordinates</p>
                                        <p>Interviews of screened</p>
                                        <p>and approved</p>
                                        <p>candidates by the</p>
                                        <p>employer, followed by</p>
                                        <p>placement formalities.</p>
                                    </div>
                                    <div className="talent__globalFlowChartContent">
                                        <p>Talent'd  follows up</p>
                                        <p>after 30, 60 and 90</p>
                                        <p>days to ensure</p>
                                        <p>successful</p>
                                        <p>placement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="../../assets/pointing.svg" alt="Svg" data-aos="fade-up"/>
                    </div>
                </div>
                {/* The Talent Global Section Ends */}

                {/* The Mobility Section Starts */}

                <div className="mobility">
                    <img src="../../assets/business.png" alt="business" data-aos="fade-up"/>
                    <div className="mobility__content">
                        <div className="mobility__contentHeading">
                            <h1>GLOBAL TALENT</h1>
                            <h1>MOBILITY</h1>
                        </div>
                        <div className="mobility__contentPara">
                            <p>A significant majority 80% of the millennials</p>
                            <p>surveyed want to work overseas, with 70%</p>
                            <p>expecting to use non-native languages in</p>
                            <p>their careers and 94% stating they believe</p>
                            <p>they will work across geographic borders</p>
                            <p>more than their parents did.</p>
                        </div>
                        <div className="mobility__contentInfo">
                            <p>Source: Talent Mobility 2020 - The next generation of international</p>
                            <p>assignments, PwC</p>
                        </div>
                    </div>
                </div>
                {/* The Mobility Section Ends */}

                {/* The International Section Starts */}
                <div className="international">
                    <div className="international__container">
                        <div className="international__heading">
                            <h1>Making Manpower Deputations</h1>
                            <h1>Hassle Free</h1>
                        </div>
                        <div className="international__card">
                            <div className="international__cardContent">
                                <div className="international__cardHeading">
                                    <h1>International</h1>
                                    <h1>Deputation Services</h1>
                                </div>
                                <div className="international__cardPara">
                                    <p>Talent'd provide customized solutions</p>
                                    <p>based on client demands. Be it project-</p>
                                    <p>based demands, turnkey basis, short-term</p>
                                    <p>demands for project peak periods, expected</p>
                                    <p>/ unexpected load, or towards the end of</p>
                                    <p>commissioning we encompass solutions for</p>
                                    <p>all.</p>
                                </div>
                                <Link to="/global-manpower-deputation" className="international__cardButton">
                                    <p>Learn More</p>
                                    <ArrowForwardIcon/>
                                </Link>
                            </div>
                            <div className="international__cardImage">
                                <img src="../../assets/international.jpeg" alt="international"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* The International Section Ends */}

                {/* The Profile Section Start */}
                <div className="profile__container">
                    <div className="profile">
                        <IconButton>
                            <Avatar
                            src="../../assets/avatar-1.png"
                            className="avatar"
                            alt="Avatar-1"
                            />
                        </IconButton>
                        <div className="profile__content">
                            <FormatQuoteIcon/>
                            <div className="profile__contentPara">
                                <p>I have worked with Talent'd by</p>
                                <p>WorldRef in Manpower domain,</p>
                                <p>their efforts and business dealing is</p>
                                <p>quite professional.</p>
                            </div>
                            <div className="profile__contentInfo">
                                <p>Mohamad Noer, CEO | PT Haman Energy,</p>
                                <p>Indonesia</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <IconButton>
                            <Avatar
                            src="../../assets/avatar-2.png"
                            className="avatar"
                            alt="Avatar-2"
                            />
                        </IconButton>
                        <div className="profile__content">
                            <FormatQuoteIcon/>
                            <div className="profile__contentPara">
                                <p>We have worked with Talent'd by</p>
                                <p>WorldRef in Testing and Manpower</p>
                                <p>domain, and it has been a</p>
                                <p>wonderful and professional</p>
                                <p>experience working with them.</p>
                                <p>Their team is hardworking and</p>
                                <p>focused.</p>
                            </div>
                            <div className="profile__contentInfo">
                                <p>Rizky Habibie | PT Krakatau Daya Listrik</p>
                                <p>Indonesia</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <IconButton>
                            <Avatar
                            src="../../assets/avatar-3.png"
                            className="avatar"
                            alt="Avatar-3"
                            />
                        </IconButton>
                        <div className="profile__content">
                            <FormatQuoteIcon/>
                            <div className="profile__contentPara">
                                <p>We have been working with</p>
                                <p>WorldRef for multiple segments.</p>
                                <p>Their relation-building is</p>
                                <p>praiseworthy.</p>
                            </div>
                            <div className="profile__contentInfo">
                                <p>Pranav Ambaselkar, Director | EPES</p>
                                <p>Thermorub, India</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* The Profile Section Ends */}

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
            </div>
            <Footer/>
        </div>
    )
}

export default GlobalRecruitmentPage
