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
          <h1>IT sohasida <br /> kimligingizni bilib <br /> oling?</h1>
          <p>Interaktiv TESTdan o'ting va qaysi IT <br /> mutaxassisligi sizga mos kelishini bilib oling.</p>
          <img className='galochka' src={galochka} alt="" />
          <h5>Ishlash vaqti 5 daqiqa</h5>
          <button className="button is-info is-medium" onClick={onQuizStart}>Boshladik</button>
        </div>
      </div>
    </div>
  );
}

export default Start;