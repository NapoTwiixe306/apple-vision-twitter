import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faUpRightAndDownLeftFromCenter, faDownLeftAndUpRightToCenter, faCog } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Images from '../img/Icons/image.png';
import Videos from '../img/Icons/videos.png';
import Menu from '../img/Icons/Menu$.png';
import Emoji from '../img/Icons/Emoji.png';
import Calendar from '../img/Icons/Calendar.png';
import Send from '../img/Icons/Send.png';
import Tweet from "./Tweet";
import Presentation from "./Presentation";
import Suggestion from '../components/Rectangle/Suggestion';
import Profile from '../components/Rectangle/Profile';
import Navbar from "../components/Navbar";
function Header() {
    const [showComponents, setShowComponents] = useState(false);

    const toggleComponents = () => {
        setShowComponents(!showComponents);
    };

    const icon = showComponents ? faUpRightAndDownLeftFromCenter : faDownLeftAndUpRightToCenter;

    const shouldShowNavbar = !showComponents;

    return (
        <>
            {shouldShowNavbar && <Navbar />}
            <div className={`firstRectangle${showComponents ? ' open' : ''}`}>
                <div className="firstRectangle_content">
                    <header className="header">
                        <section className="nav">
                            <div className="largeScreen">
                                <FontAwesomeIcon icon={icon} className="logo" onClick={toggleComponents} />
                            </div>
                            <div className="twitterLogo">
                                <FontAwesomeIcon icon={faTwitter} className="logo" />
                            </div>
                            <div className="SearchContainer">
                                <input
                                    type="search"
                                    placeholder="Search on Twitter"
                                    className="Search"
                                />
                                <FontAwesomeIcon icon={faMicrophone} size="1x" className="SearchIcon" />
                            </div>
                            <div className="Settings">
                                <FontAwesomeIcon icon={faCog} />
                            </div>
                        </section>
                        <section className="tweet">
                            <div className="Profile"></div>
                            <div className="input">
                                <input
                                    type="search"
                                    placeholder="What is happening ?"
                                    className="WhatHappening"
                                />
                                <FontAwesomeIcon icon={faMicrophone} size="1x" className="SearchIcon" />
                            </div>
                            <div className="icons">
                                <img src={Images} alt="" />
                                <img src={Videos} alt="" />
                                <img src={Menu} alt="" />
                                <img src={Emoji} alt="" />
                                <img src={Calendar} alt="" />
                                <img src={Send} alt="" />
                            </div>
                        </section>
                        <div className="separator"></div>
                    </header>
                    <Presentation />
                    <Tweet />
                </div>
            </div>
            {showComponents && (
                <div className="components-container">
                    <Suggestion />
                    <Profile />
                </div>
            )}
        </>
    );
}

export default Header;
