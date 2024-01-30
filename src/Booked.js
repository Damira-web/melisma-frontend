import React from 'react';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { RxEyeClosed } from 'react-icons/rx';
import './App.css';

const Booked = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (<div>
      
    <button className='btn-booked' onClick={handleOpenModal}>
      Записаться
    </button>

    <div>
      <ReactModal
        overlayClassName='ReactModal-overlay'
        className='ReactModal-container'
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel='Example Modal'
      >

        {showAnswer ? (
          <div className='showAnswer'>
            <p>Вы записаны в студию звукозаписи "MELISMA"</p>
            <img src='https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='studio' width='300px'/>
          </div>
        ) : (
          <form className='form-container' method='POST' action='/'>
            <div>
              <input className='booked-input' name='name' placeholder='Ваше имя' />
            </div>

            <div>
              <input className='booked-input' name='email' placeholder='Еmail' />
            </div>

            <textarea
              className='booked-textarea'
              name='message'
              cols='30'
              rows='10'
            >{`Услуга:${'\n'}Дата:${'\n'}Время:`}
            </textarea>
            
            <div>
              <button className='btn-booked-send' onClick={handleShowAnswer}>
                Отправить
              </button>
            </div>
          </form>
        )}

        <div className='btn-closeModal-container'>
          <button className='btn-closeModal' onClick={handleCloseModal}>
            <RxEyeClosed />
          </button>
        </div>
      </ReactModal>
    </div>
  </div>);
}

export { Booked };