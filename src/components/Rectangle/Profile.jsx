import React from 'react'
import Certified from "../../img/Certified.png";
import Point from "../../img/Icons/Point.png";
import Elon from '../../img/Profile/Avatar.png'
import Loc from '../../img/Icons/Location.png'
import Link from '../../img/Icons/Link.png'
import Calendar from '../../img/Icons/Calendar.png'
import RTLogo from '../../img/Icons/RTLogo.png'
import Twitter from '../../img/TwitterPoster.png'
import Comment from "../../img/Response/Comment.png";
import ReTweet from "../../img/Response/ReTweet.png";
import Like from "../../img/Response/Like.png";
import Views from "../../img/Response/Views.png";
import Response from '../../img/Icons/ResponseTweet.png'
import Edit from '../../img/Profile/EditProfile.png'
function Profile() {
    return (
        <>
            <div className="profile">
                <div className="imgBackground"></div>
                <div className="usersProfile">
                    <img src={Elon} alt="" className="PP"/>
                    <div className="pseudo">
                        <p className="Main">Max Fmz</p>
                        <img src={Certified} alt="" className="certified"/>
                        <p className="Second">@bymxfmz</p>
                    </div>
                    <img src={Edit} alt="" className="edit"/>
                </div>
                <div className="description">
                    <p>UX/UI Designer. Outdoor enthousiast. Coffee lover.</p>
                </div>
                <div className="usersInfos">
                    <div className="countries">
                        <img src={Loc} alt="" className="loc"/>
                        <p>Switzerland</p>
                    </div>
                    <div className="webSite">
                        <img src={Link} alt="" className="link"/>
                        <p>mfz.framer.website</p>
                    </div>
                    <div className="joinDate">
                        <img src={Calendar} alt="" className="calendar"/>
                        <p>Joined June 2023</p>
                    </div>
                    <div className="Follow">
                        <p><span className="strong">1.6M</span> Following </p>
                        <span className="PetitPoint"> • </span>
                        <p className="Followers"> <span className="strong"> 99 </span> Folowers</p>
                    </div>
                </div>
                <div className="button">
                    <button className="blue">Tweets</button>
                    <button>Replies</button>
                    <button>Media</button>
                    <button>Likes</button>
                </div>
                <div className="infosTweet">
                    <div className="reTweeted">
                        <img src={RTLogo} alt="" className="retweet"/>
                        <p>Max Fmz Retweeted</p>
                    </div>
                    <div className="firstInfos">
                        <div className="Images">
                            <img src={Twitter} alt=""/>
                        </div>
                        <div className="Poster">
                            <span className="strong">
                                Twitter
                                 <img src={Certified} alt="" className="Certi"/>
                            </span>
                            <span className="infos">
                                @Twitter •  9h
                            </span>
                            <span className="Point">
                                <button>
                                    <img src={Point} alt=""/>
                                </button>
                            </span>
                        </div>
                        <div className="TextPoster">
                            <div className="text">
                                <p>
                                    Say goodbye to prying eyes and hello to secure conversations.
                                    We're giving early access to Encrypted Direct Messages v1 to our verified users.
                                </p>
                            </div>
                            <div className="icons">
                                <img src={Comment} alt=""/>
                                <img src={ReTweet} alt=""/>
                                <img src={Like} alt=""/>
                                <img src={Views} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="separator2"></div>
                    <div className="infosTweet">
                        <div className="firstInfos">
                            <div className="Images">
                                <img src={Elon} alt=""/>
                            </div>
                            <div className="Poster">
                            <span className="strong">
                                Max Fmz
                                 <img src={Certified} alt="" className="Certi"/>
                            </span>
                                <span className="infos">
                                @Bymaxfmz •  10h
                            </span>
                                <span className="Point">
                                <button>
                                    <img src={Point} alt=""/>
                                </button>
                            </span>
                            </div>
                            <div className="TextPoster">
                                <div className="text">
                                    <p>
                                        What the future of Twitter could look like. Spatial Design is so much fun fr.
                                    </p>
                                </div>
                                <div className="icons">
                                    <img src={Response} alt="" className="resp"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="separator1"></div>
                    <div className="infosTweet">
                        <div className="twotInfos">
                            <div className="Images">
                                <img src={Elon} alt=""/>
                            </div>
                            <div className="Poster">
                                <span className="strong">
                                    Max Fmz
                                     <img src={Certified} alt="" className="Certi"/>
                                </span>
                                    <span className="infos">
                                    @Bymaxfmz •  10h
                                </span>
                                    <span className="Point">
                                    <button>
                                        <img src={Point} alt=""/>
                                    </button>
                                </span>
                            </div>
                            <div className="TextPoster">
                                <div className="text">
                                    <p>What the future of Twitter could look like. Spatial Design is so much fun fr. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
