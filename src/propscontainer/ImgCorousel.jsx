// ImageCarousel.jsx
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ImgCorousel = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <Carousel 
        showThumbs={false} 
        infiniteLoop 
        autoPlay 
        interval={3000} 
        showStatus={false}
        dynamicHeight={true}
      >
        <div>
          <img src="./image/Banner-4.jpg" style={{"width" : "100%" , "height":"400px"}} alt="Slide 1" />
         
        </div>
        <div>
          <img src="./image/Banner-4.jpg" style={{"width" : "100%" , "height":"400px"}} alt="Slide 2" />
          
        </div>
        <div>
          <img src="./image/Banner-4.jpg" style={{"width" : "100%" , "height":"400px"}} alt="Slide 3" />
        
        </div>
      </Carousel>
    </div>
  );
};

export default ImgCorousel;
