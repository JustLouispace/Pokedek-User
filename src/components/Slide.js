import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e ? e.direction : null);
    };

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} fade={true} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="images/Slide1.jpg"
                    alt="First slide"
                    
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="images/Slide2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="images/Slide3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;
