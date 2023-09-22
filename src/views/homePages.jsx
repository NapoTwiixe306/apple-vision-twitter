import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMicrophone, faDownLeftAndUpRightToCenter, faCog} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Navbar from "../components/Navbar";

function HomePages() {
    return (
        <>
            <Navbar/>
            <div className="firstRectangle">
                <div className="firstRectangle_content">
                    <header className="header">
                        <section className="nav">
                            <div className="largeScreen">
                                <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} className="logo"/>
                            </div>
                            <div className="twitterLogo">
                                <FontAwesomeIcon icon={faTwitter} className="logo"/>
                            </div>
                            <div className="SearchContainer">
                                <input type="search" placeholder="Search on Twitter" className="Search" />
                                <FontAwesomeIcon icon={faMicrophone} size="1x" className="SearchIcon" />
                            </div>
                            <div className="Settings">
                                <FontAwesomeIcon icon={faCog}/>
                            </div>
                        </section>
                        <section className="tweet">
                            Tweet
                        </section>
                    </header>
                </div>
            </div>
        </>
    );
}

export default HomePages;
