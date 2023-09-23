import React from 'react'
import Certified from "../../img/Button.png";
import Point from "../../img/Icons/Point.png";
function Suggestion() {
    return (
        <>
            <div className="Suggestion">
                <div className="Intro">
                    <div className="textIntro">
                        <h2>Get Verified</h2>
                        <p>Subscribe to unlock new features.</p>
                    </div>
                    <div className="button">
                        <img src={Certified} alt=""/>
                    </div>
                </div>
                <div className="separator2"></div>
                <div className="Trends">
                    <h2>Trends For You</h2>
                    <div className="elements">
                        <div className="Twitter">
                            <p>Tech • Trending</p>
                            <h3>#Twitter</h3>
                            <p>1.97M Tweets</p>
                            <span className="Point">
                                <button>
                                    <img src={Point} alt=""/>
                                </button>
                            </span>
                        </div>
                        <div className="Twitter">
                            <p>Tech • Trending</p>
                            <h3>#Apple</h3>
                            <p>1.97M Tweets</p>
                            <span className="Point">
                                <button>
                                    <img src={Point} alt=""/>
                                </button>
                            </span>
                        </div>
                        <div className="Twitter">
                            <p>Tech • Trending</p>
                            <h3>#Vision Pro</h3>
                            <p>1.97M Tweets</p>
                            <span className="Point">
                                <button>
                                    <img src={Point} alt=""/>
                                </button>
                            </span>
                        </div>
                        <div className="Twitter">
                            <p>Tech • Trending</p>
                            <h3>#UX/UI</h3>
                            <p>1.97M Tweets</p>
                            <span className="Point">
                                <button>
                                    <img src={Point} alt=""/>
                                </button>
                            </span>
                        </div>
                        <div className="Twitter">
                            <p>Tech • Trending</p>
                            <h3>#Design</h3>
                            <p>1.97M Tweets</p>
                            <span className="Point">
                                <button>
                                    <img src={Point} alt=""/>
                                </button>
                            </span>
                        </div>
                        <div className="Twitter">
                            <p>Tech • Trending</p>
                            <h3>#Twitter</h3>
                            <p>1.97M Tweets</p>
                            <span className="Point">
                                <button>
                                    <img src={Point} alt=""/>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Suggestion;
