import React from 'react'

import Home from '../img/IconsNavb/Home.png'
import Search from '../img/IconsNavb/Search.png'
import Bell from '../img/IconsNavb/Bell.png'
import Messages from '../img/IconsNavb/Messages.png'
import Favorites from '../img/IconsNavb/Favorites.png'
import Settings from '../img/IconsNavb/Settings.png'

function Navbar() {
    return (
        <>
            <div className="Navbar">
                <div className="Navbar_content">
                    <div className="Home">
                        <img src={Home} alt=""/>
                        <p>Home</p>
                    </div>
                    <div className="Search">
                        <img src={Search} alt=""/>
                        <p>Search</p>
                    </div>
                    <div className="Bell">
                        <img src={Bell} alt=""/>
                        <p>Bell</p>
                    </div>
                    <div className="Message">
                        <img src={Messages} alt=""/>
                        <p>Message</p>
                    </div>
                    <div className="Favorites">
                        <img src={Favorites} alt=""/>
                        <p>Favorites</p>
                    </div>
                    <div className="Settings">
                        <img src={Settings} alt=""/>
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
