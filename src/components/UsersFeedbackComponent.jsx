import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card, CardHeader, CardBody, Media } from 'reactstrap';
import "../App.css";
import FEEDBACKS from '../feedbacks/feedbacks';
import ReactStars from "react-rating-stars-component";
import Avatar from 'react-avatar';
import '../App.css';
import img from '../images/feedbacks/acm.jpg';
import { bounceInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


const styles = {
  bounceInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInLeft, 'bounce')
  },
}

const RatingStars = ({props}) => {

       
      return(
        <ReactStars
          count={5}
          size={50}
          value={props.stars}
          // activeColor="#31D8A7"
          activeColor="#303243"
          edit={false}

        />
      );
}

const RenderCard = ({props}) => {

  return(
    <Media className="row-header">
      <Media left href="">
        <Avatar name={props.name} src={img} round={true} size={200} style={{ margin: '10px' }}/>
      </Media>
      <Media body className="text-left">
        <Media heading >
            <RatingStars props={props} />
            {props.heading}
        </Media>
            <hr className="card-break"/>
            {props.description}
            <hr className="card-break"/>
            <div className="row">
              <div className="col-sm-3">
                Date: {props.date}
              </div> 

              <div className="col-sm-3">
                Time {props.time}
              </div>

            </div>
      </Media>
    </Media>
  );

}



const UsersFeedback = (props) => {


    const settings = {
        adaptiveHeight: false,   
        dots: true,
        infinite: true,
        speed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        initialSlide: 1,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };


    return (
      <div style={{ margin: '20px'}} id="usersfeedback">   
        <StyleRoot style={styles.bounceInLeft}>
          <Card className="feedback-card-color text-center">
            <CardHeader className="card-header feedback-card-color" >
                Users Feedback
            </CardHeader>
              
            <CardBody className="card-body">
                <Slider {...settings} arrows={false} style={{ margin: '20px'}}>
                    
                  {FEEDBACKS.map((user) => {
          
                    return (
                        <div  className="container">
                            <RenderCard props={user} />
                        </div>
                    );
          
                    })
                  }
            
                </Slider>
            </CardBody>    
        </Card>
        </StyleRoot>
      </div>
    );
  
}

export default UsersFeedback;



