import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import logo from '../components/images/logo.png'

const Register = () => {
  return (
    <div className='card'>
      <img className='logo' src={logo} alt="" />
      <div className="lang">
        <h1 className='tanla'>Tilni tanlang / выберите язык</h1>
        <button className='ru'><Link className='rus' to="/Ru">ru</Link></button>
        <button className='uz'><Link className='rus' to="/Uz">uz</Link></button>
      </div>
      
    </div>
  )
}

export default Register