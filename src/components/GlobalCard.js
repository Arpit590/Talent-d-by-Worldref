import React from 'react'
import "./GlobalCard.css";


function GlobalCard({title1, title2, list1, list2, list3, list4, imgSrc}) {
    return (
        <div className="globalcard">
            <div className="globalcard__container">
                <div className="globalcard__contentContainer">
                    <div className="globalcard__heading">
                        <h1>{title1}</h1>
                        <h1>{title2}</h1>
                    </div>
                    <div className="globalcard__content">
                        <p>{list1}</p>
                        <p>{list2}</p>
                        <p>{list3}</p>
                        <p>{list4}</p>
                    </div>
                </div>
                <img src={imgSrc} alt="svg"/>
            </div>
        </div>
    )
}

export default GlobalCard
