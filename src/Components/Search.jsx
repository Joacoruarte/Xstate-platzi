import React, { useState } from 'react';
import './Search.css';

export const Search = ({state , send }) => {
  const [flight, setFlight] = useState('');
  const { countries } = state.context

  const goToPassengers = () => {
    send("CONTINUE" , { selectedCountry: flight })
  }

  const handleSelectChange = (event) => {
    setFlight(event.target.value)
  }

  return (
    <div className='Search'>
      <p className='Search-title title'>Busca tu destino</p>
      <select id="country" className='Search-select' value={flight} onChange={handleSelectChange}>
        <option value="" disabled defaultValue>Escoge un país</option>
        {countries.map((option , index) => <option value={option.name.common} key={index}>{option.name.common}</option>)}
      </select>
      <button onClick={goToPassengers} disabled={flight === ''} className='Search-continue button'>Continuar</button>
    </div>
  );
}; 