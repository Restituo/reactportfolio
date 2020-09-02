import React from 'react';
import photo from "../../Visuals/Me.png";
import "./AboutMe.css";

const AboutMe = () =>{
    return (
        <div id="about-me">
            <div data-aos="fade-up" className="container">
                <div className="title">
                    <h2>About Me</h2>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div id="photo">
                            <img className="photo" src={photo} alt="pic"/>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="description">
                            <p>
                                My name is Richard and I'm a full-stack software engineer with a background in Chemical Engineering and Chemistry and a life-long dedication to learning. 
                                I enjoy building effective and efficient programs that basically make life easier using Javascript and React.
                                Dedicating to combining the beauty of design with the logical perfection of coding.
                                <br/><br/>
                                Let's <a className="colorM" style={{ textDecoration: 'none' }} href="#connect">connect</a>!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;