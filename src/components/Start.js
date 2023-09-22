import React from 'react';
import './Start.css'
import logo from '../components/images/logo.png'
import galochka from '../components/images/galochka.png'

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        
        <div className="content">
          <img className='logo' src={logo} alt="" />
          <h1>Узнай <br /> кто ты в IT?</h1>
          <p>пройди Интерактивный ТЕст и узнай какая <br /> специальность в IT, тебе подходит больше <br /> всего.</p>
          <img className='galochka' src={galochka} alt="" />
          <h5>Время выполнения 5 минут</h5>
          <button className="button is-info is-medium" onClick={onQuizStart}>Поехали</button>
        </div>
      </div>
    </div>
  );
}

export default Start;