import React from 'react';
import { ServiceCard } from './ServiceCard';
import standart from '../src/images/standart.jpg'
import komfort from '../src/images/komfort.jpg'
import premium from '../src/images/premium.jpg'
import './App.css';

const Services = () => {

  const servicesData = [
    {
      title: 'Стандарт',
      image: standart,
      originalPrice: '10,000',
      discountedPrice: '7,000',
      features: ['Запись голоса', 'Выравнивание нот', 'Обработка вокала']
    },
    
    {
      title: 'Комфорт',
      image: komfort,
      originalPrice: '15,000',
      discountedPrice: '12,000',
      features: ['Запись голоса', 'Выравнивание нот', 'Обработка вокала', 'Мини-урок по вокалу и репетиция']
    },

    {
      title: 'Премиум',
      image: premium,
      originalPrice: '20,000',
      discountedPrice: '18,000',
      features: [
        'Запись голоса',
        'Выравнивание нот',
        'Обработка вокала',
        'Мини-урок по вокалу и репетиция',
        'Поиск и подготовка минуса',
        'Бэк-вокал и подголоски от студии'
      ]
    },
  ];

  return (
    <div className='heading'>
      <h2 className='heading-inner'>Услуги</h2>
      
      <div className="services-row">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="service-btn-container">
        <button className='service-btn'>
        <a className='service-btn-link' href="https://wa.me/77021175989" target="_blank" rel="noreferrer">Узнать подробнее</a>
        </button>
      </div>

    </div>
  );
};

export { Services };