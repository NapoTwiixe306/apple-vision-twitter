import React from 'react'
import Certified from '../img/Certified.png'
import Comment from '../img/Response/Comment.png'
import ReTweet from '../img/Response/ReTweet.png'
import Like from '../img/Response/Like.png'
import Views from '../img/Response/Views.png'
function Tweet() {
    return (
        <>
            <div className="Tweet">
                <div className="PostsOne">
                    <div className="InfosPoster">
                        <div className="Images"></div>
                        <p className="Poster">
                            <span className="strong">
                                Twitter
                                 <img src={Certified} alt="" className="Certi"/>
                            </span>
                            <span className="infos">
                                @Twitter •  9h
                            </span>
                        </p>
                        <div className="sepa"></div>
                    </div>
                    <div className="TextPoster">
                        <div className="text">
                            <p>
                                Say goodbye to prying eyes and hello to secure conversations.
                                We're giving early access to Encrypted Direct Messages v1 to our verified users.
                            </p>
                        </div>
                    </div>
                    <div className="ResponsePoster">
                        <div className="Images"></div>
                        <div className="text">
                            <p>Show this Thread</p>
                        </div>
                    </div>
                    <div className="icons">
                        <img src={Comment} alt=""/>
                        <img src={ReTweet} alt=""/>
                        <img src={Like} alt=""/>
                        <img src={Views} alt=""/>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="PostsTwo">

                </div>
            </div>

        </>
    );
}

export default Tweet;
