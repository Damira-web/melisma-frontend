import React, { useState } from 'react';
import { FaArrowDown } from "react-icons/fa";

const FaqSection = () => {

    const [activeItem, setActiveItem] = useState(null);

    const toggleItem = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };

    return(
        <section>

            <h2 className='faq-heading-inner'>Вопросы-ответы</h2>

            <div className={`faq-item ${activeItem === 1 ? 'active' : ''}`}>
                <div className='faq-question'>
                    <h3>А если я не умею петь?</h3>
                    <FaArrowDown className='faq-button' onClick={() => toggleItem(1)}></FaArrowDown>
                </div>
                <p>Звукорежиссеры используют собственно разработанный метод обработки и тюнинга вокала.
                    Технология ручного тюнинга вокала позволяет достичь точного попадания в ноты, 
                    сохранив при этом тембр голоса и естественность звучания.
                </p>            
            </div>

            <div className={`faq-item ${activeItem === 2 ? 'active' : ''}`}>
                <div className='faq-question'>
                    <h3>Сколько времени обрабатывается песня?</h3>
                    <FaArrowDown className='faq-button' onClick={() => toggleItem(2)}></FaArrowDown>
                </div>
                <p>Обработка песни занимает от 5-7 дней. 
                    *Так же возможен ускоренный вариант обработки (условия уточняйте у менеджера студии)
                </p>            
            </div>

            <div className={`faq-item ${activeItem === 3 ? 'active' : ''}`}>
                <div className='faq-question'>
                    <h3>В каких жанрах Вы делаете аранжировки?</h3>
                    <FaArrowDown className='faq-button' onClick={() => toggleItem(3)}></FaArrowDown>
                </div>
                <p>Наша команда работает во всех стилях и следит за тенденциями в музыкальной индустрии, 
                    поэтому каждый аранжировщик студии сфокусирован на конкретном жанре музыки, 
                    это дает вам гарантию современного звучания песни.
                </p>           
            </div>

            <div className={`faq-item ${activeItem === 4 ? 'active' : ''}`}>
                <div className='faq-question'>
                    <h3>За сколько дней нужно бронировать студию под запись песни или репетицию в зале?</h3>
                    <FaArrowDown className='faq-button' onClick={() => toggleItem(4)}></FaArrowDown>
                </div>
                <p>Забронировать студию звукозаписи, лучше за несколько дней до запланированной даты посещения,
                    написав нам на почту или позвонив по указанным номерам телефонов.
                </p>          
            </div>

            <div className={`faq-item ${activeItem === 5 ? 'active' : ''}`}>
                <div className='faq-question'>
                    <h3>Каковы ваши тарифы на услуги звукозаписи?</h3>
                    <FaArrowDown className='faq-button' onClick={() => toggleItem(5)}></FaArrowDown>
                </div>
                <p>Информация о ценах и возможностях оплаты услуг указана в разделе услуги.</p> 
            </div>

        </section>);
}

export { FaqSection };