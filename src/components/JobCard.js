import React, { useState } from 'react'
import "./JobCard.css";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DraftsIcon from '@material-ui/icons/Drafts';
import PublicIcon from '@material-ui/icons/Public';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { Link } from 'react-router-dom';

function JobCard({id, date, title ,list1, list2, list3,link}) {

    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);

    return (
        <div className="jobcard">
            <div className="jobcard__heading">
                <h4>{`Job ID: ${id}`}</h4>
                <h4>{`Date: ${date}`}</h4>
            </div>
            <h2>{title}</h2>
            <div className="jobcard__lists">
                <div className="jobcard__list">
                    <div className="jobcard__icons" onClick={()=>setState1(!state1)}>
                        {state1 ? <DraftsIcon className="envelope"/>:
                        <PublicIcon className="earth"/>}
                    </div>
                    <p>{list1}</p>
                </div>
                <div className="jobcard__list">
                    <div className="jobcard__icons" onClick={()=>setState2(!state2)}>
                        {state2 ? <DraftsIcon className="envelope"/> :
                        <ApartmentIcon className="earth"/>}
                    </div>
                    <p>{list2}</p>
                </div>
                <div className="jobcard__list">
                    <div className="jobcard__icons" onClick={()=>setState3(!state3)}>
                        { state3?<DraftsIcon className="envelope"/>:
                        <BusinessCenterIcon className="earth"/>}
                    </div>
                    <p>{list3}</p>
                </div>
            </div>
            <Link to={link} target="_blank" rel="noreferrer">
                <button>SEE DETAILS</button>
            </Link>
        </div>
    )
}

export default JobCard
