import React from "react"
import { GuestsGallery } from './GuestsGallery'
import './App.css';

const Guests = () => {
    return(<div>
        <div className='heading'>
            <h2 className='heading-inner'>Наши гости</h2>
        </div>
        <GuestsGallery />
    </div>);
}

export { Guests };
