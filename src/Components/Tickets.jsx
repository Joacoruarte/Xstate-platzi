import React from 'react';
import './Tickets.css';

export const Tickets = ({ send, state }) => {
  const finish = () => {
    send('FINISH')
  };

  return (
    <div className='Tickets'>
      <p className='Tickets-description description'>Gracias por volar con book a fly 💚</p>
      <div className='Tickets-ticket'>
        <div className='Tickets-country'>{state.selectedCountry}</div>
        <div className='Tickets-passengers'>
          <span>✈</span>
          <div className='passengers-div'>
            {state.passengers.map((person, index) => (
              <p key={index}>{person}</p>
            ))} 
          </div>
        </div>
      </div>
      <button onClick={finish} className='Tickets-finalizar button'>Finalizar</button>
    </div>
  );
}; 