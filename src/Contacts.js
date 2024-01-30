import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import './App.css';

const Contacts = () => {
    return (<div>

        <div className='heading'>
            <h2 className='heading-inner'>Контакты</h2>
        </div>

        <iframe
        title="Google Map"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.5712827901043!2d76.90967241531389!3d43.2394474871048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369318d386b4f%3A0x4f305e6d496ffbd0!2z0L_RgC3Rgi4g0JDQsdCw0Y8gNTQsINCQ0LvQvNCw0YLRiyAwNTAwMDA!5e0!3m2!1sru!2skz!4v1648149129032!5m2!1sru!2skz"
        allowFullScreen>
        </iframe>

        <div className="contact-container">
            <a className="contact"  href="mailto:melisma.record22@gmail.com"><AiOutlineMail size={24} /></a>
            <a className="contact" href="https://wa.me/77021175989" target="_blank" rel="noreferrer"><AiOutlineWhatsApp size={24} /></a>
            <a className="contact" href="https://Instagram.com/melisma.kz?utm_medium=copy_link" target="_blank" rel="noreferrer"><AiOutlineInstagram size={24} /></a>
        </div>

    </div>);
}

export { Contacts };