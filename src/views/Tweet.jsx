import React from 'react'
import Certified from '../img/Certified.png'
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
                </div>
                <div className="PostsTwo"></div>
            </div>

        </>
    );
}

export default Tweet;
