
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const ImageSlider = () => {
    const images = [
        { url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww', text: 'Алишер - руководитель студии' },
        { url: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Лео - звукорежиссер' },
        { url: 'https://img.freepik.com/free-photo/smiling-business-woman-with-folded-hands-against-white-wall-toothy-smile-crossed-arms_231208-10801.jpg?w=826&t=st=1705398236~exp=1705398836~hmac=ef16131412caf7f46fb3cdb92a77d3743d80c8afabb5f9c41111d56d9f491fdf', text: 'Олеся - вокалист' },
        { url: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Дмитрий - автор песен' },
        { url: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Мурат - аранжировщик' },
        { url: 'https://img.freepik.com/free-photo/medium-shot-woman-holding-notebooks_23-2149271075.jpg?w=826&t=st=1705412675~exp=1705413275~hmac=8fd096cd11e1ae43492e1c84352896558dfa72361d64c3724afa7c910032f302', text: 'Дина - видеограф' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.url} alt={`team ${index + 1}`} />
                        <div className="slide-text">{slide.text}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export { ImageSlider };