import React from 'react'
import "./HelpingCard.css";


function HelpingCard({title1, title2, imgSrc}) {
    return (
        <div className="helping__card">
            <img src={imgSrc} alt="cardImage"/>
            <div className="helping__cardHeading">
                <h1>{title1}</h1>
                <h1>{title2}</h1>
            </div>
        </div>
    )
}

export default HelpingCard
