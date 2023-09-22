import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMicrophone, faUpRightAndDownLeftFromCenter, faCog} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Navbar from "../components/Navbar";

import Images from '../img/Icons/image.png'
import Videos from '../img/Icons/videos.png'
import Menu from '../img/Icons/Menu$.png'
import Emoji from '../img/Icons/Emoji.png'
import Calendar from '../img/Icons/Calendar.png'
import Send from '../img/Icons/Send.png'
import Tweet from "./Tweet";
function Header() {

    return (
        <>
            <Navbar/>
            <div className="firstRectangle">
                <div className="firstRectangle_content">
                    <header className="header">
                        <section className="nav">
                            <div className="largeScreen">
                                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className="logo"/>
                            </div>
                            <div className="twitterLogo">
                                <FontAwesomeIcon icon={faTwitter} className="logo"/>
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
                                <FontAwesomeIcon icon={faCog}/>
                            </div>
                        </section>
                        <section className="tweet">
                            <div className="Profile">
                                {/*<FontAwesomeIcon icon={faTwitter} className="logo"/>*/}
                            </div>
                            <div className="input">
                                <input
                                    type="search"
                                    placeholder="What is happening ?"
                                    className="WhatHappening"
                                />
                                <FontAwesomeIcon icon={faMicrophone} size="1x" className="SearchIcon" />

                            </div>
                            <div className="icons">
                                <img src={Images} alt=""/>
                                <img src={Videos} alt=""/>
                                <img src={Menu} alt=""/>
                                <img src={Emoji} alt=""/>
                                <img src={Calendar} alt=""/>
                                <img src={Send} alt=""/>
                            </div>
                        </section>
                        <div className="separator"></div>

                    </header>
                    <Tweet/>

                </div>
            </div>
        </>
    );
}

export default Header;
