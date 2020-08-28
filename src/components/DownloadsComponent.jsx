import React from 'react';
import { Card, CardHeader, CardBody, Button } from 'reactstrap';
import "../App.css";
import { bounceInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounceInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounceInLeft, 'bounce')
    },
  }

const DownloadsPage = () => {

    return(
        <div style={{ margin: '20px'}} id="downloads">
            <StyleRoot style={styles.bounceInLeft}>
                <Card className="download-card-color text-center">
                    <CardHeader className="card-header download-card-color ">
                        Downloads
                    </CardHeader>
                    <CardBody>
                        <h5>We have been working on our Android and iOS Applications</h5>
                        <div>
                            <Button className="download-btn features-card-color" size="lg">
                                <i className="fa fa-android fa-lg" style={{ marginRight: '5px'}}></i>Android (Coming Soon)
                            </Button>

                            <Button className="download-btn" size="lg" color="danger">
                                <i className="fa fa-apple fa-lg" style={{ marginRight: '5px'}}></i>iOS (Coming Soon)
                            </Button>
                        </div>   
                    </CardBody> 
                </Card>
            </StyleRoot>
        </div>
    );
}

export default DownloadsPage;