import React from 'react';
import {NavLink} from 'react-router-dom';
import spotify from '../../images/spotify.png';
import giphy from '../../images/giphy.png';

const Home = props => {
    return (
        <div className="home">
            <header className="home__header">
                <h2>Devcenter application</h2>
            </header>
            <div className="home__hero">
                <div className="home__hero-content">
                    <div className="into-text">
                        <h2>Welcome to my devcenter application solutions</h2>
                        <p>Select the application you are interested in below</p>
                    </div>
                    <div className="app-solutions">
                        <div className="solution">
                            <NavLink to="/spotify">
                                <div className="solution__container solution__spotify">
                                    <div className="solution__image">
                                        <img src={spotify} alt="spotify logo"/>
                                    </div>
                                    <div className="solution__name">
                                        <h6>Spotify app</h6>
                                        <p>Given any particular artist, get their first 10 related artists and list
                                            their similar top songs.</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="solution">
                            <NavLink to="/giphy">
                                <div className="solution__container solution__giphy">
                                    <div className="solution__image">
                                        <img src={giphy} alt="giphy logo"/>
                                    </div>
                                    <div className="solution__name">
                                        <h6>Giphy app</h6>
                                        <p>Write a chat input that takes a command, converts the ensuing string into a
                                            gif and adds it to the conversation.</p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;