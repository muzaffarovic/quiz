import React, { useState, useEffect, useRef } from 'react';
import logo from '../components/images/logo.png'
import timer from '../components/images/timer.png'
import { formatTime } from '../utils';

const Question = ({ data, time, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('пожалуйста выберите один из вариантов!');
    }
    onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
    setSelected('');
    if(activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    }else {
      onSetStep(3);
    }
  }




  return(
    <div className="card">
      <div className="card-content">
        <span className='con'>{data.count}</span>
        
      <b><img className='timer' src={timer} alt="" />{formatTime(time)}</b>
        <div className="content">
          <img className='logo' src={logo} alt="" />
          <h2 className="mb-5">{data.question}</h2>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="radio has-background-light" key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div>
          {error && <div className="has-text-danger">{error}</div>}
          <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Далее</button>
        </div>
      </div>
    </div>
  );
}

export default Question;