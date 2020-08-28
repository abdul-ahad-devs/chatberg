import React from 'react';
import { Button, Input, Card, CardHeader, CardBody, InputGroupText, InputGroup, } from 'reactstrap';
import "../App.css";
import { bounceInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounceInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounceInLeft, 'bounce')
    },
}

const Contact = (props) => {
  return (
        <div id="contactus" style={{ margin: '20px'}}>
            <StyleRoot style={styles.bounceInLeft}>
                <Card className="features-card-color text-center form-style">
                    <CardHeader className="card-header features-card-color ">
                        Get is touch with us
                    </CardHeader>
                    <h5 style={{ color: 'floralwhite'}}>Drop us a message, we will try to get back to you within 3 working days.</h5>
                <CardBody className="text-center">

                        <div className="offset-3">
                            <InputGroup className="col-sm-8">
                                <InputGroupText>Email</InputGroupText>
                                <Input placeholder="Enter Email" />
                            </InputGroup>
                            <br />

                            <InputGroup className="col-sm-8">
                                <InputGroupText>Feedback</InputGroupText>
                                <Input type="textarea" rows={2} placeholder="Your Feedback goes here" />
                            </InputGroup>
                            <br />

                        <div className="col-sm-8">
                            <Button className="jumbotron-btn download-btn">Submit</Button>
                        </div>
                            <br />
                        </div>


                </CardBody>
                </Card>
            </StyleRoot>
        </div>
  );
}

export default Contact;