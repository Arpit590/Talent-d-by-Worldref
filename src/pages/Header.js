import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {

    const [click, setClick] = useState(false);
    const [language, setLanguage] = useState(false);

    const menuHandler=()=>{
        setClick(!click);
    }

    const closeMenuHandler=()=>{
        setClick(false);
    }

    return (
        <div className="header">
            <div className="header__left">
                <Link to="/" onClick={closeMenuHandler}>
                    <img src="../assets/Logo.png" 
                    alt=""
                    className="header__leftImage"/>
                </Link>
            </div>
            <div className="header__right">
                <div className="menu__container">
                    <div className="menu__icon" onClick={menuHandler}>
                        {click ? <CloseIcon className="close"/> : <MenuIcon className="open"/>}
                    </div>
                    <div className={click ? "menu active" : "menu"}>
                        <ul>
                            <li>
                                <NavLink to="/" activeClassName="active" 
                                onClick={closeMenuHandler} exact>
                                    Home
                                </NavLink>
                            </li>
                            <li className="dropdown">
                                <NavLink to="#" exact
                                >
                                    Services
                                </NavLink>
                                <div className="dropdown__menu">
                                    <ul>
                                        <li>
                                            <NavLink to="/global-recruitment-services" activeClassName="active" onClick={closeMenuHandler}>
                                                Global Recruitment Services
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/global-manpower-contracting-service" activeClassName="active" onClick={closeMenuHandler}>
                                                Global Manpower Contracting
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/global-manpower-deputation" activeClassName="active" onClick={closeMenuHandler}>
                                                Global Manpower Deputation
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <NavLink to="/industries" activeClassName="active" 
                                onClick={closeMenuHandler}>
                                    Industries
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/jobs" activeClassName="active" 
                                onClick={closeMenuHandler}>
                                    Jobs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact-us" activeClassName="active" 
                                onClick={closeMenuHandler}>
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <div className= "language" onClick={()=>setLanguage(!language)}>
                                        <img src="../assets/USA.png" className="language__image" alt="USA"/>
                                        <p className="language__text">EN</p>
                                        {language ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
