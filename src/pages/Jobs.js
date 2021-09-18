import React from 'react'
import "./Jobs.css";
import {Fade} from "react-awesome-reveal";
import JobCard from '../components/JobCard';
import { data } from '../data/jobdata';
import JobClosedCards from '../components/JobClosedCards';
import Footer from "../components/Footer";
import {closedData} from "../data/jobcloseddata";


function Jobs({open2}) {
    return (
        <div className="jobs">
            <div className="jobs__container">
                <div className="jobs__content">
                    <img src="../../assets/background1.png" alt="background"/>
                    <div className="jobs__contentContainer">
                        <div className="jobs__contentHeading">
                            <h1>Meet</h1>
                            <h1 style={{backgroundColor: "white", opacity:"1", color: "orangered", padding: "8px 8px 5px 5px", borderRadius:"10px"}}>Talent'd</h1>
                            <h1>Opportunity</h1>
                        </div>
                        <div className="jobs__contentPara">
                            <p>Explore positions we are hiring for on behalf</p>
                            <p>of our clients & apply for the job of your</p>
                            <p>interest. Alternatively, leave your resume</p>
                            <p>with us, and we will get back to you once we</p>
                            <p>have a job of your interest.</p>
                        </div>
                        <Fade duration={2000}>
                        <button className="jobs__contentContainerButton" onClick={open2}>Submit Resume</button>
                        </Fade>
                    </div>
                </div>
                <div className="jobs__lists">
                    <div className="jobs__open">
                        {data.map(({job__id, title, date, list1, list2, list3})=>(
                            <JobCard
                            key={job__id}
                            id={job__id}
                            date={date}
                            title={title}
                            list1={list1}
                            list2={list2}
                            list3={list3}
                            link={`/job-${job__id}-${title}`}
                            />
                        ))}
                    </div>
                    <h1>CLOSED JOBS</h1>
                    <div className="jobs__closed">
                        {closedData.map(({job__id, title, list1, list2})=>(
                            <JobClosedCards
                            key={job__id}
                            id={job__id}
                            title={title}
                            list1={list1}
                            list2={list2}
                            link={`/jobclosed-${job__id}-${title}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Jobs
