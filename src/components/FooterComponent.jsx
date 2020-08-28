import React from 'react';
import '../App.css';
import {SocialMediaIconsReact} from 'social-media-icons-react';

const Footer = () => {
    return(
        <div className="footer ">
            
            <div className="col-12 col-sm-4 m-auto">
                
                <div className="row">
                    <div className="col-3 col-sm-3">
                        <SocialMediaIconsReact 
                            icon="github" 
                            url="https://github.com/"
                            iconSize={10}
                            size={40}
                            iconColor="#303243"
                            backgroundColor="#00cc6a"
                            borderColor="#00cc6a"
                        />
                    </div>

                    <div className="col-3 col-sm-3">
                        <SocialMediaIconsReact 
                            icon="facebook" 
                            url="https://facebook.com"
                            iconSize={10}
                            size={40}
                            iconColor="#303243"
                            backgroundColor="#00cc6a"
                            borderColor="#00cc6a"
                        />
                    </div>

                    <div className="col-3 col-sm-3">
                        <SocialMediaIconsReact 
                            icon="linkedin" 
                            url="https://linkedin.com/"
                            iconSize={10}
                            size={40}
                            iconColor="#303243"
                            backgroundColor="#00cc6a"
                            borderColor="#00cc6a"
                        />
                    </div>

                    <div className="col-3 col-sm-3">
                        <SocialMediaIconsReact 
                            icon="twitter" 
                            url="https://twitter.com/"
                            iconSize={10}
                            size={40}
                            iconColor="#303243"
                            backgroundColor="#00cc6a"
                            borderColor="#00cc6a"
                        />
                    </div>
                    
                    
                </div>
            </div>
            
            <div className="row justify-content-center mt-20">             
                <div style={{ marginTop: '20px'}}>
                    <p>© Copyright 2020 by Chatberg</p>
                </div>
            </div>
        
         </div>
    );
}

export default Footer;