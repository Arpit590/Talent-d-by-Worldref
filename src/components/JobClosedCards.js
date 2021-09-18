import React from 'react'
import "./JobClosedCards.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';


function JobClosedCards({id, title, list1, list2, link}) {
    return (
        <div className="jobclosed__card">
            <h1 className="jobclosed__cardHeading">
                {title}
            </h1>
            <div className="jobclosed__cardLists">
                <h4>{`Location: ${list1}`}</h4>
                <h4>{`Industry: ${list2}`}</h4>
                <h4>{`Job ID: ${id}`}</h4>
            </div>
            <div className="jobclosed__cardButtons">
                <Link to={link} className="closed" target="_blank" rel="noreferrer">
                    CLOSED
                </Link>
                <a href="#" className="share">
                    <FacebookIcon/>
                    <p>Share</p>
                </a>
            </div>
        </div>
    )
}

export default JobClosedCards
