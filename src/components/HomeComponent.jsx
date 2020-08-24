import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import mission from '../images/mission.jpg';
import features from '../images/features.jpg';
import feedback from '../images/feedback.jpg';
import '../App.css';


const items = [
    {
      src: mission,
      altText: 'Our mission is to bring people of same interests and nature closer to each other',
      caption: 'OUR MISSION',
      text: 'Our mission is to bring people of same interests and nature closer to each other'
    },
    {
      src: features,
      altText: '',
      caption: 'CHATBERG FEATURES'
    },
    {
      src: feedback,
      altText: 'Slide 3',
      caption: 'USERS FEEDBACK'
    }
  ];

const HomePage = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
          className="carousel-item"
        >
          <img src={item.src} alt={item.altText} height={"500"} width={"100%"}/>
          <CarouselCaption captionText={item.text} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
}

export default HomePage;