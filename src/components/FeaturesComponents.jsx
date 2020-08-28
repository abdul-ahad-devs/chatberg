import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import "../App.css";
import { bounceInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounceInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounceInLeft, 'bounce')
    },
}

const FeaturesPage = () => {

    return(
        <div style={{ margin: '20px'}} id="features">

            <StyleRoot style={styles.bounceInLeft}>
                <Card className="features-card-color ">
                    <CardHeader className="card-header features-card-color text-center">
                        Features
                    </CardHeader>
                    <CardBody className="card-body text-center">
                        <div className="features-styles">
                            <h5> <i className="fa fa-tags fa-lg icon-color fa-cog" style={{ marginRight: '5px'}}></i>Interest Matching System</h5>
                        </div>
                        <div className="features-styles">
                            <h5> <i className="fa fa-comments fa-lg fa-cog" style={{ marginRight: '5px'}}></i>1 on 1 Text Chat mode</h5>
                        </div>
                        <div className="features-styles">
                            <h5> <i className="fa fa-users fa-lg fa-cog" style={{ marginRight: '5px'}}></i> Group chat mode</h5> 
                        </div>
                        <div className="features-styles">
                            <h5> <i className="fa fa-paper-plane fa-lg fa-cog" style={{ marginRight: '5px'}}></i> Great for making new friends</h5>
                        </div>
                        <div className="features-styles">
                            <h5> <i className="fa fa-life-ring fa-lg fa-cog" style={{ marginRight: '5px'}}></i> Full time moderation and support</h5>
                        </div>
                        <div className="features-styles">
                            <h5> <i className="fa fa-bolt fa-lg fa-cog" style={{ marginRight: '5px'}}></i>Lightweight and Lightning fast</h5>
                        </div>
                        <div className="features-styles">
                            <h5> <i className="fa fa-cogs fa-lg fa-cog" style={{ marginRight: '5px'}}></i> Customizable</h5>
                        </div>
                        <div className="features-styles">
                            <h5> <i className="fa fa-mobile fa-lg fa-cog" style={{ marginRight: '5px'}}></i> Works great on mobile</h5>
                        </div>
                        <div className="features-styles">
                            <h5> <i className="fa fa-gift fa-lg fa-cog" style={{ marginRight: '5px'}}></i> Frequent updates</h5>
                        </div>
                    
                    </CardBody>
                
                </Card>
            </StyleRoot>

        </div>
    );
}

export default FeaturesPage;