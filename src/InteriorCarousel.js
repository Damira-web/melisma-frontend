import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import studio1 from '../src/images/studio1.jpeg';
import studio2 from '../src/images/studio2.jpg';
import studio3 from '../src/images/studio3.jpeg';
import './App.css';

const InteriorCarousel = () => {
    return (<div className="interior-carousel-container">
        <Carousel>
            <div>
                <img src={studio1}  alt="Interior1" />
            </div>

            <div>
                <img src={studio2} alt="Interior2" />
            </div>

            <div>
                <img src={studio3} alt="Interior3" />
            </div>
        </Carousel>
    </div>);
};

export { InteriorCarousel };