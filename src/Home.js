import React from 'react';
import { BackgroundVideo } from './BackgroundVideo';
import { Team }  from './Team';
import { Booked } from './Booked';
import { FaqSection } from './FaqSection';
import { Contacts } from './Contacts';
import { Feedback } from './Feedback';
import { Guests } from './Guests';
import { ScrollToTopButton } from './ScrollToTopButton';
import './App.css';

const Home = () => {
    return (<div> 

        <div className='container'>
            <BackgroundVideo />

            <div className='heading-top'>
                <h1 className='title'>melisma.kz</h1> 
            </div>

            <div className='heading-top1'>
                <p className='title1'> профессиональная студия звукозаписи</p>
            </div>
        </div>

        <div className='heading'>
            <h2 className='heading-inner-about'>О нашей студии</h2>
            <p className='custom-paragraph red-indent'>
            Студия Melisma - это команда высококлассных специалистов различных направлений:
            Озвучивание с профессиональными дикторами, актерами и актрисами дубляжа. Адаптированный перевод текста озвучки на казахский, русский и английский языки.
            Синтез речи.
            Запись песен, гимнов, джинглов инструментов.
            Сведение и мастеринг.
            Запись медитаций, аудиокниг, подкастов и тд. 
            Звуковой дизайн.
            Наши двери открыты для Вас ежедневно с 10.00 до 22.00
            </p>
        </div>

        <Team />

        <div className='heading'>
            <h2 className='heading-inner'>Услуги</h2>
            <div className='service-header'>
            <p className='service-paragraph'>Запись песни <span className='service-price'>......................................................................................................................................15000</span></p>
            <p className='service-paragraph'>Аранжировка <span className='service-price'>.....................................................................................................................................40000</span></p>
            <p className='service-paragraph'>Перебивка бита <span className='service-price'>...............................................................................................................................30000</span></p>
            <p className='service-paragraph'>Песня под ключ <span className='service-price'>.............................................................................................................................150000</span></p>
            </div>
            <Booked />
        </div>

        <FaqSection />

        <Contacts />

        <Feedback />

        <Guests />

        <ScrollToTopButton />

    </div>);
}

export { Home };