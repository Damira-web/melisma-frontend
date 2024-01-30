import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./Home";
import { About } from "./About";
import { Team } from "./Team";
import { Services } from "./Services";
import { Guests } from "./Guests";
import { FaqSection } from "./FaqSection";
import { Feedback } from "./Feedback";
import { Contacts } from "./Contacts";
import './App.css';

function AppRouter() {

    const scrollIntoView = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (<Router>
        <nav className='menu'>
            <Link to="/" className='link'>Главная</Link>
            <Link to="/about" className='link'>О нашей студии</Link>
            <Link to="/team" className='link' onClick={() => scrollIntoView('team')}>Наша команда</Link>
            <Link to="/services" className='link'>Услуги</Link>
            <Link to="/guests" className='link' onClick={() => scrollIntoView('guests')}>Наши гости</Link>
            <Link to="/faq" className='link' onClick={() => scrollIntoView('faq')}>Вопросы-ответы</Link>
            <Link to="/feedback" className='link' onClick={() => scrollIntoView('feedback')}>Отзывы</Link>
            <Link to="/contacts" className='link' onClick={() => scrollIntoView('contacts')}>Контакты</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/guests" element={<Guests/>}/>
            <Route path="/faq" element={<FaqSection/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    </Router>);
}

export default AppRouter;