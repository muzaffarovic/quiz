import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from './components/Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Uz from './Uz';
// import 'bulma/css/bulma.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/">
        <Route index element={<Register />} />
        <Route path="/Ru" element={<App />} />
        <Route path="/Uz" element={<Uz/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
