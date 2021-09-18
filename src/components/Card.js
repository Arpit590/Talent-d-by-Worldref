import React from 'react'
import { Link} from 'react-router-dom';
import "./Card.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Bounce } from 'react-awesome-reveal';


function Card({heading1, heading2, imgSrc, contentline1, contentline2, contentline3, bgColor, link}) {

    return (
        <div className="card1" style={{backgroundColor: bgColor}}>
            <div className="card__imageContainer">
                <img className="card__image"
                src={imgSrc} alt="svg"/>
            </div>
            <div className="card__content">
                <div className="card__contentHeading">
                    <h1>{heading1}</h1>
                    <h1>{heading2}</h1>
                </div>
                <div className="card__contentPara">
                    <p>{contentline1}</p>
                    <p>{contentline2}</p>
                    <p>{contentline3}</p>
                </div>
                <div className="card__contentButton">
                    <Link to={link}>
                        <h3>Learn More</h3>
                        <Bounce duration={9000}>
                            <ArrowForwardIcon className="arrow"/>
                        </Bounce>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
