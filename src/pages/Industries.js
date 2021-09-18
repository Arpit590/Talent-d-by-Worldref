import React, { useEffect } from 'react'
import "./Industries.css";
import Footer from "../components/Footer";
import "aos/dist/aos.css";
import Aos from "aos";

function Industries({open1}) {

    useEffect(()=>{
        Aos.init({duration:2000})
    })

    return (
        <div className="industries">
            <div className="industries__container">
                <div className="industries__content">
                    <div className="industries__contentContainer">
                        <div className="industries__contentHeading">
                            <h1>Serving clients from</h1>
                            <h1>45+ industries</h1>
                        </div>
                        <hr/>
                        <div className="industries__contentLists">
                            <div className="industries__contentList1">
                                <ul>
                                    <li>Thermal Power & Cogen</li>
                                    <li>Construction & Infrastructure</li>
                                    <li>Cement Plants</li>
                                    <li>Material Handling</li>
                                    <li>Agriculture & Agro Processing</li>
                                    <li>Pulp & Paper</li>
                                    <li>Sugar & Bioethanol</li>
                                    <li>Oil, Gas & Petrochemicals</li>
                                    <li>Food & Beverage</li>
                                    <li>Air Pollution Control</li>
                                    <li>Steel & Metal Processing</li>
                                    <li>Water & Waste Water Treatment</li>
                                    <li>Plastic, Glass & Ceramics</li>
                                    <li>Technical Consulting</li>
                                </ul>
                            </div>
                            <div className="industries__contentList2">
                                <ul>
                                    <li>Pharmaceuticals</li>
                                    <li>Boilers & Heating Solutions</li>
                                    <li>Hydro Power</li>
                                    <li>Industrial Chemicals</li>
                                    <li>Industrial Tools & Hardware</li>
                                    <li>Turbine, Generator & Auxiliaries</li>
                                    <li>Testing & Analysis</li>
                                    <li>Control & Instrumentation</li>
                                    <li>Solar Power</li>
                                    <li>Electrical Systems</li>
                                    <li>Piping Systems</li>
                                    <li>Information Technology</li>
                                    <li>Energy Audits</li>
                                    <li>QA - QC - Third Party Inspection</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="industries__contentInfo">
                        <div className="industries__contentInfoHeading">
                            <h1>Interested to</h1>
                            <h1>know more?</h1>
                        </div>
                        <button data-aos="zoom-in" onClick={open1}>Talk to us</button>
                    </div>
                </div>
                <div className="industries__image" data-aos="fade-left">
                    <img src="../../assets/industries.png" alt="industries"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Industries
