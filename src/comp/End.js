import React, { useEffect, useState } from 'react';
import logo from '../components/images/logo.png'
import { formatTime } from '../utils';

const End = ({ results, data, onAnswersCheck, onReset, onClose, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);



  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <img className='logo' src={logo} alt="" />
          <h3>Muvaffaqiyat!</h3>
          <h6>Siz oxiriga yetdingiz! <br />Sizning sohadagi bilimingiz:</h6>
          <h4>🎯</h4>
          <span className='spa1'>{data.length} tadan {correctAnswers}</span> <br />
          <span className='spa2'><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></span> <br />
          <span className='spa3'><strong>Sarflangan vaqt</strong> {formatTime(time)}</span>
          <button className="button is-success" onClick={onReset}>Takrorlash</button>
          
          <button className="button is-info mr-2" onClick={onAnswersCheck}>Ro'yhatdan o'tish</button>
        </div>
      </div>
    </div>
  );
}





export default End;