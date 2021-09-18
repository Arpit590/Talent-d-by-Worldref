import React from 'react'
import "./JobDetailPage.css";
import RadioIcon from '@material-ui/icons/Radio';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PublicIcon from '@material-ui/icons/Public';
import ApartmentIcon from '@material-ui/icons/Apartment';
import SchoolIcon from '@material-ui/icons/School';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { Language } from '@material-ui/icons';
import Footer from "../components/Footer";

function JobDetailPage({open3}) {
    return (
        <div className="job__detail">
            <div className="job__detailContainer">
                <p>JOB ID : ID59843404</p>
                <div className="job__detailContainer1">
                    <div className="job__detailProfile">
                        <h1>Mechanical Erection Engineer</h1>
                        <div className="job__detailLists">
                            <div className="job__detailList">
                                <Language/>
                                <p>Semarang, Central Java, Indonesia</p>
                            </div>
                            <div className="job__detailList">
                                <ApartmentIcon/>
                                <p>Power Plant Project (Combined Cycle)</p>
                            </div>
                            <div className="job__detailList">
                                <BusinessCenterIcon/>
                                <p>10 - 15 Years</p>
                            </div>
                            <div className="job__detailList">
                                <SchoolIcon/>
                                <p>Graduate / BE / B Tech / Post Graduate in Mechanical or Electrical</p>
                            </div>
                            <div className="job__detailList">
                                <PublicIcon/>
                                <p>Only  Indonesian nationals are eligible</p>
                            </div>
                            <div className="job__detailList">
                                <AcUnitIcon/>
                                <p>English proficiency mandatory</p>
                            </div>
                            <div className="job__detailList">
                                <RadioIcon/>
                                <p>Salary as per market standard</p>
                            </div>
                        </div>
                        <div className="job__detailButton">
                            <button onClick={open3}>APPLY NOW</button>
                        </div>
                    </div>
                    <div className="job__detailRoles">
                        <h1>Job Roles & Responsibilities</h1>
                        <div className="job__detailRolesList">
                            <ul>
                                <li>
                                    <p>Coordinates and supervises mechanical erection activities of subcontractors in terms of safety, quality, schedule, compliance with specification, approved construction drawings, relevant codes and standard and completeness of scope</p>
                                </li>
                                <li>
                                    <p>Monitors and inspects mechanical erection activities in Engineer’s area of responsibility and develops and implements improvement measures when and where required.</p>
                                </li>
                                <li>
                                    <p>Coordinates with other disciplines to ensure there will be no internal scope gap.</p>
                                </li>
                                <li>
                                    <p>Checks, resolves and coordinates RFIs (Request for Information) issued by subcontractors for own area of responsibility.</p>
                                </li>
                                <li>
                                    <p>Identifies, analyzes and resolves technical issues in own area of responsibility including interfaces to other areas / disciplines.</p>
                                </li>
                                <li>
                                    <p>Checks, verifies and ensures that the drawings and other documents being used by mechanical erection subcontractors are the latest AFC (Approved for Construction) revision.</p>
                                </li>
                                <li>
                                    <p>Provides technical guidance to subcontractors in interpretation of drawings, procedures and other document relevant for mechanical erection activities.</p>
                                </li>
                                <li>
                                    <p>Evaluates suitability, efficiency and productivity of subcontractors’ erection equipment and work force.</p>
                                </li>
                                <li>
                                    <p>Analyzes and prepares plans for permanent material requisitions and coordinates with subcontractors accordingly.</p>
                                </li>
                                <li>
                                    <p>Coordinates the interfaces between subcontractors and Employer’s engineering and procurement team with the aim to ensure adherence to erection and project schedule.</p>
                                </li>
                                <li>
                                    <p>Assists subcontractors in preparing and updating site procedures and temporary drawings as required.</p>
                                </li>
                                <li>
                                    <p>Keeps track of and proper records for possible claim items.</p>
                                </li>
                                <li>
                                    <p>Drafts written correspondence for internal and external project correspondence.</p>
                                </li>
                                <li>
                                    <p>Prepares daily reports as well as input for internal and external progress reports.</p>
                                </li>
                                <li>
                                    <p>Performs any other tasks as delegated or requested by line or project superior.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="job__detailPosition">
                        <h1>Position Details</h1>
                        <ul>
                            <li>
                                <p><b>Industry Segment: </b>Thermal Power Plant</p>
                            </li>
                            <li>
                                <p><b>Reporting To: </b>Site Manager</p>
                            </li>
                            <li>
                                <p><b>Candidate Pre-Qualification: </b>Candidate should have worked on erection activities of a Thermal power plant having capacity more than 100 MW</p>
                            </li>
                            <li>
                                <p><b>Employment Type:</b> Contract</p>
                            </li>
                        </ul>
                        <button onClick={open3}>APPLY NOW</button>
                    </div>
                </div>
                <div className="job__background">
                    <h1>Employer Background</h1>
                    <div className="job__backgroundContent">
                        <p>Employer is a global conglomerate headquartered in Japan, involved in diverse range of business activities across wide-ranging fields including lifestyle, ICT & real estate business, forest products, food, agri business, chemicals, energy, metals & mineral resources, power business, infrastructure project, aerospace & ship, finance & leasing business, construction, industrial machinery & mobility, and next generation business development.</p>
                        <br/><br/>
                        <p>The employer has 11 Japan branches and offices, 58 overseas branches and offices, and 29 overseas corporate subsidiaries containing 37 branches and offices. Employee strength is 4,404 (Excluding 434 local employees of overseas branches and offices and 1,487 local employees of overseas corporate subsidiaries)</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default JobDetailPage
