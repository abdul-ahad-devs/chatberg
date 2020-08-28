import React from 'react';
import { Spring } from 'react-spring/renderprops';
import "../index.css";

export default function WelcomeToChatberg() {

    return(
        <Spring
            from={{ opacity: 0, marginTop: -100}}
            to={{  opacity:1, marginTop: 0 }}
        >
            {props => (
                <div style={props}>
                    <div className="welcome-style">
                        <h1 className="welcome-style">WELCOME TO CHATBERG</h1>
                        <h5 style={{ fontFamily: 'Arial'}}>Chatberg is an Omeagle based platform to entertain yourselves talking with strangers</h5>
                    </div>
                </div>
            )}
        </Spring>
    );
}


