import React from 'react';
import { Card, CardHeader, CardBody, CardText, Row } from 'reactstrap';
import logo from '../logo.png';
import { FaRobot} from 'react-icons/fa';
import { bounceInLeft, bounceIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounceInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounceInLeft, 'bounce')
    },

    bounceIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceIn, 'bounce')
    }
  }

class OurMissionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            animateIt: false
        }

        this.doAnimation = this.doAnimation.bind(this);
    }
    
    doAnimation() {
        this.setState({
            animateIt: !this.state.animateIt
        })
    
    }
    render() {

        if(this.state.animateIt === true) {
            return(
                <div id="ourmission" style={{ margin: '20px'}}>
                    <StyleRoot>
                        <div >
                            <Row>
        
                                <div className="col-4 col-sm-4" >
                                   
                                    <Card height={50} >
                                        <CardHeader className="card-header text-center feedback-card-color">
                                            <div>
                                                <i className="fa fa-rocket fa-lg"></i>
                                            </div>
                                            The best Chatting App
                                        </CardHeader>
                                        <CardBody className="card-body text-center feedback-card-color">
                                            <CardText>Chatberg is the most popular Omeagle alternative on the web.</CardText>           
                                        </CardBody>               
                                    </Card>
                                    
                                </div>
        
                                <div className="col-4 col-sm-4">
        
                                <Card>
                                    <CardHeader className="card-header text-center download-card-color">
                                        <div>
                                            <img src={logo} width="50" height="50" alt="chatberg"/>
                                        </div>
                                        Meet New People
                                    </CardHeader>
                                    <CardBody className="card-body text-center download-card-color">
                                        <CardText>With Chatberg, you meet strangers from around the world at the click  of a button</CardText>           
                                    </CardBody>               
                                </Card>
        
                                </div>
        
                                <div className="col-4 col-sm-4">
        
                                <Card>
                                    <CardHeader className="card-header text-center light-gray">
                                        <div>
                                            <FaRobot size="50"/>
                                        </div>
                                        Bot Free
                                    </CardHeader>
                                    <CardBody className="card-body text-center light-gray" >
                                        <CardText>Bots ruin your experience. We've worked hard to develop effective anti-bot measures.</CardText>           
                                    </CardBody>               
                                </Card>
        
                                </div>
                            </Row>
        
                        </div>
                    </StyleRoot>
                    
        
                </div>
            );
        }

        return(
            <div id="ourmission" style={{ margin: '20px'}} onMouseEnter={this.doAnimation} onMouseLeave={this.doAnimation}>
                <StyleRoot>
                    <div style={styles.bounceInLeft} >
                        <Row>
    
                            <div className="col-4 col-sm-4">
                                <Card height={50} >
                                    <CardHeader className="card-header text-center feedback-card-color">
                                        <div>
                                            <i className="fa fa-rocket fa-lg"></i>
                                        </div>
                                        The best Chatting App
                                    </CardHeader>
                                    <CardBody className="card-body text-center feedback-card-color">
                                        <CardText>Chatberg is the most popular Omeagle alternative on the web.</CardText>           
                                    </CardBody>               
                                </Card>
                                
                            </div>
    
                            <div className="col-4 col-sm-4">
    
                            <Card>
                                <CardHeader className="card-header text-center download-card-color">
                                    <div>
                                        <img src={logo} width="50" height="50" alt="chatberg"/>
                                    </div>
                                    Meet New People
                                </CardHeader>
                                <CardBody className="card-body text-center download-card-color">
                                    <CardText>With Chatberg, you meet strangers from around the world at the click  of a button</CardText>           
                                </CardBody>               
                            </Card>
    
                            </div>
    
                            <div className="col-4 col-sm-4">
    
                            <Card>
                                <CardHeader className="card-header text-center light-gray">
                                    <div>
                                        <FaRobot size="50"/>
                                    </div>
                                    Bot Free
                                </CardHeader>
                                <CardBody className="card-body text-center light-gray" >
                                    <CardText>Bots ruin your experience. We've worked hard to develop effective anti-bot measures.</CardText>           
                                </CardBody>               
                            </Card>
    
                            </div>
                        </Row>
    
                    </div>
                </StyleRoot>
                
    
            </div>
        );
    }
}

export default OurMissionPage;