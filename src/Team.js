import React from "react";
import { ImageSlider } from './ImageSlider';
import './App.css';

const Team = () => {
    return(<div>
        <div className='heading'>
            <h2 className='heading-inner'>Наша команда</h2>
        </div>
        <ImageSlider />
    </div>);
}

export { Team };