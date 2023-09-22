import React, { useState } from 'react';
import './Register.css'
import logo from '../components/images/logo.png'
const Modal = ({ onClose }) => {








const [user, setUser] = useState(
  {
      Name: '',
      Number: ''
  }
)
let name, value
const data = (e) => {
  name = e.target.name;
  value = e.target.value;
  setUser({...user, [name]: value })
}
const getdata = async (e) => {
  const {Name, Number} = user;
  e.preventDefault();
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
          Name, Number
      })
  }
  const res = await fetch(
      'https://quiz-7121e-default-rtdb.firebaseio.com/UserData.json',
      options
      )

      if(res){
          alert("✔️")
      }else{
          alert("❌")
      }
}
return (
<div className="Modal">
      
             <button className='exit' onClick={onClose}>❌</button>
              <div className="Register">
             <div className='header_content'>
                 <div className='logo_wrape'>
                     <img src={logo} alt='astrum-logo'/>
                 </div>
      
                 <div className='header_content_bottom'>
                       <h3>Узнай как получить новую профессию!</h3>
                       <span>Оставь свои контакты, и мы свяжемся, чтобы рассказать о наших программах</span>
                 </div>
             </div>
             <form method='POST'>
               <label>
                 <span className='span-num'>1</span><span className='span-text'>Имя</span>
                 <input className='input' type="text" name="Name" placeholder='Your name' value={user.Name} autoComplete='off' required onChange={data} />
               </label> 
                      <label>
                       <span className='span-num'>2</span><span className='span-text'>Номер телефона</span>
                       <input className='input' type="text" name="Number" placeholder='Your number' value={user.Number} autoComplete='off' required onChange={data} />
                      </label>
              
                      <button className='sumbit_btn' onClick={getdata}>Submit</button>
             </form>
             
           </div>
           </div>
)
}

export default Modal;